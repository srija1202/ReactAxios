import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../services/userService';

const UserEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    jobtitle: '',
    fathername: '',
    image: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    companyname: '',
    streetaddress: '',
    jobdesc: '',
    gender: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getUserById(id);
        setUser(response.data);
      } catch (error) {
        setError('Failed to load user data');
      }
    };

    loadUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      setSuccess('User updated successfully');
      navigate(`/user/${id}`);
    } catch (error) {
      setError('Failed to update user');
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center mb-4">Edit User</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstname" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastname" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="jobtitle" className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                name="jobtitle"
                value={user.jobtitle}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="fathername" className="mb-3">
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter father's name"
                name="fathername"
                value={user.fathername}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={user.image}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="city" className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={user.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="state" className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={user.state}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="country" className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                name="country"
                value={user.country}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="zipcode" className="mb-3">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zipcode"
                name="zipcode"
                value={user.zipcode}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="companyname" className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="companyname"
                value={user.companyname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="streetaddress" className="mb-3">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street address"
                name="streetaddress"
                value={user.streetaddress}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="jobdesc" className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter job description"
                name="jobdesc"
                value={user.jobdesc}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={user.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              <Button variant="secondary" onClick={() => navigate(`/user/${id}`)}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserEditPage;
