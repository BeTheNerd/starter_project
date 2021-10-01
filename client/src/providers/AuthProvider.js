import React, { useState } from "react";
import axios from "axios";
export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  //creates new user//
  const handleRegister = async (user, history) => {
    console.log("register user:", user);
    try {
      let res = await axios.post("/api/auth", user);
      console.log(res.data.data);
      setUser(res.data.data);
      history.push("/");
    } catch (error) {
      alert("Could not create user.  Try again if you dare.")
    } finally {
    }
  }
  const handleLogin = async (user, history) => {
    console.log("login user:", user);
    try {
      let res = await axios.post("/api/auth/sign_in", user);
      console.log(res.data.data)
      setUser(res.data.data)
      history.push("/");
    } catch (err) {
      alert("Could not login, check email and password.")
      console.log(err);
      console.log(err.response);
    }
    }
  const handleLogout = (history) => {
    console.log("logout", user);
    setUser(null);
    localStorage.removeItem("access-token");
    history.push("/login");
  };
  return (
    <AuthContext.Provider
    value={{
      user,
      handleRegister,
      handleLogin,
      handleLogout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;