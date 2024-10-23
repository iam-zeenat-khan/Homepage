import React, { useState } from "react";
import { Button, Avatar, Badge, IconButton } from "@mui/material";
import { Notifications, Mail, Menu } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css"; // Import custom CSS for animation and styles

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle mobile menu

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-2 shadow-md bg-white custom-header">
      {/* Left Section - Logo and Mobile Menu Icon */}
      <div className="flex items-center space-x-4 w-full lg:w-auto justify-between">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 via-red-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          M
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          className="lg:hidden text-deep-purple"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Menu />
        </IconButton>
      </div>

      {/* Nav Links - Hidden on small screens */}
      <nav
        className={`${
          isNavOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto space-y-4 lg:space-y-0 lg:space-x-6 text-deep-purple font-semibold mt-4 lg:mt-0`}
      >
        <a href="#" className="hover:text-dark-purple transition-colors duration-300 ease-in-out">
          My Apps
        </a>
        <a href="#" className="hover:text-dark-purple transition-colors duration-300 ease-in-out">
          Home
        </a>
        <a href="#" className="hover:text-dark-purple transition-colors duration-300 ease-in-out">
          Explore
        </a>
      </nav>

      {/* Search Bar - Stacks on small screens */}
      <div className="flex w-full lg:w-auto items-center bg-light-pink px-4 py-1 rounded-md mt-4 lg:mt-0">
        <SearchIcon className="text-muted-purple" />
        <input
          type="text"
          placeholder="Search for contacts and projects"
          className="bg-transparent outline-none pl-2 text-deep-purple w-full"
        />
      </div>

      {/* Right Section - Icons and Buttons */}
      <div className="flex items-center space-x-4 w-full lg:w-auto mt-4 lg:mt-0 justify-between lg:justify-start">
        {/* Notifications Icon with Badge */}
        <Badge badgeContent={79} color="error">
          <Notifications className="text-deep-purple" />
        </Badge>

        {/* Mail Icon */}
        <IconButton>
          <Mail className="text-deep-purple" />
        </IconButton>

        {/* Profile Picture */}
        <Avatar
          alt="User Profile"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="border-2 border-muted-purple"
        />

        {/* Create Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#511F52", // Dark Purple
            color: "white",
            "&:hover": {
              backgroundColor: "#693B69", // Deep Purple on hover
            },
          }}
          startIcon={<span>+</span>}
        >
          Create
        </Button>

        {/* More Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: "#A987A8", // Muted Purple for the border
            color: "#A987A8",
            "&:hover": {
              backgroundColor: "#ECD4EA", // Light Pink/Purple on hover
            },
          }}
        >
          More
        </Button>
      </div>
    </header>
  );
};

export default Header;
