import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import "./JobsPage.scss";
import { jobService } from "../../services/jobService";
export default function JobsPage() {
  let { searchValue } = useSelector((state) => state.jobSlice);
  let { filteredJobs } = useSelector((state) => state.jobSlice);
  const { Meta } = Card;
  useEffect(() => {
    jobService
      .getJobList()
      .then((res) => {
        if (filteredJobs) {
          setJobs(filteredJobs);
        } else {
          setJobs(res.data);
        }
      })
      .catch((err) => {});
  }, [filteredJobs]);
  const [jobs, setJobs] = useState([]);
  const [pagination, setpagination] = useState({
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 12,
  });

  let navigate = useNavigate();
  let { userInfo } = useSelector((state) => state.userSlice);
  const handlePageChange = (page) => {
    setpagination({
      current: page,
      minIndex: (page - 1) * 12,
      maxIndex: page * 12,
    });
  };
  return (
    <div className="bg-white  border-t border-gray-400">
      <div className="w-9/12 m-auto lg:p-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-3">
          {jobs.map((item, index) => {
            return (
              index >= pagination.minIndex &&
              index < pagination.maxIndex && (
                <Card
                  key={index}
                  style={{ width: 300 }}
                  cover={<img alt="example" src={item.image} />}
                >
                  <a
                    onClick={() => {
                      navigate(`/jobs/${item._id}`);
                    }}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      }
                      title={item.name}
                    />
                  </a>
                  <div className="price mt-5 border-t border-gray-400 flex justify-between p-2">
                    <span>
                      <i className="fa fa-heart text-gray-500"></i>
                    </span>
                    <span className="font-semibold">
                      STARTING AT {item.price}${" "}
                    </span>
                  </div>
                </Card>
              )
            );
          })}
        </div>
        <div className="mt-3 mx-auto">
          <Pagination
            onChange={handlePageChange}
            defaultCurrent={1}
            total={jobs.length}
            defaultPageSize="12"
          />
        </div>
      </div>
    </div>
  );
}
