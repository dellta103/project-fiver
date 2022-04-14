import React, { useEffect, useState } from "react";
import { jobService } from "../../services/jobService";
import "./JobDetailPage.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../components/redux/slices/jobSlice";
export default function JobDetailPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let { userInfo } = useSelector((state) => state.userSlice);
  let { comment } = useSelector((state) => state.jobSlice);
  const [detailJob, setDetailJob] = useState();
  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState({});
  useEffect(() => {
    jobService
      .getJobDetail(window.location.pathname)
      .then((res) => {
        setDetailJob(res.data);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    jobService
      .getComments(id)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {});
  }, [detailJob, comment]);
  const handleBookJob = (uri) => {
    jobService
      .bookJob(uri, userInfo?.token)
      .then((res) => {})
      .catch((err) => {});
  };
  const handleNewComment = (values) => {
    jobService
      .newComment(values, userInfo?.token)
      .then((res) => dispatch(addComment(newComment.content)))
      .catch((err) => {});
  };
  return (
    <div className="bg-white  border-t border-gray-400 p-3">
      <div className="w-9/12 m-auto">
        <div className="detail-top flex">
          <div className="detail-top-left">
            <span className="text-2xl text-gray-500 font-bold">
              {detailJob?.name}
            </span>
            <div className="border-t border-gray-300 p-3 mt-3">
              <img src={detailJob?.image} alt="" />
            </div>
          </div>
          <div className="detail-top-right ml-3">
            <div className="plans">
              <div className="border-black border">
                <div className="plans-type flex h-10 ">
                  <div className="bg-gray-200 w-1/3 h-full flex items-center justify-center">
                    <a href="#" className="text-gray-500 font-bold">
                      Basic
                    </a>
                  </div>
                  <div className="bg-white w-1/3 h-full flex items-center justify-center border-b-2 border-green-500">
                    <a href="#" className="text-green-500 font-bold">
                      Standard
                    </a>
                  </div>
                  <div className="bg-gray-200 w-1/3 h-full flex items-center justify-center">
                    <a href="#" className="text-gray-500 font-bold">
                      Premium
                    </a>
                  </div>
                </div>
                <div className="plans-content p-3">
                  <div className="flex justify-between mb-3">
                    <span className="font-bold">Standard</span>
                    <span className="font-bold">${detailJob?.price}</span>
                  </div>
                  <span className="">{detailJob?.name}</span>
                  <div className="flex space-x-3 mt-3 font-semibold">
                    <span>
                      <i className="fa fa-clock"></i> 30 Days Delivery
                    </span>
                    <span>
                      <i className="fa fa-sync"></i> 1 Revision
                    </span>
                  </div>
                  <ul className="mt-2">
                    <li className="font-semibold">
                      <i className="fa fa-check text-green-500"></i> Design
                      Customization
                    </li>
                    <li className="font-semibold">
                      <i className="fa fa-check"></i> Content Upload
                    </li>
                    <li className="font-semibold">
                      <i className="fa fa-check text-green-500"></i> Responsive
                      Design
                    </li>
                    <li className="font-semibold">
                      <i className="fa fa-check text-green-500"></i> Include
                      Source Code
                    </li>
                    <li className="font-semibold">
                      <i className="fa fa-check"></i> 1 Page
                    </li>
                  </ul>
                  <button
                    className="w-full rounded-lg font-semibold"
                    onClick={() => {
                      handleBookJob(detailJob?._id);
                      window.location.href = "/user";
                    }}
                  >
                    Continue (${detailJob?.price})
                  </button>
                  <button className="w-full rounded-lg font-semibold bg-transparent text-black text-green-500">
                    Compare Packages
                  </button>
                </div>
              </div>
              <div className="plans-footer border border-black mt-3 bg-gray-200 p-3 flex flex-col justify-center items-center space-y-3">
                <span>Do you have any special requirements?</span>
                <button className="w-24 bg-transparent text-gray-500 font-bold border border-black">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-bottom mt-5">
          <div className="about">
            <p className="font-semibold text-gray-600 text-2xl">
              About This Gig
            </p>
            <p className="font-medium text-gray-500">
              Hi there ! Thanks for stopping by !! A Team of Talented Graphic
              Designer with 8+ years of experience in Graphic Industry,
              expertise as Logo Maker, You'll get creative & AWESOME logo design
              for your business.
            </p>
            <p className="font-semibold">★ WHAT DO YOU GET? ★</p>
            <ul className="font-medium">
              <li>✔ Highly Professional, UNIQUE & High Quality designs</li>
              <li>✔ UNLIMITED revisions until u r 100% satisfied</li>
              <li>✔ Fast turn around time 24 to 48 hours only.</li>
              <li>
                ✔ 100% original & unique vector design from Adobe Illustrator
              </li>
              <li>
                ✔ Vector Source Files (scalable without any quality loss) (AI,
                EPS, PDF) for the final design
              </li>
              <li>
                ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔
                Guaranteed High Quality work
              </li>
            </ul>
            <p className="font-medium">
              If you have any question, Feel free to★ Contact Me! ★I'll be happy
              to help !
            </p>
          </div>
          <div className="mt-5">
            <span className="text-xl font-bold">About the Seller</span>
            <div className="flex mt-3 space-x-5">
              <img
                src="https://joeschmoe.io/api/v1/random"
                alt=""
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                }}
              />
              <div>
                <p className="text-lg font-medium">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="text-lg font-normal">Web Developer</p>
                <button className="w-20 bg-transparent text-black rounded-lg border-2 border-black">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 comments">
            <p className="text-xl font-bold">Comments</p>
            {comments?.map((item) => {
              return (
                <div className="border-t border-black p-3">
                  <div className="flex space-x-5">
                    <img
                      src={item.user?.avatar}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <span className="text-lg font-semibold">
                      {item.user?.name}
                    </span>
                  </div>
                  <p className="font-medium mt-3">{item.content}</p>
                </div>
              );
            })}
            <div className="new-comment flex flex-col w-1/2 space-y-3">
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="Share your thoughts..."
                className="bg-gray-200 w-full rounded-lg p-3 h-40"
                value={newComment.content}
                onChange={(e) => {
                  setNewComment({
                    ...newComment,
                    user: {
                      name: userInfo?.user.name,
                    },
                    content: e.target.value,
                    job: id,
                  });
                }}
              ></textarea>
              <button
                className="ml-auto rounded-sm bg-blue-600 font-semibold"
                type="submit"
                onClick={(e) => {
                  handleNewComment(newComment);
                  document.querySelector("#comment").value = "";
                  setNewComment("");
                }}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
