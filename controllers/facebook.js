import { fbPosting } from "../services/index.js";
import { errorResponse, successResponse } from "../resources/index.js";

const createFbPost = async (req, res) => {
  try {
    await fbPosting();
    return res
      .status(200)
      .json(successResponse(req.__("fb_created_successfully")));
  } catch (error) {
    return res.status(422).json(errorResponse(error.message));
  }
};

export { createFbPost };
