import React, { Fragment, useEffect, useState } from "react";
import { Table, Tag, Space, Input, Modal, Form, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { userService } from "../../../services/userService";
import { useSelector } from "react-redux";
import { jobService } from "../../../services/jobService";
export default function ContentGigs() {
  let { userInfo } = useSelector((state) => state.userSlice);
  const { Search } = Input;
  const onSearch = (value) => {
    jobService
      .findGigs(value)
      .then((res) => {
        setGigs(res.data);
      })
      .catch((err) => {});
  };
  const [gigs, setGigs] = useState([]);
  const [singleGig, setSingleGig] = useState(null);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRating, setNewRating] = useState("");
  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const changeHandle = (e) => {
    let file = e.target.files[0];
    let data = new FormData();
    data.append("job", file);
    jobService
      .updateGigImage(data, singleGig?._id, userInfo?.token)
      .then((res) => {})
      .catch((err) => {});
  };
  const handleOk1 = () => {
    jobService
      .editGigs(
        {
          name: newName || singleGig?.name,
          price: newPrice || singleGig?.price,
          rating: newRating || singleGig?.rating,
        },
        singleGig._id,
        userInfo?.token
      )
      .then((res) => {})
      .catch((err) => {});
    window.location.href = "/admin/gigs";
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const handleOk2 = () => {
    setIsModalVisible2(false);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const onFinish = (values) => {
    jobService
      .addNewGig(values, userInfo?.token)
      .then((res) => {})
      .catch((err) => {});
  };

  const onFinishFailed = (errorInfo) => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return (
          <Fragment>
            <img
              src={image}
              alt=""
              style={{
                height: "30px",
                width: "30px",
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => {
        if (rating === 1000) {
          return <Tag color={"green"}>{rating}</Tag>;
        } else {
          return <Tag color={"purple"}>{rating}</Tag>;
        }
      },
    },

    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (text, gig) => {
        return (
          <Fragment>
            <div className="space-x-3">
              <button
                className="rounded-lg w-10"
                onClick={() => {
                  setSingleGig(gig);
                  showModal1();
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="bg-red-600 rounded-lg w-10"
                onClick={() => {
                  jobService
                    .deleteGigs(gig._id, userInfo?.token)
                    .then((res) => {
                      window.location.href = "/admin/gigs";
                    })
                    .catch((err) => {});
                }}
              >
                <i className="fa fa-trash-alt"></i>
              </button>
            </div>
          </Fragment>
        );
      },
    },
  ];
  useEffect(() => {
    jobService
      .getGigs()
      .then((res) => {
        setGigs(res.data);
      })
      .catch((err) => {});
  }, []);
  const data = gigs;

  return (
    <div className="p-3 space-y-5">
      <button
        className="w-36 rounded-lg"
        onClick={() => {
          showModal2();
        }}
      >
        <i className="fa fa-plus"></i> Add new Gig
      </button>
      <Modal
        title="New Gig"
        visible={isModalVisible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input Price!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              {
                required: true,
                message: "Please input Rating!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 18,
            }}
          >
            <Button
              className="w-28 rounded-lg"
              type="primary"
              htmlType="submit"
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} className="font-bold" />
      <Modal
        title={singleGig?.name}
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <p>Name:</p>
        <Input
          value={newName || singleGig?.name}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <p>Price:</p>
        <Input
          value={newPrice || singleGig?.price}
          onChange={(e) => {
            setNewPrice(e.target.value);
          }}
        />
        <p>Rating:</p>
        <Input
          value={newRating || singleGig?.rating}
          onChange={(e) => {
            setNewRating(e.target.value);
          }}
        />
        <Input
          type={"file"}
          name="job"
          className="mt-3"
          onChange={(e) => {
            changeHandle(e);
          }}
        />
      </Modal>
    </div>
  );
}
