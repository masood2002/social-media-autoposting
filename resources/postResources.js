const successResponse = (message, code = 200) => {
  return {
    status: true,
    code: 200,
    message: message,
  };
};

const errorResponse = (message, code = 422) => {
  return {
    status: false,
    code: 422,
    message: message,
  };
};

export { successResponse, errorResponse };
