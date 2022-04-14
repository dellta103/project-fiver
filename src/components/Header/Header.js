import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../logos/fiverr-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { filterJobs } from "../redux/slices/jobSlice";
import "antd/dist/antd.css";
import { jobService } from "../../services/jobService";
import { localService } from "../../services/localService";
import { userService } from "../../services/userService";

export default function Header() {
  const [jobs, setJobs] = useState([]);
  const [detailUser, setDetailUser] = useState(null);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { userInfo } = useSelector((state) => state.userSlice);

  const { Search } = Input;
  useEffect(() => {
    userService.getDetailUser(userInfo?.user._id).then((res) => {
      setDetailUser(res.data);
    });
  }, []);
  const onSearch = (value) => {
    jobService
      .getJobListByName(value)
      .then((res) => {
        dispatch(filterJobs(res.data));
      })
      .catch((err) => {});
    navigate("/jobs");
  };
  return (
    <div className="fixed top-0 z-50 left-0 w-full bg-white border-b border-gray-400 ">
      <div className="w-9/12  navBar m-auto  flex items-center justify-between">
        <div className="flex space-x-10">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <Search
            placeholder="Find Services"
            onSearch={onSearch}
            enterButton="Search"
            className="search-bar"
          />
        </div>
        <ul className="flex items-center h-full space-x-5">
          <li
            className={
              "font-medium text-black " +
              (userInfo?.user.role !== "ADMIN" ? "hidden" : "block")
            }
          >
            <a href="/admin">Manage</a>
          </li>
          <li className="font-medium text-black">
            <a href="#">Become a Seller</a>
          </li>
          <li>
            {userInfo?.user._id ? (
              <div className="flex space-x-3">
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
                    window.location.href = "/";
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
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
                  className="rounded-lg font-medium"
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Join
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
