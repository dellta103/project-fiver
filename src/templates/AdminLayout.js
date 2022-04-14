import React from "react";
import ContentAdmin from "../pages/AdminPage/ContentAdmin/ContentAdmin";
import HeaderAdmin from "../pages/AdminPage/HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "../pages/AdminPage/SidebarAdmin/SidebarAdmin";

export default function AdminLayout({ Component }) {
  return (
    <div>
      <div className="flex">
        <SidebarAdmin />
        <div className="">
          <HeaderAdmin />
          <Component />
        </div>
      </div>
    </div>
  );
}
