import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography, Drawer } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Organizations from './Organization';
import Projects from './Projects';
import Albums from './Albums';

function ProfileAccordion() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleShowDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  return (
    <div style={{ backgroundColor: '#ECD4EA', padding: '20px', borderRadius: '8px', maxWidth: '100%', margin: '0 auto' }}>
      {/* Accordion for Followers */}
      <Accordion
        style={{ backgroundColor: '#A987A8', color: '#FFFFFF', marginBottom: '10px', borderRadius: '8px' }}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#FFFFFF' }} />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Followers</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#693B69' }}>
          <Typography>
            <ul>
              <li>John Doe</li>
              <li>Jane Smith</li>
              <li>Michael Johnson</li>
              <li>Sophia Williams</li>
              <li>David Brown</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion for People You Follow */}
      <Accordion
        style={{ backgroundColor: '#A987A8', color: '#FFFFFF', marginBottom: '10px', borderRadius: '8px' }}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#FFFFFF' }} />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>People You Follow</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#693B69' }}>
          <Typography>
            <ul>
              <li>Emma Davis</li>
              <li>Chris Wilson</li>
              <li>Olivia Martinez</li>
              <li>Noah Lee</li>
              <li>Liam Harris</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Contacts */}
      <Accordion
        style={{ backgroundColor: '#A987A8', color: '#FFFFFF', marginBottom: '10px', borderRadius: '8px' }}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#FFFFFF' }} />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Contacts</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: '#693B69' }}>
          <Typography>
            <ul>
              <li>Amy Roberts - amy.roberts@email.com</li>
              <li>Brian Clark - brian.clark@email.com</li>
              <li>Susan Lopez - susan.lopez@email.com</li>
              <li>Tom Evans - tom.evans@email.com</li>
              <li>Linda White - linda.white@email.com</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Button to Launch Drawer */}
      <Button
        variant="contained"
        onClick={handleShowDrawer}
        style={{
          marginTop: '10px',
          backgroundColor: '#511F52',
          color: '#FFFFFF',
          width: '100%',
          borderRadius: '8px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#693B69')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#511F52')}
      >
        Open More Options
      </Button>

      {/* Drawer for Albums, Projects, Organization */}
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <div style={{ width: '350px', backgroundColor: '#ECD4EA', padding: '20px', height: '100%' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#511F52', marginBottom: '20px' }}>Explore More</Typography>

          {/* Albums */}
          <div style={{ marginBottom: '20px' }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              style={{ marginBottom: '10px', color: '#693B69', borderColor: '#693B69' }}
            >
              Albums
            </Button>
            <div>
              <Albums />
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '20px' }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              style={{ marginBottom: '10px', color: '#693B69', borderColor: '#693B69' }}
            >
              Projects
            </Button>
            <div>
              <Projects />
            </div>
          </div>

          {/* Organization */}
          <div style={{ marginBottom: '20px' }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              style={{ marginBottom: '10px', color: '#693B69', borderColor: '#693B69' }}
            >
              Organization
            </Button>
            <div>
              <Organizations />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default ProfileAccordion;
