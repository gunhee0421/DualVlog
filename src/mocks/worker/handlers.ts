import { blog } from "@/mocks/handlers/blog";
import { login } from "@/mocks/handlers/login";

export const handlers = [
  ...blog,
  ...login
]