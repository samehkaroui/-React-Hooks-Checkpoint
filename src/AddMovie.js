import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Required for accessibility reasons

function AddMovie({ addMovie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating) {
      const newMovie = {
        id: Date.now(),
        title,
        description,
        posterURL,
        rating: parseFloat(rating)
      };
      addMovie(newMovie);
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal}>Add New Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Movie Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Add a New Movie</h2>
        <form onSubmit={handleAddMovie} className="add-movie">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
          <button type="submit">Add Movie</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default AddMovie;
