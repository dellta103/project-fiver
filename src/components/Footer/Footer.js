import React from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";

import "./Footer.scss";
export default function Footer() {
  const { Panel } = Collapse;
  return (
    <div className="border-t border-gray-400 mt-20">
      <div className="w-9/12 m-auto py-20">
        <div className="defaultFooter grid lg:grid-cols-5 md:grid-cols-3">
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">Categories</span>
            <li>
              <a href="#">Graphics & Design</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Writing & Translation</a>
            </li>
            <li>
              <a href="#">Video & Animation</a>
            </li>
            <li>
              <a href="#">Music & Audio</a>
            </li>
            <li>
              <a href="#">Programming & Tech</a>
            </li>
            <li>
              <a href="#">Data</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">About</span>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press & News</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Intellectual Property Claims</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">Support</span>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Selling on Fiverr</a>
            </li>
            <li>
              <a href="#">Buying on Fiverr</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">Community</span>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">Community Standards</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Invite a Friend</a>
            </li>
            <li>
              <a href="#">Become a Seller</a>
            </li>
          </ul>
          <ul className="space-y-3 ">
            <span className="text-lg font-semibold">More From Fiverr</span>
            <li>
              <a href="#">Fiverr Business</a>
            </li>
            <li>
              <a href="#">Fiverr Pro</a>
            </li>
            <li>
              <a href="#">Fiverr Studios</a>
            </li>
            <li>
              <a href="#">Fiverr Logo Maker</a>
            </li>
            <li>
              <a href="#">Fiverr Guides</a>
            </li>
            <li>
              <a href="#">Get Inspired</a>
            </li>
            <li>
              <a href="#">ClearVoice</a>
            </li>
            <li>
              <a href="#">Fiverr Workspace</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">Working Not Working</a>
            </li>
          </ul>
        </div>
        <div className="resFooter">
          <Collapse>
            <Panel header="Categories" key="1">
              <ul className="space-y-3">
                {" "}
                <li>
                  <a href="#">Graphics & Design</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Writing & Translation</a>
                </li>
                <li>
                  <a href="#">Video & Animation</a>
                </li>
                <li>
                  <a href="#">Music & Audio</a>
                </li>
                <li>
                  <a href="#">Programming & Tech</a>
                </li>
                <li>
                  <a href="#">Data</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </Panel>
            <Panel header="About" key="2">
              <ul className="space-y-3 ">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press & News</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Intellectual Property Claims</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </Panel>
            <Panel header="Support" key="3">
              <ul className="space-y-3 ">
                <li>
                  <a href="#">Help & Support</a>
                </li>
                <li>
                  <a href="#">Trust & Safety</a>
                </li>
                <li>
                  <a href="#">Selling on Fiverr</a>
                </li>
                <li>
                  <a href="#">Buying on Fiverr</a>
                </li>
              </ul>
            </Panel>
            <Panel header="Community" key="4">
              <ul className="space-y-3 ">
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Community Standards</a>
                </li>
                <li>
                  <a href="#">Podcast</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Invite a Friend</a>
                </li>
                <li>
                  <a href="#">Become a Seller</a>
                </li>
              </ul>
            </Panel>
            <Panel header="More From Fiverr" key="5">
              <ul className="space-y-3 ">
                <li>
                  <a href="#">Fiverr Business</a>
                </li>
                <li>
                  <a href="#">Fiverr Pro</a>
                </li>
                <li>
                  <a href="#">Fiverr Studios</a>
                </li>
                <li>
                  <a href="#">Fiverr Logo Maker</a>
                </li>
                <li>
                  <a href="#">Fiverr Guides</a>
                </li>
                <li>
                  <a href="#">Get Inspired</a>
                </li>
                <li>
                  <a href="#">ClearVoice</a>
                </li>
                <li>
                  <a href="#">Fiverr Workspace</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Working Not Working</a>
                </li>
              </ul>
            </Panel>
          </Collapse>
        </div>
        <div className="bottom py-3 border-t flex justify-between border-gray-400 mt-3">
          <div className="left">
            <span className="text-gray-500 font-bold text-3xl">fiverr.</span>{" "}
            <span className="text-gray-400 ml-4">
              © Fiverr International Ltd. 2022
            </span>
          </div>
          <div className="right flex items-center justify-center h-full">
            <ul className="flex items-center space-x-5 text-xl font-semibold">
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
              <li>
                <i className="fab fa-pinterest"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
            <div className="text-xl font-semibold space-x-3 ">
              <span className="">
                <i className="fa fa-globe"></i> English
              </span>
              <span>
                US<i className="fa fa-dollar-sign"></i> USD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
