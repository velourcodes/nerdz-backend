import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

export const JWTVerify = asyncHandler(async (req, res, next) => {
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new ApiError(401, "Unauthorized Request!");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken._id).select(
            "-password -refreshToken"
        );

        if (!user) {
            throw new ApiError(401, "Invalid Access Token!");
        }

        // Attach user + role to request
        req.user = {
            _id: user._id,
            email: user.email,
            username: user.username,
            role: user.role, // 👈 CRITICAL
        };

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new ApiError(498, "Token Expired");
        }
        throw new ApiError(401, "Invalid Access Token");
    }
});

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            throw new ApiError(403, "Access denied");
        }

        if (!allowedRoles.includes(req.user.role)) {
            throw new ApiError(
                403,
                `Role '${req.user.role}' is not allowed to access this resource`
            );
        }

        next();
    };
};
