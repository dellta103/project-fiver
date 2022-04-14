import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { jobService } from "../../services/jobService";
import { filterJobs } from "../../components/redux/slices/jobSlice";
import "./JobsByTypePage.scss";
export default function JobsByTypePage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const [job, setJob] = useState();
  const [jobsByType, setJobsByType] = useState([]);
  useEffect(() => {
    jobService
      .getJobDetail(`/type-jobs/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {});
    jobService
      .getJobsByType(id)
      .then((res) => {
        setJobsByType(res.data.splice(0, 15));
      })
      .catch((err) => {});
  }, []);
  const handleDetailJob = (values) => {
    jobService
      .getJobListByName(values)
      .then((res) => {
        dispatch(filterJobs(res.data));
      })
      .catch((err) => {});
    navigate("/jobs");
  };
  return (
    <div className="border-t border-gray-500 p-3">
      <div className="w-9/12 m-auto">
        <p className="text-4xl font-bold  text-center">{job?.name}</p>

        <div className="type-jobs-content flex justify-between">
          <div className="content-left">
            <p className="text-lg font-medium">{job?.name}</p>
            <ul className="space-y-3">
              {jobsByType?.map((item) => {
                return (
                  <li>
                    <p
                      className="text-blue-500 cursor-pointer"
                      onClick={() => {
                        handleDetailJob(item.name);
                      }}
                    >{`${item.name.substring(0, 30)}...`}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="content-right grid grid-cols-3 gap-4">
            {jobsByType?.map((item) => {
              return (
                <div
                  className="content-right-item cursor-pointer"
                  onClick={() => {
                    handleDetailJob(item.name);
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg shadow-md"
                  />
                  <p className="mt-2 font-medium">{`${item.name.substring(
                    0,
                    30
                  )}...`}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
