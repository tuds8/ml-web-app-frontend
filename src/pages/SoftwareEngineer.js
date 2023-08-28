import React from 'react';
import { Button } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '50px',
};

const SoftwareEngineer = () => {
  const handlePrepareDataset = () => {
    // Make API call to trigger the backend to run the first command
    fetch('http://127.0.0.1:5000/api/prepare-dataset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Handle the response from the backend
        if (response.ok) {
          console.log('Dataset preparation started');
        } else {
          console.error('Error preparing dataset');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCreateModel = () => {
    // Make API call to trigger the backend to run the second command
    fetch('http://127.0.0.1:5000/api/create-model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Handle the response from the backend
        if (response.ok) {
          console.log('Model creation started');
        } else {
          console.error('Error creating model');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEvaluatePerformance = () => {
    // Make API call to trigger the backend to run the third command
    fetch('http://127.0.0.1:5000/api/evaluate-performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Handle the response from the backend
        if (response.ok) {
          console.log('Performance evaluation started');
        } else {
          console.error('Error evaluating performance');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={containerStyle}>
      <h2>Software Engineer Page</h2>
      <div style={{ marginBottom: '10px' }}>
        <Button variant="contained" onClick={handlePrepareDataset}>
          Prepare Dataset
        </Button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button variant="contained" onClick={handleCreateModel}>
          Create Model
        </Button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button variant="contained" onClick={handleEvaluatePerformance}>
          Evaluate Performance
        </Button>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
