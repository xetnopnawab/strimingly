import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**POST /users/register register controller */
const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend or postman
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res
  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);
  res.status(201).json(new ApiResponse(200, "User registered Successfully"));
});

export { registerUser };
