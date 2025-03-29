import { Router } from "express";
import signupRoute from "./auth/signup";
import loginRoute from "./auth/login";
import profileRoute from "./user/profile";
import resetPassword from "./auth/resetPassword";
import updatePassword from "./auth/updatePassword";
import userRoutes from "./user/users";

const rootRouter: Router = Router();

rootRouter.use("/auth/signup", signupRoute);
rootRouter.use("/auth/login", loginRoute);
rootRouter.use("/user/profile", profileRoute);
rootRouter.use("/auth/reset_password", resetPassword);
rootRouter.use("/auth/update_password", updatePassword);
rootRouter.use("/users", userRoutes);


export default rootRouter;
