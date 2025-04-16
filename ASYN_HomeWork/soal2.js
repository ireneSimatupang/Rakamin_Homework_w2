import axios from "axios";

function getAxios() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
    responseType: "json" // ubah dari "stream" ke "json"
  })
  .then(function (response) {
    const result = response.data; // gunakan .data, bukan .json
    console.log(result);
  })
  .catch(function (error) {
    console.error("Terjadi kesalahan:", error);
  });
}

getAxios();