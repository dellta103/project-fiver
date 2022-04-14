import React from "react";
import Header from "../components/Header/Header";
import JobBar from "../components/JobBar/JobBar";
import Footer from "../components/Footer/Footer";
import "./Layout.scss";
export default function Layout({ Component }) {
  return (
    <div>
      <Header />

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <div className="w-full bg-white">
          <div className=" w-9/12 m-auto">
            <JobBar />
          </div>
        </div>
        <Component />
        <Footer />
      </div>
    </div>
  );
}
