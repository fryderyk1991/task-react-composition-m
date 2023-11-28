const url = "http://localhost:3005/meetings";

function fetchData(options = { method: "GET" }, additionalPath = "") {
  const path = url + additionalPath;
  const promise = fetch(path, options);
  return promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
}
export function getDataFromAPI(path) {
  return fetchData(null, path);
}
export function postDataToAPI(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  return fetchData(options);
}
