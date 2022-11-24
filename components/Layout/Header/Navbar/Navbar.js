import Link from "next/link";

import { useContext} from "react";
import { MainNavContext } from "../../../../contexts/MainNavContext";

import isActive from "../../../../utility/IsActive";

const Navbar = ({ isOpen}) => {

const {currentPage, pageName} = useContext(MainNavContext);

  return (
    <nav>
      <ul
        id="primary-navigation"
        data-visible={isOpen}
        className="primary-navigation underline-indicators flex"
      >
        <li className={isActive(currentPage.current, "home") ? "active" : ""}>
          <Link href={"/"}>
            <a
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                pageName("home");
              }}
            >
              <span
                onClick={() => {
                  pageName("home");
                }}
              >00</span>Home</a>
          </Link>
        </li>
        <li
          className={
            isActive(currentPage.current, "destination") ? "active" : ""
          }
        >
          <Link href={"/destination"}>
            <a
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                pageName("destination");
              }}
            >
              <span
                onClick={() => {
                  pageName("destination");
                }}
              >01</span>Destination</a>
          </Link>
        </li>
        <li className={isActive(currentPage.current, "crew") ? "active" : ""}>
          <Link href={"/crew"}>
            <a
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                pageName("crew");
              }}
            >
              <span
                onClick={() => {
                  pageName("crew");
                }}
              >02</span>Crew</a>
          </Link>
        </li>
        <li
          className={
            isActive(currentPage.current, "technology") ? "active" : ""
          }
        >
          <Link href={"/technology"}>
            <a
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                pageName("technology");
              }}
            >
              <span
                onClick={() => {
                  pageName("technology");
                }}
              >03</span>Technology</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
