import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '50px',
};

function Home() {
  return (
    <div style={containerStyle}>
      <h1>Choose user</h1>
      <div style={{ marginBottom: '10px' }}>
        <Button component={Link} to="/software-engineer" variant="contained">
          Software Engineer
        </Button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button component={Link} to="/user" variant="contained">
          User
        </Button>
      </div>
    </div>
  );
}

export default Home;
