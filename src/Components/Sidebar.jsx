import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import orders from "../assets/orders.svg";
import company from "../assets/company.svg";
import drivers from "../assets/drivers.svg";
import devices from "../assets/devices.svg";
import accounts from "../assets/accounts.svg";
import settings from "../assets/settings.svg";
import logout from "../assets/logout.svg";
import "../styles/sidebar.css";

function Sidebar() {

  let activeClassName = "sidebar-option sidebar-option-active";
  let inActiveClassName = "sidebar-option";

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-logo-div">
          <img className="sidebar-logo" src={logo} alt="" />
        </div>

        <div className="option-div">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={dashboard}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Dashboard
              </span>
            )}
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={orders}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Orders
              </span>
            )}
          </NavLink>

          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={company}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Company
              </span>
            )}
          </NavLink>

          <NavLink
            to="/drivers"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={drivers}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Drivers
              </span>
            )}
          </NavLink>

          <NavLink
            to="/devices"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={devices}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Devices
              </span>
            )}
          </NavLink>

          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={accounts}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Accounts/Transaction
              </span>
            )}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
            end
          >
            {({ isActive }) => (
              <span>
                <img
                  src={settings}
                  alt=""
                  className={isActive ? "invert" : undefined}
                />
                Settings
              </span>
            )}
          </NavLink>
        </div>
      </div>
      <Link to="/" className="logout-link">
        <span className="logout">
          <img src={logout} alt="" />
          Logout
        </span>
      </Link>
    </div>
  );
}

export default Sidebar;
