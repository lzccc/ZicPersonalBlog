console.log(process.env.NODE_ENV);
let strings = {
  //serverURL: "http://16.163.102.59",
  serverURL: "http://localhost:8080",
};
if (process.env.NODE_ENV === "development") {
  // Development mode specific code
} else if (process.env.NODE_ENV === "production") {
  // Production mode specific code
  strings.serverURL = "http://192.9.251.238";
}

export default strings;
