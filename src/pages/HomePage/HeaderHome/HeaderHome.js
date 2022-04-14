import React from "react";
import logo from "../../../logos/fiverr-newvector-seeklogo.com-3.svg";
import "./HeaderHome.scss";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { localService } from "../../../services/localService";

export default function Header({ scroll }) {
  let navigate = useNavigate();
  let { userInfo } = useSelector((state) => state.userSlice);
  return (
    <div
      className={
        "fixed z-50 top-0 left-0 w-full " +
        (scroll > 90 ? "changed" : "default")
      }
    >
      <div className="w-9/12  navBar m-auto  flex items-center justify-between">
        <div className="flex space-x-10">
          <a href="#">
            <span className="text-4xl  font-bold logo">
              fiverr
              <span
                style={{
                  color: "#1dbf73",
                }}
              >
                .
              </span>{" "}
            </span>
          </a>
        </div>

        <ul className="flex items-center h-full space-x-5">
          <li className="font-medium ">
            <a href="#" className=" seller">
              Become a Seller
            </a>
          </li>
          {userInfo?.user._id ? (
            <li className="flex space-x-3">
              <div
                className="user"
                onClick={() => {
                  navigate("/user");
                }}
              >
                <img
                  src={userInfo?.user.avatar}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <button
                className="signOut rounded-lg font-bold"
                onClick={() => {
                  localService.removeUserInfo();
                  window.location.reload();
                }}
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <div className="space-x-3 buttons">
                <button
                  className="sign-in-btn rounded-lg font-medium"
                  onClick={() => {
                    navigate("/sign-in");
                  }}
                >
                  Sign In
                </button>
                <button
                  className="rounded-lg font-medium button2"
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Join
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
