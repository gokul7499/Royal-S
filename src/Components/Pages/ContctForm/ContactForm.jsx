import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contactf.css';

const ContactFormTable = () => {
  const [contactForms, setContactForms] = useState([]); // Stores the contact form data
  const [showTable, setShowTable] = useState(false); // Controls the visibility of the table
  const [error, setError] = useState(''); // Stores error messages

  const defaultPassword = '7499'; // Default password

  // Fetch contact form data from backend API
  useEffect(() => {
    axios.get('https://website-backend-royal.onrender.com/api/contact-forms')
      .then((response) => {
        console.log(response.data); // Log the response to verify
        setContactForms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contact form data:', error);
      });
  }, []); // Empty dependency array ensures it runs once

  // Function to handle the password prompt and toggle table visibility
  const handleButtonClick = () => {
    const userPassword = prompt('Enter the password to view the contact form table:');
    if (userPassword === defaultPassword) {
      setError('');
      setShowTable(true); // Show the table if the password is correct
    } else {
      setError('Incorrect password! Please try again.');
      setShowTable(false); // Hide the table for wrong password
    }
  };

  return (
    <div>
      <button className="btn btn-success " onClick={handleButtonClick}>
        Show Contact Form Table
      </button>

      {error && <p className="error">{error}</p>}

      {showTable && (
        <div>
          <h1>Contact Form Submissions</h1>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email Address</th>
                <th>City</th>
                <th>District</th>
                <th>Pincode</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {contactForms.map((form) => (
                <tr key={form._id}>
                  <td>{form.customerName}</td>
                  <td>{form.contactNumber}</td>
                  <td>{form.emailAddress}</td>
                  <td>{form.city}</td>
                  <td>{form.dist}</td>
                  <td>{form.pincode}</td>
                  <td>{new Date(form.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactFormTable;
