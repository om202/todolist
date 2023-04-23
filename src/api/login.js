import axios from "axios";

export const signUp = (username, email, password, roles) => {
  const data = {
    username: "om",
    email: "om@test.com",
    password: "om1234",
    roles: ["user"],
  };
  axios
    .post("http://localhost:8080/api/auth/signup", data)
    .then((res) => res)
    .catch((error) => {
      console.error("/auth/signup - ", error);
    });
};
