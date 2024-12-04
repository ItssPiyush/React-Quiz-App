const data = require("./questions.json"); // Adjust the path as necessary

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
