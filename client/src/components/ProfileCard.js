import React from 'react';
import { Menu, MenuItem, Avatar, Typography } from '@mui/material';
import LogoutButton from './LogoutButton';

const ProfileCard = ({ anchorEl, onClose, profileImage, onProfileImageChange }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      onClick={onClose} // Close menu on clicking anywhere inside
    >
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', borderRadius: '15px' }}>
        <Avatar
          src={profileImage || "/default-profile.jpg"}
          alt="Profile Picture"
          style={{ marginRight: '10px', cursor: 'pointer' }}
          onClick={() => document.getElementById('profile-image-upload').click()}
        />
        <div>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Username</Typography>
          <Typography variant="body2" color="textSecondary">Full Name</Typography>
        </div>
      </div>
      <MenuItem
        style={{
          color: 'red',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={onClose}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '50%',
            width: '70%',
            padding: '0px',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '5px',
          }}
          onClick={onClose}
        >
          <LogoutButton/>
        </div>
      </MenuItem>
      {/* Hidden file input for profile image */}
      <input
        type="file"
        id="profile-image-upload"
        style={{ display: 'none' }}
        onChange={onProfileImageChange}
      />
    </Menu>
  );
};

export default ProfileCard;
