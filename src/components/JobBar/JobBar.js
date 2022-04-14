import React, { useState, useEffect } from "react";
import "./JobBar.scss";
import { jobService } from "../../services/jobService";
import { Popover, Button } from "antd";
import "antd/dist/antd.css";
export default function JobBar() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    handleGetJobList();
  }, []);

  const handleGetJobList = () => {
    jobService
      .getMainJobList()
      .then((res) => {
        setJobList(res.data);
      })
      .catch((err) => {});
  };
  const renderJobList = (arr) => {
    return arr.map((jobs, index) => {
      const content = (
        <div className="flex flex-col">
          {jobs?.subTypeJobs.map((item) => {
            return <p>{item?.name}</p>;
          })}
        </div>
      );
      if (index < 9) {
        return (
          <li className="flex-grow">
            <Popover content={content} title={jobs?.name} trigger="hover">
              <a
                href={`/jobs-by-type/${jobs?._id}`}
                className="text-gray-500 font-semibold text-md"
              >
                {jobs?.name}
              </a>
            </Popover>
          </li>
        );
      }
    });
  };

  return (
    <div className={"jobBar "}>
      <ul className="space-x-2  flex items-center h-full justify-between text-center">
        {renderJobList(jobList)}
      </ul>
    </div>
  );
}
