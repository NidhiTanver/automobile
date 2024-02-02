import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import GlobalTabs from "./component/GlobalTabs";
import GlobalButton from "./component/GlobalButton";
import { items } from "../constants/dropdownItem";
import "./header.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownClick = (e: any, val: any) => {
    e.preventDefault();
    console.log("val", val);
  };
  return (
    <>
      <div className="bg-zinc-900 h-16">
        <a href="" className="text-orange-500 text-2xl">
          amazon.in
        </a>
        <a href="">Account</a>
        <a href="">My cart</a>
        <a href="">Contact us</a>
        <input type="text" placeholder="search Amazon.in" />
        <button type="button" className="bg-amber-600">
          Search
        </button>
      </div>
      <div id="content">
        <div id="box1"></div>
        <div id="box2"></div>
        <div id="box3"></div>
      </div>

      <div id="footer">Footer</div>

      {/* <div>
        <nav className="sticky top-0 bg-amber-500">
          <div className="flex justify-around h-14 p-4">
            <div>
              <h4>Shop by department</h4>
            </div>
            <div className="relative">
              <div className="absolute right-32 relative inline-block text-left">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="border-r-2 border-slate-300 text-black bg-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={handleDropdown}
                >
                  Dropdown button
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownDefaultButton"
                  className="max-h-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  {isDropdownVisible && (
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 overflow-y-auto max-h-56"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {items.map(({ value }) => (
                        <li key={value}>
                          <a
                            href="#"
                            onClick={(e) => handleDropdownClick(e, value)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {value}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <input
                className="absolute left-12 w-80 h-9 pl-3.5"
                type="text"
                value="This is an input box"
              />
              <button
                className="absolute left-96 rounded h-9 w-24 pl-5 m-auto bg-slate-950 text-transparent text-white"
                type="button"
              >
                Search
              </button>
            </div>
            <div>3 logo</div>
          </div>
        </nav>
      </div> */}
      {/* <AppBar position="static" sx={{ background: "#063970" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CarRepairIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <GlobalTabs />
            <GlobalButton
              sx={{ marginLeft: "auto" }}
              variant="contained"
              text="Login"
            />
            <GlobalButton
              sx={{ marginLeft: "10px" }}
              variant="contained"
              text="Signup"
            />
          </Toolbar>
        </Container>
      </AppBar> */}
    </>
  );
};
export default Header;
