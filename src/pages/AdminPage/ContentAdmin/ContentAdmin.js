import React, { Fragment, useEffect, useState } from "react";
import { Table, Tag, Space, Input, Modal, Form, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { userService } from "../../../services/userService";
import { useSelector } from "react-redux";
export default function ContentAdmin() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  let { userInfo } = useSelector((state) => state.userSlice);
  const { Search } = Input;
  const onSearch = (value) => {
    userService
      .findUser(value)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {});
  };
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    userService
      .editInfo(
        {
          name: newName || singleUser?.name,
          email: newEmail || singleUser?.email,
          phone: newPhone || singleUser?.phone,
        },
        singleUser._id
      )
      .then((res) => {
        window.location.href = "/admin";
      })
      .catch((err) => {});
    setIsModalVisible1(false);
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
    userService
      .addAdmin(values, userInfo?.token)
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
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => {
        return (
          <Fragment>
            <img
              src={avatar}
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => {
        if (role === "ADMIN") {
          return <Tag color={"green"}>Admin</Tag>;
        } else {
          return <Tag color={"purple"}>Client</Tag>;
        }
      },
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (text, user) => {
        return (
          <Fragment>
            <div className="space-x-3">
              <button
                className="rounded-lg w-10"
                onClick={() => {
                  setSingleUser(user);
                  showModal1();
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="bg-red-600 rounded-lg w-10"
                onClick={() => {
                  userService
                    .removeUser(user._id)
                    .then((res) => {
                      window.location.href = "/admin";
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
    userService
      .getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {});
  }, []);
  const data = users;
  return (
    <div className="p-3 space-y-5">
      <button
        className="w-36 rounded-lg"
        onClick={() => {
          showModal2();
        }}
      >
        <i className="fa fa-plus"></i> Add new Admin
      </button>
      <Modal
        title="New Admin"
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input Password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input Phone Number!",
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
        title={singleUser?.name}
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <p>Name:</p>
        <Input
          value={newName || singleUser?.name}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <p>Email:</p>
        <Input
          value={newEmail || singleUser?.email}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <p>Phone:</p>
        <Input
          value={newPhone || singleUser?.phone}
          onChange={(e) => {
            setNewPhone(e.target.value);
          }}
        />
      </Modal>
    </div>
  );
}
