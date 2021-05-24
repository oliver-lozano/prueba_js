import { FreeApiController } from "./controller/FreeApiController";
import {UserController} from "./controller/UserController";
import { checkJwt } from "./middlewares/checkJwt";

export const FreeApiRoutes = [{
    method: "get",
    route: "/freeApi",
    controller: FreeApiController,
    validators: [],
    action: "all"
}]

export const UserRoutes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    validators: [checkJwt],
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    validators: [checkJwt],
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    validators: [checkJwt],
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    validators: [checkJwt],
    action: "remove"
}];

export const Routes = [
    ...UserRoutes,
    ...FreeApiRoutes
]