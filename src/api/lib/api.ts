"use client"

import { QueryClient } from "@tanstack/react-query"

import { ACCESS_TOKEN_HEADER_KEY } from "../constants/header-key"
import { store } from "@/redux/store"
import { setToken } from "@/redux/slice/loginSlice"
import { access } from "fs"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:8080"

export class Fetcher {
  private baseUrl: string

  private unAuthorizedHandler: () => void = () => {}

  private tokenRefreshHandler: (access: string, refresh: string) => void =
    async () => {}

  private errorHandler: (error: Error) => void = () => {}

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public setErrorHandler(handler: (error: Error) => void) {
    this.errorHandler = handler
  }

  public setTokenRefreshHandler(
    handler: (access: string, refresh: string) => void
  ) {
    this.tokenRefreshHandler = handler
  }

  public setUnAuthorizedHandler(handler: () => void) {
    this.unAuthorizedHandler = handler
  }

  private async request<ResponseType>(
    url: string,
    options?: RequestInit
  ): Promise<ResponseType> {
    let data = null

    try {
      const fetchOptions: RequestInit = {
        ...options,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...options?.headers
        }
      }

      const response = await fetch(url, fetchOptions)

      if (response.ok) {
        data = (await response.json()) as Promise<ResponseType>
      } else {
        const error = (await response.json()) as { code: string }
        throw new Error(error.code)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      this.errorHandler(error as Error)
      throw error
    }

    return data
  }

