import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Tables",
    path: "/tables",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  // {
  //   title: "Create Groups",
  //   path: "/creategroups",
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: "nav-text"
  // },
  {
    title: "Groups",
    path: "/groups",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  // {
  //   title: "Customize Groups",
  //   path: "/customize",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text"
  // },
  {
    title: "Logout",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
