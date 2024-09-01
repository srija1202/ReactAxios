import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({ user, deleteUser }) => {
  // Handle card click to navigate to user details
  const handleCardClick = () => {
    window.location.href = `/user/${user.id}`;
  };

  // Handle Edit button click to stop propagation
  const handleEditClick = (event) => {
    event.stopPropagation(); // Prevents card click event from firing
  };

  // Handle Delete button click to stop propagation
  const handleDeleteClick = (event) => {
    event.stopPropagation(); // Prevents card click event from firing
    deleteUser(user.id);
  };

  return (
    <Card className="user-card" onClick={handleCardClick}>
      <Card.Body>
        <Card.Title className="user-card-title">{user.firstname} {user.lastname}</Card.Title>
        <Card.Text>{user.jobtitle}</Card.Text>
        <div className="user-card-buttons">
          <Button 
            as={Link} 
            to={`/edit/${user.id}`} 
            variant="warning" 
            className="user-card-button" 
            onClick={handleEditClick}
          >
            Edit
          </Button>
          <Button 
            onClick={handleDeleteClick} 
            variant="danger"
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
