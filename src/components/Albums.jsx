import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Albums() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      title: "Summer Vacation",
      photos: [],
      icon: "https://via.placeholder.com/64",
    },
    {
      id: 2,
      title: "Team Retreat",
      photos: [],
      icon: "https://via.placeholder.com/64",
    },
  ]);

  const [editAlbum, setEditAlbum] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddAlbum = () => {
    const newAlbum = {
      id: albums.length + 1,
      title: `New Album ${albums.length + 1}`,
      photos: [],
      icon: "https://via.placeholder.com/64",
    };
    setAlbums([...albums, newAlbum]);
  };

  const handleEditAlbum = (album) => {
    setEditAlbum(album);
    setShowEditModal(true);
  };

  const handleSaveEditAlbum = () => {
    setAlbums(albums.map(album => (album.id === editAlbum.id ? editAlbum : album)));
    setShowEditModal(false);
  };

  const handleDeleteAlbum = (albumId) => {
    setAlbums(albums.filter(album => album.id !== albumId));
  };

  return (
    <div className="albums-section bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-deep-purple">Albums</h2>

      <ul className="grid grid-cols-2 gap-4">
        {albums.map(album => (
          <li key={album.id} className="p-3 border-b border-gray-200 bg-light-pink rounded-md transition duration-300 hover:shadow-lg">
            <div className="flex items-center">
              <img src={album.icon} alt={album.title} className="w-10 h-10 mr-3 rounded-full" />
              <span className="text-deep-purple">{album.title}</span>
            </div>
            <div>
              <button className="text-muted-purple hover:text-deep-purple transition duration-300" onClick={() => handleEditAlbum(album)}>
                <FaEdit/>
              </button>
              <button className="text-dark-purple hover:text-red-600 transition duration-300" onClick={() => handleDeleteAlbum(album.id)}>
              <FaTrash/>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button 
        className="bg-muted-purple text-white px-4 py-2 rounded-md mt-4 hover:bg-deep-purple transition duration-300"
        onClick={handleAddAlbum}>
        + New Album
      </button>

      {/* Edit Album Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="albumTitle">
              <Form.Label>Album Title</Form.Label>
              <Form.Control 
                type="text" 
                value={editAlbum?.title || ''} 
                onChange={(e) => setEditAlbum({ ...editAlbum, title: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEditAlbum}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Albums;
