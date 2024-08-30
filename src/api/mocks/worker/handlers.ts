import { blog } from "../../mocks/handlers/blog"
import { login } from "../../mocks/handlers/login"
import { user } from "../../mocks/handlers/user"
import { alarm } from "../handlers/alarm"

export const handlers = [...blog, ...login, ...user, ...alarm]
