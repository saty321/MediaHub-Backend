import { Router } from "express";
const router = Router();
import {
    loginUser,
    logoutUser,
    registerUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUsercoverImage,
    getUserChannelProfile,
    getWatchHistory,
 } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

router.route("/register").post(
    upload.fields([
    {
     name: "avatar",
     maxCount: 1
    },
    {
     name: "coverImage",
     maxCount: 1
    }
    ]),
    registerUser
)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route("/update-accoutDetails").patch(verifyJWT, updateAccountDetails)
router.route("/update-avtar").patch(
    verifyJWT,
    upload.single('avatar'),
    updateUserAvatar
)
router.route("/update-coverImage").patch(
    verifyJWT,
    upload.single('coverImage'),
    updateUsercoverImage
)
router.route("/channel-profile-details/:username").get(verifyJWT, getUserChannelProfile),
router.route("/watch-historyOfUser").get(verifyJWT, getWatchHistory)

export {router}