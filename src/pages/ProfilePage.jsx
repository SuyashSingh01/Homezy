import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useSelector, useDispatch } from 'react-redux';

function ProfilePage() {
  const dispatch = useDispatch();

  // Fetching user data from Redux store
  const { user } = useSelector((state) => state.auth);

  // Local state for the profile form
  const [firstName, setFirstName] = useState(user?.name?.split(' ')[0] || '');
  const [lastName, setLastName] = useState(user?.name?.split(' ')[1] || '');
  const [role, setRole] = useState('Guest');
  const [email, setEmail] = useState(user?.email || '');
  const [profileImage, setProfileImage] = useState(
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
  );
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfileImage(fileURL);
      setSelectedFile(file);
    }
  };

  // Handle form submission (save button)
  const handleSave = () => {
    // Preparing updated data
    const updatedProfile = {
      name: `${firstName} ${lastName}`,
      role,
      email,
      profileImage: selectedFile || profileImage,
    };

    console.log('Updated Profile:', updatedProfile);

    // Dispatch an action or API call here to save the data
    // Example Redux dispatch:
    // dispatch(updateUserProfile(updatedProfile));
  };

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear to the networks.
            </Typography>
          </Box>
          <Divider />
          {/* Form */}
          <Stack direction="row" spacing={3} sx={{ my: 1 }}>
            <Stack direction="column" spacing={1}>
              <AspectRatio ratio="1" maxHeight={200} sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}>
                <img src={profileImage} alt="Profile" loading="lazy" />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  left: 100,
                  top: 170,
                  boxShadow: 'sm',
                  color: 'text.tertiary',
                }}
                component="label"
              >
                <EditRoundedIcon />
                <input type="file" hidden accept="image/*" onChange={handleUpload} />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl sx={{ gap: 2 }}>
                  <Input
                    size="sm"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    size="sm"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                <FormLabel>Primary Email</FormLabel>
                  <Input
                    size="sm"
                    placeholder="Email"
                    value={user?.email}
                    disabled
                  />
                  <FormLabel>Role</FormLabel>
                  <Input
                    size="sm"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Enter role"
                  />
                </FormControl>
                {/* <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Add Secondary Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </FormControl> */}
              </Stack>
              <FormControl>
                <FormLabel>Timezone</FormLabel>
                <Select size="sm" startDecorator={<AccessTimeFilledRoundedIcon />} defaultValue="1">
                  <Option value="1">
                    Indina Time (Bangkok){' '}
                    <Typography textColor="text.tertiary">— GMT+07:00</Typography>
                  </Option>
                  <Option value="2">
                    USA (NewYork City){' '}
                    <Typography textColor="text.tertiary">— GMT+07:00</Typography>
                  </Option>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid" onClick={handleSave}>
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}

export default ProfilePage;
