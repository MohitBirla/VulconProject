import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  FormHelperText,
  Input,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div className="blur_color px-5">
      <Typography
        sx={{
          fontFamily: "Eurostile LT Pro Unicode",
          fontStyle: "italic",
          mt: 1,
          pt:3
        }}
        variant="h3"
      >
        PROFILE{" "}
        <Typography
          variant="h3"
          sx={{
            color: "#06CDFD",
            fontFamily: "Eurostile LT Pro Unicode",
            fontStyle: "italic",
          }}
          className="d-inline"
        >
          SETTING
        </Typography>{" "}
      </Typography>
      <Typography sx={{ color: "#CECECE" }}>
        Here are specification for profile settings, please complete your
        profile.
      </Typography>
      <Box sx={{ flexGrow: 1,mt:3 }}>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={12} md={7}>
            <Typography variant="h6" component="h2">
              <Avatar
                className="mt-4"
                alt="Remy Sharp"
                src="/images/user_photo.jpeg"
                sx={{ width: "80%", height: "80%" }}
              />
            </Typography>
          </Grid>
          <Grid item lg={9} sm={12} md={7}>
            <Grid container spacing={2} sx={{ m: 2 }}>
              <Grid item lg={6} sm={12} md={12}>
                <InputLabel className="text_label"  htmlFor="my-input">First Name</InputLabel>

                <TextField
                className="profile_input rounded-3"
                  sx={{ mt: 1, "& fieldset": { border: 'none' }, }}
                  id="outlined-textarea"
                  placeholder="Enter Last Name"
                  multiline
                  fullWidth
                />
                <InputLabel sx={{ mt: 2 }} className="text_label"  htmlFor="my-input">
                  Last Name
                </InputLabel>

                <TextField
                className="profile_input rounded-3"
                  sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
                  id="outlined-textarea"
                  placeholder="Enter Last Name"
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} sm={12} md={12}>
           
                <InputLabel  className="text_label"  htmlFor="my-input">Bio</InputLabel>
                <TextField
                className="profile_input rounded-3"
                  sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
                  id="outlined-textarea"
                  placeholder="Bio.........."
                  multiline
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <hr className="mb-2" />
     
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">User Name</InputLabel>
          <TextField
          className="profile_input rounded-3"
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter User Name"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Your Website URL</InputLabel>
          <TextField
          className="profile_input rounded-3"
          sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="http://"
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Email Address</InputLabel>
          <TextField
           className="profile_input rounded-3"
           sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="example@gmail.com"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Add Tagline</InputLabel>
          <TextField
           className="profile_input rounded-3"
           sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter tagline"
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
      <hr className="mt-5"/>

      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Twitter</InputLabel>
          <TextField
            className="profile_input rounded-3"
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter Your Name"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Discord</InputLabel>
          <TextField
 className="profile_input rounded-3"
 sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="https://"
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Telegram</InputLabel>
          <TextField
            className="profile_input rounded-3"
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="example@gmail.com"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12}>
          <InputLabel className="text_label"  htmlFor="my-input">Medium</InputLabel>
          <TextField
           className="profile_input rounded-3"
           sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter tagline"
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
    <Box className="text-end mt-4">
    <Button sx={{m:2}} variant="contained" size="large">
     Save
    </Button> 
    <Button sx={{m:2}} variant="outlined" size="large">
    Discard
        </Button>
    </Box>
    </div>
  );
}