  private async authRequest<ResponseType>(
    url: string,
    client: QueryClient,
    options?: RequestInit,
    retry: boolean = false
  ): Promise<ResponseType> {
    let data = null
    const access = client.getQueryData<string>(["access"])
    const refresh = client.getQueryData<string>(["refresh"])

    if (!access && !refresh && global.window !== undefined) {
      this.unAuthorizedHandler()
    }

    if (!access && refresh) {
      await this.generateNewAccessToken(refresh, client)
    }

    try {
      const fetchOptions: RequestInit = {
        ...options,
        headers: {
          [ACCESS_TOKEN_HEADER_KEY]: `Bearer ${client.getQueryData<string>([
            "access"
          ])!}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }

      // const response = await fetch(`${this.baseUrl}${url}`, fetchOptions)
      const response = await fetch(url, fetchOptions)

      console.log(`Bearer ${client.getQueryData<string>(["access"])!}`)

      if (response.status === 401) {
        if (retry) {
          throw new Error("생성된 토큰이 비정상적입니다! 다시 로그인해주세요")
        }

        await this.generateNewAccessToken(refresh!, client)
        return this.authRequest<ResponseType>(url, client, options, true)
      }

      if (response.ok) {
        data = (await response.json()) as Promise<ResponseType>
      } else {
        const error = (await response.json()) as { code: string }
        throw new Error(error.code)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      this.errorHandler(error as Error)
      throw error
    }

    return data
  }

  private generateNewAccessToken = async (
    refresh: string,
    client: QueryClient
  ) => {
    let data = null

    try {
      const res = await fetch(`${API_URL}/oauth/token/refresh`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          [ACCESS_TOKEN_HEADER_KEY]: `Bearer ${refresh}`
        }
      })

      if (res.ok) {
        data = await res.json()
      } else {
        const error = await res.json()
        throw new Error(error.code)
      }

      const newAccessToken = data?.result?.accessToken
      // const newAccessToken = res.headers.get(ACCESS_TOKEN_HEADER_KEY)
      // const newRefreshToken = res.headers.get(REFRESH_TOKEN_HEADER_KEY)

      if (!newAccessToken) {
        throw new Error("토큰 갱신에 실패하였습니다.")
      }

      // Cookies.set("access", newAccessToken, {
      //   expires: new Date("2038-01-19T03:14:07.000Z"),
      // })
      // client.setQueryData(["access"], newAccessToken)

      store.dispatch(
        setToken({ accessToken: newAccessToken, refreshToken: refresh })
      )
    } catch {
      if (global.location) {
      }
      this.unAuthorizedHandler()
    }
  }

  public async get<ResponseType>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, options)
  }

  public async authGet<ResponseType>(
    url: string,
    client: QueryClient,
    options?: RequestInit
  ) {
    return this.authRequest<ResponseType>(url, client, options)
  }

  public async post<ResponseType>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: "POST",
      ...options
    })
  }

  public async authPost<ResponseType>(
    url: string,
    client: QueryClient,
    options?: RequestInit
  ) {
    return this.authRequest<ResponseType>(url, client, {
      method: "POST",
      ...options
    })
  }

  public async put<ResponseType = Error>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: "PUT",
      ...options
    })
  }

  public async authPut<ResponseType = Error>(
    url: string,
    client: QueryClient,
    options?: RequestInit
  ) {
    return this.authRequest<ResponseType>(url, client, {
      method: "PUT",
      ...options
    })
  }

  public async patch<ResponseType = Error>(url: string, options?: RequestInit) {
    return this.request<ResponseType>(url, {
      method: "PATCH",
      ...options
    })
  }

  public async authPatch<ResponseType = Error>(
    url: string,
    client: QueryClient,
    options?: RequestInit
  ) {
    return this.authRequest<ResponseType>(url, client, {
      method: "PATCH",
      ...options
    })
  }

  public async delete<ResponseType = Error>(
    url: string,
    options?: RequestInit
  ) {
    return this.request<ResponseType>(url, {
      method: "DELETE",
      ...options
    })
  }

  public async authDelete<ResponseType = Error>(
    url: string,
    client: QueryClient,
    options?: RequestInit
  ) {
    return this.authRequest<ResponseType>(url, client, {
      method: "DELETE",
      ...options
    })
  }
}

export const baseFetcher = new Fetcher(API_URL)

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export class API {
  private readonly method: Method

  private readonly url: string

  private queryClient?: QueryClient

  private isAuth = false

  public constructor(method: Method, url: string, isAuth = false) {
    this.method = method
    this.url = url
    this.isAuth = isAuth
  }

  public setQueryClient(client: QueryClient) {
    this.queryClient = client
    return this
  }

  public setAuth(isAuth: boolean) {
    this.isAuth = isAuth
    return this
  }

  private async authRequest<ResponseType>(options?: RequestInit) {
    if (!this.queryClient) {
      throw new Error("QueryClient is not set")
    }
    switch (this.method) {
      case "GET":
        return baseFetcher.authGet<ResponseType>(
          this.url,
          this.queryClient,
          options
        )
      case "POST":
        return baseFetcher.authPost<ResponseType>(
          this.url,
          this.queryClient,
          options
        )
      case "PUT":
        return baseFetcher.authPut<ResponseType>(
          this.url,
          this.queryClient,
          options
        )
      case "PATCH":
        return baseFetcher.authPatch<ResponseType>(
          this.url,
          this.queryClient,
          options
        )
      case "DELETE":
        return baseFetcher.authDelete<ResponseType>(
          this.url,
          this.queryClient,
          options
        )
      default:
        throw new Error("Method not allowed")
    }
  }

  public call<T>(options?: RequestInit): Promise<T> {
    if (this.isAuth) {
      return this.authRequest<T>(options)
    }

    switch (this.method) {
      case "GET":
        return baseFetcher.get<T>(this.url, options)
      case "POST":
        return baseFetcher.post<T>(this.url, options)
      case "PUT":
        return baseFetcher.put<T>(this.url, options)
      case "PATCH":
        return baseFetcher.patch<T>(this.url, options)
      case "DELETE":
        return baseFetcher.delete<T>(this.url, options)
      default:
        throw new Error("Method not allowed")
    }
  }
}

export class APIBuilder {
  private api: API

  public static get(url: string) {
    return new APIBuilder("GET", url)
  }

  public static post(url: string) {
    return new APIBuilder("POST", url)
  }

  public static put(url: string) {
    return new APIBuilder("PUT", url)
  }

  public static patch(url: string) {
    return new APIBuilder("PATCH", url)
  }

  public static delete(url: string) {
    return new APIBuilder("DELETE", url)
  }

  private constructor(method: Method, url: string) {
    this.api = new API(method, url)
  }

  public withCredentials(queryClient: QueryClient) {
    this.api.setQueryClient(queryClient).setAuth(true)
    return this
  }

  public build() {
    return this.api
  }
}
