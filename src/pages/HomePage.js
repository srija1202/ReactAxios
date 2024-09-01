import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserCard from '../components/UserCard';
import { getUsers, deleteUser } from '../services/userService';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} deleteUser={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
