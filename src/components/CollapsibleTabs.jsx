import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Tab, Tabs, Box, Button } from '@mui/material';

const CollapsibleTabs = () => {
  const [open, setOpen] = useState(false); // To manage collapse
  const [tabIndex, setTabIndex] = useState(0); // To manage Tabs

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <div className="p-4">
      {/* Tabs Section */}
      <Box className="mb-4">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Dashboard" />
          <Tab label="Followers" />
          <Tab label="People You Follow" />
          <Tab label="Albums" />
        </Tabs>
      </Box>

      {/* Display Tab Contents */}
      {tabIndex === 0 && (
        <div className="p-4 bg-gray-100 rounded-md">Dashboard Content</div>
      )}
      {tabIndex === 1 && (
        <div className="p-4 bg-gray-100 rounded-md">Followers List</div>
      )}
      {tabIndex === 2 && (
        <div className="p-4 bg-gray-100 rounded-md">People You Follow List</div>
      )}
      {tabIndex === 3 && (
        <div className="p-4 bg-gray-100 rounded-md">Albums</div>
      )}

      {/* Button to toggle Collapse */}
      <Button
        onClick={() => setOpen(!open)}
        variant="contained"
        color="secondary"
        className="mt-4"
      >
        {open ? 'Hide Secondary Actions' : 'Show Secondary Actions'}
      </Button>

      {/* Collapsible Section for Secondary Actions */}
      <Collapse in={open}>
        <div className="p-4 mt-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-bold">Secondary Actions</h3>
          <ul className="space-y-2">
            <li>Followers</li>
            <li>People You Follow</li>
            <li>Albums</li>
            <li>More Actions...</li>
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default CollapsibleTabs;
