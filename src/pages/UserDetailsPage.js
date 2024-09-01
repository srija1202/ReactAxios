import React, { useEffect, useState, useCallback } from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { getUserById, updateUser, deleteUser } from '../services/userService';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const loadUser = useCallback(async () => {
    try {
      const response = await getUserById(id);
      setUser(response.data);
      setFormData(response.data);
    } catch (err) {
      setError('Failed to load user data');
    }
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const handleDeleteClick = async () => {
    try {
      await deleteUser(id);
      navigate('/');
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      setUser(formData);
      setSuccess('User updated successfully');
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update user');
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <Container className="my-5">
      <Card className="position-relative shadow-lg">
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Card.Body>
          {isEditing ? (
            <Form onSubmit={handleSave}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fathername"
                  value={formData.fathername}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  name="jobtitle"
                  value={formData.jobtitle}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="streetaddress"
                  value={formData.streetaddress}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select 
                    name="gender" 
                    value={user.gender || ''} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  type="text"
                  name="jobdesc"
                  value={formData.jobdesc}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Save
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsEditing(false)} 
                >
                  Cancel
                </Button>
              </div>
            </Form>
          ) : (
            <>
              <Card.Title className="text-center mb-4">{user.firstname} {user.lastname}</Card.Title>
              <Card.Text className="text-center">
                <strong>Job Title:</strong> {user.jobtitle}<br />
                <strong>Email:</strong> {user.email}<br />
                <strong>Father Name:</strong> {user.fathername}<br />
                <strong>Street Address:</strong> {user.streetaddress}<br />
                <strong>City:</strong> {user.city}<br />
                <strong>State:</strong> {user.state}<br />
                <strong>Country:</strong> {user.country}<br />
                <strong>Zipcode:</strong> {user.zipcode}<br />
                <strong>Company Name:</strong> {user.companyname}<br />
                <strong>Gender:</strong> {user.gender}<br />
                <strong>Job Description:</strong> {user.jobdesc}
              </Card.Text>
              <div className="d-flex justify-content-between position-absolute bottom-0 start-0 end-0 p-3">
                <Button 
                  variant="outline-danger" 
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
                <Button 
                  variant="warning" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserDetailsPage;
