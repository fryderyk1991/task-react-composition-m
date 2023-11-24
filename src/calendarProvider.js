const url = "http://localhost:3005/meetings";

function fetchData(options = { method: "GET" }, id = "") {
  const path = url + id;
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
export function loadData() {
  return fetchData();
}
export function createData(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  return fetchData(options);
}
