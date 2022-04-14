import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../components/redux/slices/userSlice";
import { userService } from "../../services/userService";
import { jobService } from "../../services/jobService";
import "./UserDetailPage.scss";
import { useNavigate } from "react-router-dom";
import { localService } from "../../services/localService";
export default function UserDetailPage() {
  useEffect(() => {
    jobService
      .getBookedJobs(userInfo?.token)
      .then((res) => {
        setBookedJob(res.data.bookingJob);
      })
      .catch((err) => {});
    userService
      .getDetailUser(userInfo?.user._id, userInfo?.token)
      .then((res) => {
        setDetailUser(res.data);
      });
  }, []);
  let { userInfo } = useSelector((state) => state.userSlice);
  let navigate = useNavigate();
  const [bookedJob, setBookedJob] = useState([]);
  const [img, setImg] = useState(null);
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState([]);
  const [detailUser, setDetailUser] = useState(null);
  const changeHandler = (e) => {
    let file = e.target.files[0];
    // if (
    //   file.type === "image/jpeg" ||
    //   file.type === "image/png" ||
    //   file.type === "image/gif" ||
    //   file.type === "image/jpg"
    // ) {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = (e) => {
    //     setImg(e.target.result);
    //   };
    // }
    let data = new FormData();
    data.append("avatar", file);

    userService
      .uploadAvatar(data, userInfo?.token)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  return (
    <div className="bg-gray-300 p-3">
      <div className="lg:w-9/12 m-auto flex md:w-11/12">
        <div className="left">
          <div className="top rounded-lg shadow-lg py-4">
            <div className="user">
              <label className="avatar m-auto" id="avatar">
                {userInfo?.user.avatar ? (
                  <img src={userInfo?.user.avatar} alt="" />
                ) : (
                  <span className="text-3xl font-semibold text-white ">
                    {userInfo?.user.email[0].toUpperCase()}
                  </span>
                )}

                <input
                  type="file"
                  name="avatar"
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                  accept="image/png,image/jpeg,image/gif,image/jpg"
                />
              </label>
              <br />
              <p className="text-center text-lg font-bold">
                {userInfo?.user.name}
              </p>

              <div className="text w-10/12">
                <div className="text-top flex justify-between">
                  <span className="font-medium">
                    <i className="fa fa-map-marker-alt"></i> From
                  </span>
                  <p className="font-semibold text-gray-500">Vietnam</p>
                </div>
                <div className="text-bottom flex justify-between">
                  <span className="font-medium">
                    <i className="fa fa-user"></i> Member since
                  </span>
                  <p className="font-semibold text-gray-500">May 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom p-3">
            <div className="info">
              <div className="desc flex justify-between ">
                <span className="font-medium">Description</span>
                <a href="#" className="font-medium">
                  Edit
                </a>
              </div>
              <hr className="my-4" />
              <div className="languages flex justify-between">
                <span className="font-medium">Languages</span>
                <a href="#" className="font-medium">
                  Add
                </a>
              </div>
              <hr className="my-4" />
              <div className="links">
                <span className="font-medium">Linked Accounts</span>
                <ul className="space-y-2 mt-2">
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Google</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Dribble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Stack Overflow</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Vimeo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus"></i> <span>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="my-4" />
              <div className="skills">
                <div className="skills-top flex justify-between">
                  <span className="font-medium">Skills</span>
                  <a
                    href="#"
                    className="font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Add New
                  </a>
                </div>
                {/* <div className={`edit-skill ` + (show ? "block" : "hidden")}>
                  <input
                    type="text"
                    name="skill"
                    onChange={(e) => {
                      setSkill([...e.target.value]);
                    }}
                  />
                  <button
                    id="skill"
                    type="submit"
                    onClick={() => {
                      handleSkills(skill, userInfo._id);
                    }}
                  >
                    Save Changes
                  </button>
                </div> */}
                <div className="skills-bottom "></div>
              </div>
              <hr className="my-4" />
              <div className="languages flex justify-between">
                <span className="font-medium">Education</span>
                <a href="#" className="font-medium">
                  Add
                </a>
              </div>
              <hr className="my-4" />
              <div className="languages flex justify-between">
                <span className="font-medium">Certifications</span>
                <a href="#" className="font-medium">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right ml-60">
          <p className="text-2xl font-bold">Your jobs:</p>
          {bookedJob?.map((item) => {
            return (
              <div className="flex bg-white rounded-lg overflow-hidden mb-3">
                <div className="job-left">
                  <img
                    src={item?.image}
                    alt=""
                    style={{
                      width: "200px",
                    }}
                  />
                </div>
                <div
                  className="job-right p-2"
                  onClick={() => {
                    navigate(`/jobs/${item?._id}`);
                  }}
                >
                  <p className="font-bold">{`${item.name.substring(
                    0,
                    20
                  )}...`}</p>
                  <button
                    className="w-24 rounded-sm font-bold mt-3"
                    onClick={() => {
                      navigate(`/jobs/${item?._id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
