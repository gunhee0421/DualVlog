import { blog } from "../../mocks/handlers/blog";
import { login } from "../../mocks/handlers/login";
import { user } from "../../mocks/handlers/user";

export const handlers = [...blog, ...login, ...user];
