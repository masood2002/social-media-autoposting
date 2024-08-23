import { igPosting } from "../services/index.js";

import { errorResponse, successResponse } from "../resources/index.js";

const createIgPost = async (req, res) => {
  try {
    await igPosting(req);
    return res
      .status(200)
      .json(successResponse(req.__("insta_created_successfully")));
  } catch (error) {
    return res.status(422).json(errorResponse(error.message));
  }
};

export { createIgPost };
