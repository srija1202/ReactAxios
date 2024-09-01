import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { createUser } from '../services/userService'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const UserForm = ({ initialData = {}, onSuccess }) => {
  const [user, setUser] = useState({ ...initialData });
  const navigate = useNavigate();

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user);
      if (onSuccess) onSuccess(); // Call the success callback if provided
      alert('User created successfully!');
      navigate('/'); // Redirect to home page or another route on success
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user.');
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate('/'); // Redirect to home page or another route on cancel
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="firstname" 
                    value={user.firstname || ''} 
                    onChange={handleChange} 
                    placeholder="Enter first name" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="lastname" 
                    value={user.lastname || ''} 
                    onChange={handleChange} 
                    placeholder="Enter last name" 
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={user.email || ''} 
                    onChange={handleChange} 
                    placeholder="Enter email" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="jobtitle" 
                    value={user.jobtitle || ''} 
                    onChange={handleChange} 
                    placeholder="Enter job title" 
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="companyname" 
                    value={user.companyname || ''} 
                    onChange={handleChange} 
                    placeholder="Enter company name" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="streetaddress" 
                    value={user.streetaddress || ''} 
                    onChange={handleChange} 
                    placeholder="Enter street address" 
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="city" 
                    value={user.city || ''} 
                    onChange={handleChange} 
                    placeholder="Enter city" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="state" 
                    value={user.state || ''} 
                    onChange={handleChange} 
                    placeholder="Enter state" 
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="country" 
                    value={user.country || ''} 
                    onChange={handleChange} 
                    placeholder="Enter country" 
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Zipcode</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="zipcode" 
                    value={user.zipcode || ''} 
                    onChange={handleChange} 
                    placeholder="Enter zipcode" 
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
              <Form.Group>
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
                    <option value="Prefer not to say">Prefer not to say</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="jobdesc" 
                    value={user.jobdesc || ''} 
                    onChange={handleChange} 
                    placeholder="Enter job description" 
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Col>
              <Col className="text-end">
                <Button variant="secondary" onClick={handleCancel} className="w-100">
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
