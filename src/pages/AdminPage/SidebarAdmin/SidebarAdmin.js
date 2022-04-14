import React, { useEffect, useState } from "react";
import styles from "./SidebarAdmin.module.scss";
import clsx from "clsx";
export default function SidebarAdmin() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/admin") {
      setActive1(true);
      setActive2(false);
    } else if (window.location.pathname === "/admin/gigs") {
      setActive1(false);
      setActive2(true);
    }
  }, []);
  return (
    <div className={clsx(styles.sideBar)}>
      <div className={clsx(styles.top, "flex justify-center items-center ")}>
        <a href="/" className="text-black text-3xl font-bold hover:text-white">
          Fiverr.
        </a>
      </div>
      <div className={clsx(styles.bottom)}>
        <ul className="flex flex-col justify-evenly text-3xl font-bold  h-full items-center">
          <li
            className={
              clsx({
                [styles.active1]: active1,
              }) + " flex justify-center items-center rounded-md "
            }
          >
            <a href="/admin" className="text-black">
              User manage
            </a>
          </li>
          <li
            className={
              clsx({
                [styles.active2]: active2,
              }) + " flex justify-center items-center rounded-md "
            }
          >
            <a href="/admin/gigs" className="text-black">
              Gigs manage
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
