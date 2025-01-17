// src/components/Header.jsx

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Tooltip, Avatar } from '@mui/material';
import { Menu as MenuIcon, Refresh as RefreshIcon, Search as SearchIcon } from '@mui/icons-material';
import { FiList, FiGrid } from 'react-icons/fi';
import ProfileCard from './ProfileCard';
import MeetingLayout from '../app/(dashboard)/meetings/layout';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGridView } from '../features/gridViewSlice'; 

const Header = ({ onToggleSidebar, MeetingGrid, MeetingList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [rotate, setRotate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const dispatch = useDispatch();
  const isGridView = useSelector((state) => state.gridView.isGridView); // Access isGridView state from Redux store
// Toggle between grid and list view
    const handleToggleView = () => {
      dispatch(toggleGridView());
    };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", searchQuery);
  };

  const handleRefreshClick = () => {
    setRotate(rotate + 1080);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // const handleToggleView = () => {
  //   dispatch(toggleGridView()); // Dispatch the toggleGridView action to update Redux state
  // };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000000', width: '100%', boxShadow: 'none', borderBottom: '0.5px solid #d1d5db' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw' }}>
          {/* Left: Hamburger Menu + Company Name */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Menu" arrow>
              <IconButton edge="start" color="inherit" aria-label="menu" style={{ padding: '10px' }} onClick={() => onToggleSidebar()}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </div>

          {/* Search Bar */}
          <div style={{ position: 'relative', flex: 1, maxWidth: '40vw' }}>
            <Tooltip title="Search" arrow>
              <IconButton edge="start" color="inherit" aria-label="menu" style={{
                position: 'absolute',
                top: '50%',
                left: 20,
                transform: 'translateY(-50%)',
              }}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              style={{
                height: '40px',
                width: '100%',
                paddingLeft: '40px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '16px',
                boxSizing: 'border-box', backgroundColor: '#F1F3F4'
              }}
            />
          </div>

          {/* Right: Icons */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Refresh Button with Animation */}
            <Tooltip title="Refresh" arrow>
              <IconButton color="inherit" onClick={handleRefreshClick} style={{
                marginLeft: '20px',
                transition: 'transform 3s ease',
                transform: `rotate(${rotate}deg)`,
                padding: '10px',
              }}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>

            {/* View Toggle Button (List/Grid) */}
            <Tooltip title={isGridView ? "List View" : "Grid View"} arrow>
              <IconButton color="inherit" onClick={handleToggleView} style={{ marginLeft: '20px', padding: '10px' }}>
                {isGridView ? <FiGrid /> : <FiList />}
              </IconButton>
            </Tooltip>

            {/* Profile Icon with Hover Menu */}
            <Tooltip title="Profile" arrow>
              <IconButton edge="end" color="inherit" onClick={handleProfileMenuOpen} style={{
                marginLeft: '20px',
                marginRight: '20px',
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                padding: '0',
              }}>
                <Avatar src={profileImage || "/default-profile.jpg"} style={{ width: '100%', height: '100%' }} />
              </IconButton>
            </Tooltip>

            {/* Profile Card Component */}
            <ProfileCard
              anchorEl={anchorEl}
              onClose={handleMenuClose}
              profileImage={profileImage}
              onProfileImageChange={handleProfileImageChange}
            />
          </div>
        </Toolbar>
      </AppBar>

      {/* Render the MeetingLayout with dynamic grid/list view based on isGridView */}
      <MeetingLayout MeetingGrid={MeetingGrid} MeetingList={MeetingList} isGridView={isGridView} />
    </div>
  );
};

export default Header;
