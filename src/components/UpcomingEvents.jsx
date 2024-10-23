import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, IconButton, Menu, MenuItem } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const UpcomingEvents = ({ events }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event, eventId) => {
    setAnchorEl(event.currentTarget);
    setSelectedEvent(eventId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`); // Navigate to event page
  };

  return (
    <div className="upcoming-events-tile">
      {events.length > 0 && (
        <List>
          {events.map((event) => (
            <ListItem key={event.id} disablePadding>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText
                primary={event.title}
                secondary={event.date}
                primaryTypographyProps={{ fontWeight: 'bold' }}
                onClick={() => handleEventClick(event.id)}
                style={{ cursor: 'pointer' }}  // Make the title clickable
              />
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={(e) => handleMenuClick(e, event.id)}
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      {/* Event menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'event-menu-button',
        }}
      >
        {selectedEvent && (
          <>
            <MenuItem onClick={() => navigate(`/event/${selectedEvent}/edit`)}>Edit Event</MenuItem>
            <MenuItem onClick={() => navigate(`/event/${selectedEvent}/details`)}>View Details</MenuItem>
            <MenuItem onClick={() => {/* handle other actions like delete */}}>Delete Event</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

export default UpcomingEvents;
