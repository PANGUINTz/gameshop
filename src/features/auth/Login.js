import React from "react";
import { useRef, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.prevenDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1>isLoading...</h1>
  ) : (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-white w-[480px] p-5 rounded-xl">
        <h5>ยินดีต้อนรับสู่ TERMGAME24</h5>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col my-5">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              value={user}
              onChange={handleUserInput}
              autoComplete="off"
              required
              className="p-2"
            />
          </div>

          <div className="flex flex-col my-3">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={pwd}
              required
              className="p-2"
            ></input>
          </div>
          <a className="text-gray-500 flex justify-end cursor-pointer">
            ลืมรหัสผ่าน ?
          </a>
          <button className="bg-yellow-500 p-2 my-3 w-full">เข้าสู่ระบบ</button>
        </form>
        <p className="text-center">
          ไม่มีบัญชี? <span>ลงทะเบียน</span>
        </p>
      </div>
    </section>
  );

  return content;
};

export default Login;
