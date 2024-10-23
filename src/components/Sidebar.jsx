import React from 'react';
import { Nav } from 'react-bootstrap';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar = () => (
  <div className="hidden lg:block bg-primary text-white p-4 h-full">
    <h5 className="mb-4">My Apps</h5>
    <Nav className="flex-auto">
      <Nav.Link href="#events" className="flex items-center text-white p-2 hover:bg-accent hover:text-primary transition-colors duration-300 ease-in-out rounded-md">
        <EventIcon className="mr-2" /> Events
      </Nav.Link>
      <Nav.Link href="#projects" className="flex items-center text-white p-2 hover:bg-accent hover:text-primary transition-colors duration-300 ease-in-out rounded-md">
        <WorkOutlineIcon className="mr-2" /> Projects
      </Nav.Link>
      <Nav.Link href="#albums" className="flex items-center text-white p-2 hover:bg-accent hover:text-primary transition-colors duration-300 ease-in-out rounded-md">
        <PhotoAlbumIcon className="mr-2" /> Albums
      </Nav.Link>
      <Nav.Link href="#tasks" className="flex items-center text-white p-2 hover:bg-accent hover:text-primary transition-colors duration-300 ease-in-out rounded-md">
        <AssignmentIcon className="mr-2" /> Tasks
      </Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
