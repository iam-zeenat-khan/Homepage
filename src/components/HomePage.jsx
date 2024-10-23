// HomePage.jsx (React Component)

import React from 'react';
import { Avatar, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { MdExpandMore, MdFavorite, MdComment } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-gray-100 p-4 w-full md:w-1/4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="space-y-4">
          <li>Upcoming Events</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
        {/* Collapsible sections here */}
      </div>

      {/* Main Content */}
      <div className="p-4 w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">Newsfeed</h2>
        <div className="space-y-4">
          <Card className="shadow-lg rounded-lg">
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar alt="User Name" src="/user-avatar.jpg" />
                <div>
                  <h3 className="font-bold">Yael Adamson-Brown</h3>
                  <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                </div>
              </div>
              <p className="mt-4">
                Update on harvesting progress starting at 10:00 on 18th February 2023.
              </p>
            </CardContent>
            <CardActions className="flex justify-between">
              <Button startIcon={<MdFavorite />} size="small">Like</Button>
              <Button startIcon={<MdComment />} size="small">Comment</Button>
              <Button endIcon={<MdExpandMore />} size="small">Expand Story</Button>
            </CardActions>
          </Card>

          {/* More cards here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
