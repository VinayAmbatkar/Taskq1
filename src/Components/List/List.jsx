import React, { useState } from 'react';
import { List as MuiList, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Box } from '@mui/material';

const ProfileList = () => {
  // Static data for now
  const profileData = [
    {
      id: 1,
      name: "Vinay Ambatkar",
      avatar: "/static/images/avatar/vinay.jpg",
      location: "Wardha",
      description: "He is a good guy.",
    },
    {
      id: 2,
      name: "Akansha Salwan",
      avatar: "/static/images/avatar/akansha.jpg",
      location: "Amravathi",
      description: "She is a Frontend Developer studying B.Tech at BDCOE.",
    },
    {
      id: 3,
      name: "Raj Bhoyar",
      avatar: "/static/images/avatar/raj.jpg",
      location: "Chandrapur",
      description: "He is a Backend Developer.",
    },
    {
      id: 4,
      name: "Yash",
      avatar: "/static/images/avatar/yash.jpg",
      location: "Selu",
      description: "He is a trader in his imagination.",
    },
  ];

  // State to hold selected profile
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Function to handle profile click
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <MuiList>
        {profileData.map((profile) => (
          <React.Fragment key={profile.id}>
            <ListItem
              sx={{
                padding: '12px',
                alignItems: 'flex-start',
                cursor: 'pointer', // Add pointer cursor for interactivity
                '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }, // Add hover effect
              }}
              onClick={() => handleProfileClick(profile)} // Attach click event
            >
              <ListItemAvatar>
                <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 40, height: 40 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    {profile.name}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    {profile.location && (
                      <Typography
                        variant="caption"
                        sx={{ color: 'text.secondary', display: 'block', fontStyle: 'italic', marginBottom: '4px' }}
                      >
                        Location: {profile.location}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.4 }}>
                      {profile.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </MuiList>

      {/* Display selected profile details */}
      {selectedProfile && (
        <Box sx={{ marginTop: '20px', padding: '16px', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
          <Typography variant="h6" sx={{ marginBottom: '8px' }}>
            {selectedProfile.name}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '4px', fontStyle: 'italic', color: 'text.secondary' }}>
            Location: {selectedProfile.location}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            {selectedProfile.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProfileList;
