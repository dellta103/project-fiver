import React from "react";
import "antd/dist/antd.css";
import { Form, Input } from "antd";
import { userService } from "../../../services/userService";
import "./FormSignUp.scss";
import { useNavigate } from "react-router-dom";
export default function FormSignUp() {
  let navigate = useNavigate();
  const onFinish = (values) => {
    handleSignUp(values);
    navigate("/sign-in");
  };

  const onFinishFailed = (errorInfo) => {};

  const handleSignUp = (values) => {
    userService
      .signUp(values)
      .then((res) => {})
      .catch((err) => {});
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
      <span className="text-4xl font-semibold">Join us</span>

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
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Full Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your Phone Number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 16,
        }}
      >
        <div className="flex flex-col space-y-3">
          <span>
            Already had an account?{" "}
            <a href="/sign-in" className="font-medium">
              Sign In
            </a>
          </span>
          <button className="rounded-lg font-medium">Sign Up</button>
        </div>
      </Form.Item>
    </Form>
  );
}
