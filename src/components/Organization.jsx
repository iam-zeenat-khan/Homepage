import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Organizations() {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "GreenTech Innovations",
      logo: "https://via.placeholder.com/64",
    },
    {
      id: 2,
      name: "HealthPlus Systems",
      logo: "https://via.placeholder.com/64",
    },
  ]);

  const [editOrganization, setEditOrganization] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddOrganization = () => {
    const newOrganization = {
      id: organizations.length + 1,
      name: `New Organization ${organizations.length + 1}`,
      logo: "https://via.placeholder.com/64",
    };
    setOrganizations([...organizations, newOrganization]);
  };

  const handleEditOrganization = (organization) => {
    setEditOrganization(organization);
    setShowEditModal(true);
  };

  const handleSaveEditOrganization = () => {
    setOrganizations(organizations.map(org => (org.id === editOrganization.id ? editOrganization : org)));
    setShowEditModal(false);
  };

  const handleDeleteOrganization = (organizationId) => {
    setOrganizations(organizations.filter(org => org.id !== organizationId));
  };

  return (
    <div className="organizations-section bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-deep-purple">Organizations</h2>

      {/* Organization List */}
      <ul className="space-y-3">
        {organizations.map(organization => (
          <li 
            key={organization.id} 
            className="flex items-center justify-between p-3 border-b border-gray-200 bg-light-pink rounded-md transition duration-300 hover:shadow-lg"
          >
            <div className="flex items-center">
              <img src={organization.logo} alt={organization.name} className="w-10 h-10 mr-3 rounded-full" />
              <span className="text-deep-purple">{organization.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-muted-purple hover:text-deep-purple transition duration-300" onClick={() => handleEditOrganization(organization)}>
                <FaEdit />
              </button>
              <button className="text-dark-purple hover:text-red-600 transition duration-300" onClick={() => handleDeleteOrganization(organization.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add New Organization Button */}
      <button 
        className="bg-muted-purple text-white px-4 py-2 rounded-md mt-4 hover:bg-deep-purple transition duration-300"
        onClick={handleAddOrganization}>
        + New Organization
      </button>

      {/* Edit Organization Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="organizationName">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control 
                type="text" 
                value={editOrganization?.name || ''} 
                onChange={(e) => setEditOrganization({ ...editOrganization, name: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEditOrganization}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Organizations;
