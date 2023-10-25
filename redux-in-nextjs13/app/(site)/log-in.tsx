"use client";
import { useState } from "react";
import { logIn, logOut, toggleMode } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";

const LogIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");
  const isLoggenId = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  const onClickToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center w-full">
      <div className="">
        <h1 className="text-xl">Logging page!</h1>
        <input
          type="text"
          className=" my-5 p-5 box-border w-full"
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="flex gap-2 flex-wrap">
          <button onClick={onClickLogIn} className="btn btn-success flex-1">
            Log in
          </button>
          <button onClick={onClickLogOut} className="btn btn-secondary ">
            Log out
          </button>
          {isLoggenId && (
            <button onClick={onClickToggle} className="btn btn-primary w-full">
              Toggle Moderator Mode
            </button>
          )}
        </div>
        <br />
      </div>
    </main>
  );
};

export default LogIn;
