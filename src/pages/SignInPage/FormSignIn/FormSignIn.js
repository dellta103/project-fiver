import React from "react";
import { Form, Input, message } from "antd";
import "antd/dist/antd.css";
import "./FormSignIn.scss";
import { userService } from "../../../services/userService";
import { useNavigate } from "react-router-dom";
import { localService } from "../../../services/localService";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../../components/redux/slices/userSlice";
export default function FormSignIn() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    handleSignIn(values);
    navigate("/jobs");
  };

  const onFinishFailed = (errorInfo) => {};
  const handleSignIn = (values) => {
    userService
      .signIn(values)
      .then((res) => {
        dispatch(setSignIn(res.data));
        localService.setUserInfo(res.data);
        message.success(res.data.message);
      })
      .catch((err) => message.error(err.response.data.message));
  };
  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <span className="text-4xl font-semibold">Welcome back</span>

      <Form.Item
        style={{
          marginTop: "30px",
        }}
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
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
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 16,
        }}
      >
        <div className="flex flex-col space-y-3">
          <span>
            Don't have an account?{" "}
            <a href="/sign-up" className="font-medium">
              Sign Up
            </a>
          </span>
          <button className="rounded-lg font-medium">Sign In</button>
        </div>
      </Form.Item>
    </Form>
  );
}
