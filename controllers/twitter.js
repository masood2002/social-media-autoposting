import { twitterPosting } from "../services/index.js";

import { errorResponse, successResponse } from "../resources/index.js";
// const createTwitterPost = async (req, res) => {
//   try {
//     console.log("enters");
//     const result = await addPost();
//     if (result.success) {
//       console.log(result);
//       res.status(200).json({ msg: " Post Added" });
//     } else {
//       res.status(404).json({ mag: "Error while adding Post" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(505).json({ mag: "Error in server" });
//   }
// };
const createTwitterPost = async (req, res) => {
  try {
    await twitterPosting();
    return res
      .status(200)
      .json(successResponse(req.__("twitter_created_successfully")));
  } catch (error) {
    return res.status(422).json(errorResponse(error.message));
  }
};

export { createTwitterPost };
