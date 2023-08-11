const axios = require("axios");

try {
  axios
    .get("https://wwwwww.google.com")
    //using promises
    .then((response) => {
      console.log(response);
    });
} catch (error) {
  console.log(error);
}
