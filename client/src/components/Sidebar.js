'use client';

import React from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemText } from '@mui/material';
import { FiFileText, FiCalendar, FiTrash2 } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import IconButton from '@mui/material/IconButton'; // Import IconButton

const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  const pathname = usePathname();

  const sidebarItems = [
    { href: '/notes', icon: <FiFileText size={24} />, label: 'Notes' },
    { href: '/meetings', icon: <FiCalendar size={24} />, label: 'Meetings' },
    { href: '/bin', icon: <FiTrash2 size={24} />, label: 'Bin' },
  ];

  return (
    <div
      className={`max-h-screen pt-1 `}
      style={{
        width: isSidebarOpen ? '250px' : '65px', // Toggle sidebar width
        transition: 'width 0.3s ease', // Smooth transition for width change
        overflow: 'hidden',
        minHeight:'91.5vh',
        //backgroundColor: '#FFFFFF', // Light red background color for the sidebar
      }}
    >
      <List
        style={{
          padding: 0, // Remove padding in the list
          margin: 0, // Remove margin in the list
        }}
      >
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <ListItem
              key={index}
              button
              component={Link}
              href={item.href}
              style={{
                marginBottom: 0, // No bottom margin between list items
                padding: '4px 0', // Padding for the list items (top-bottom)
                display: 'flex',
                justifyContent: 'flex-start', // Ensure icons stay left aligned
                alignItems: 'center',
                backgroundColor: isActive ? '#ffbf69' : '', // Active item highlight
                borderTopRightRadius: '35px', // Right-side border radius (top)
                borderBottomRightRadius: '35px', // Right-side border radius (bottom)
              }}
            >

              {/* IconButton with hover effect and rounded background */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label={item.label}
                style={{
                  padding: '12px',
                  marginLeft:'10px',
                  borderRadius: '50%', // Ensure rounded background for the icon button
                  transition: 'background-color 0.3s', // Smooth hover effect for icon
                }}
                className="hover:bg-gray-200" // On hover, show a light gray background only for the icon
              >
                {item.icon}
              </IconButton>
              {isSidebarOpen && (
                <ListItemText
                  primary={item.label}
                  style={{
                    marginLeft: '0px', // Space between the icon and label
                    opacity: isSidebarOpen ? 1 : 0, // Fade out text when the sidebar is collapsed
                    paddingLeft: '1px', // Add padding to the left side of the label
                    transition: 'padding 0.3s', // Smooth transition for padding
                  }}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Sidebar;
