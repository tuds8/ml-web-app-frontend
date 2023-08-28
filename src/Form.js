import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './customStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    chestPain: '',
    restingBP: '',
    cholesterol: '',
    maxHeartRate: '',
  });

  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is "Chest Pain level" and restrict it to the range of 0-3
    const intValue = name === 'chestPain' ? parseInt(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: intValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the backend API
    const requestData = {
      age: formData.age,
      sex: formData.sex,
      chestPain: formData.chestPain,
      restingBP: formData.restingBP,
      cholesterol: formData.cholesterol,
      maxHeartRate: formData.maxHeartRate,
    };

    // Make the API call to the backend
    fetch('http://127.0.0.1:5000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        setResponseData(data); // Store the response data in the component state
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error('Error:', error);
      });

    // Reset the form fields after submission
    setFormData({
      age: '',
      sex: '',
      chestPain: '',
      restingBP: '',
      cholesterol: '',
      maxHeartRate: '',
    });
  };

  return (
    <div className='form-container'>
      <h2>Please enter your information:</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="custom-input"
        />
        <br />
        <FormControl>
          <InputLabel className='custom-select-label'>Sex</InputLabel>
          <Select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
            className="custom-select"
          >
            <MenuItem value="">-- Select --</MenuItem>
            <MenuItem value="0">Female</MenuItem>
            <MenuItem value="1">Male</MenuItem>
          </Select>
        </FormControl> 
        <br />

        <div>
          <TextField
            label="Chest Pain level (0-3)"
            type="number"
            name="chestPain"
            value={formData.chestPain}
            min="0"
            max="3"
            onChange={handleChange}
            required
            inputProps={{
              min: 0,
              max: 3,
            }}
            className="custom-input"
          />
        </div>
        <br />

        <div>
          <TextField
            label="Resting Blood Pressure"
            type="number"
            name="restingBP"
            value={formData.restingBP}
            onChange={handleChange}
            required
            className="custom-input"
          />
        </div>
        <br />

        <div>
          <TextField
            label="Cholesterol (mg/dl)"
            type="number"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            required
            className="custom-input"
          />
        </div>
        <br />

        <div>
          <TextField
            label="Maximum Heart Rate Achieved"
            type="number"
            name="maxHeartRate"
            value={formData.maxHeartRate}
            onChange={handleChange}
            required
            className="custom-input"
          />
        </div>
        <br />
        <div style={{marginLeft:80}}>
          <Button variant="contained" type="submit">Submit</Button>
        </div>
      </form>
      {responseData && (
        <div>
          <h2>Diagnostics</h2>
          <p style={{margin:10}}>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
