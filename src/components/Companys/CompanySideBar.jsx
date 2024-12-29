import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeModernIcon,
  ChartBarSquareIcon,
  FolderOpenIcon,
  ClipboardDocumentListIcon,
  ChevronDownIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const CompanySideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const sidebarVariants = {
    expanded: { width: "16rem" },
    collapsed: { width: "4rem" },
  };

  const linkVariants = {
    expanded: { opacity: 1, display: "block", transition: { duration: 0.3 } },
    collapsed: { opacity: 0, display: "none", transition: { duration: 0.3 } },
  };

  const dropdownVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex h-[100vh]">
      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        className="bg-gray-900 text-white h-full overflow-hidden shadow-lg"
      >
        {/* Sidebar Header */}
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-800"
          onClick={toggleExpand}
        >
          <span className="text-xl font-bold">
            {isExpanded ? "Menu" : "☰"}
          </span>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-2">
         
          <li className="px-4 py-2">
            <div
              className="flex items-center justify-between cursor-pointer hover:bg-gray-800 px-2 py-2 rounded"
              onClick={() => toggleDropdown("home")}
            >
              <div className="flex items-center">
              <ChartBarSquareIcon className="h-6 w-6" />
                <motion.span
                  variants={linkVariants}
                  animate={isExpanded ? "expanded" : "collapsed"}
                  className="ml-4"
                >
                  Dashboard
                </motion.span>
              </div>
              {isExpanded && (
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === "home" ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            <AnimatePresence>
              {activeDropdown === "home" && isExpanded && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="ml-8 mt-2 space-y-5 flex flex-col"
                >
                  <Link to="/company/dashboard/job-posting">
                  <li className="text-gray-400 hover:text-white cursor-pointer">
                  Job Posting
                  </li>
                  </Link>
                  <Link to="/company/dashboard/job-application">
                  <li className="text-gray-400 hover:text-white cursor-pointer">
                   Job Application List
                  </li>
                  </Link>
                  {/* <Link to="/company/dashboard/ScheduleMeetingForm">
                  <li className="text-gray-400 hover:text-white cursor-pointer">
                  ScheduleMeetingForm
                  </li>
                  </Link> */}
                  

                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="px-4 py-2">
            <div
              className="flex items-center justify-between cursor-pointer hover:bg-gray-800 px-2 py-2 rounded"
              onClick={() => toggleDropdown("home")}
            >
              <div className="flex items-center">
              <ChartBarSquareIcon className="h-6 w-6" />
                <motion.span
                  variants={linkVariants}
                  animate={isExpanded ? "expanded" : "collapsed"}
                  className="ml-4"
                >
                  Collage Drive
                </motion.span>
              </div>
              {isExpanded && (
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === "home" ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            <AnimatePresence>
              {activeDropdown === "home" && isExpanded && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="ml-8 mt-2 space-y-5 flex flex-col"
                >
                  <Link to="/company/dashboard/PlacementDriveList">
                  <li className="text-gray-400 hover:text-white cursor-pointer">
                  PlacementDriveList
                  </li>
                  </Link>
                  <Link to="/company/dashboard/PlacementDriveRegistration">
                  <li className="text-gray-400 hover:text-white cursor-pointer">
                  PlacementDriveRegistration
                  </li>
                  </Link>
                  

                </motion.ul>
              )}
            </AnimatePresence>
          </li>

        </ul>
      </motion.div>

      
    </div>
  );
};

export default CompanySideBar;