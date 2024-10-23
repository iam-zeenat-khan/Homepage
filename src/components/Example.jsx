import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaProjectDiagram, FaImages, FaBuilding } from 'react-icons/fa'; // Icons for better user understanding

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Customized button with an icon to show user that more options are inside */}
      <Button variant="primary" onClick={handleShow} style={{ margin: '10px' }}>
        <FaProjectDiagram style={{ marginRight: '5px' }} />
        View Projects & More
      </Button>

      {/* Offcanvas with more sections like albums, projects, and organization */}
      <Offcanvas show={show} onHide={handleClose} backdrop={true}>
        <Offcanvas.Header closeButton style={{ backgroundColor: '#004085', color: '#fff' }}>
          <Offcanvas.Title style={{ fontWeight: 'bold' }}>Explore More</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ marginBottom: '20px' }}>
            <Button variant="outline-info" size="lg" block style={{ width: '100%', marginBottom: '10px' }}>
              <FaImages style={{ marginRight: '8px' }} />
              Albums
            </Button>
            <p>Organize and manage your photo albums here.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Button variant="outline-success" size="lg" block style={{ width: '100%', marginBottom: '10px' }}>
              <FaProjectDiagram style={{ marginRight: '8px' }} />
              Projects
            </Button>
            <p>Track your ongoing and completed projects.</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Button variant="outline-primary" size="lg" block style={{ width: '100%', marginBottom: '10px' }}>
              <FaBuilding style={{ marginRight: '8px' }} />
              Organization
            </Button>
            <p>View your team structure and roles.</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
