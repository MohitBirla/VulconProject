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
    <Box className="profile_box" >
      <Typography
      style={{ fontSize: '60px', fontWeight: 'bold', fontStyle: "italic" }}
        sx={{
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        
          mt: 1,
          pt:3
        }}
        variant="h3"
      >
        PROFILE{" "}
        <Typography
          variant="h3"
          style={{ fontSize: '60px', fontWeight: 'bold', fontStyle: "italic" }}
          sx={{
            color: "#06CDFD",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            
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
            <Grid container spacing={2}   >
              <Grid item lg={6} sm={12} md={12} className="w-100">
                <InputLabel className="text_label"  htmlFor="my-input">First Name</InputLabel>

                <TextField
                className="profile_input  "
                  sx={{ mt: 1, "& fieldset": { border: 'none' }, }}
                  id="outlined-textarea"
                  placeholder="Enter Last Name"
                  inputProps={{ style: { color: "white" } }} 
                    
                  fullWidth
                />
                <InputLabel sx={{ mt: 2 }} className="text_label"  htmlFor="my-input">
                  Last Name
                </InputLabel>

                <TextField
                className="profile_input  "
                  sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
                  id="outlined-textarea"
                  placeholder="Enter Last Name"
                  inputProps={{ style: { color: "white" } }} 
                    
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} sm={12} md={12} className="w-100 ">
           
                <InputLabel  className="text_label"  htmlFor="my-input">Bio</InputLabel>
                <TextField
                className="profile_input  "
                  sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
                  id="outlined-textarea"
                  placeholder="Bio.........."
                  inputProps={{ style: { color: "white" } }} 
                  multiline
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <hr className="mb-2" />
     
      <Grid container spacing={2}>
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">User Name</InputLabel>
          <TextField
          className="profile_input  "
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter User Name"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">Your Website URL</InputLabel>
          <TextField
          className="profile_input  "
          sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="http://"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}  >
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">Email Address</InputLabel>
          <TextField
           className="profile_input  "
           sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="example@gmail.com"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">Add Tagline</InputLabel>
          <TextField
           className="profile_input  "
           sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter tagline"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
      </Grid>
      <hr className="mt-5"/>

      <Grid container spacing={2}  >
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">Twitter</InputLabel>
          <TextField
            className="profile_input  "
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter Your Name"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">Discord</InputLabel>
          <TextField
            className="profile_input  "
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            inputProps={{ style: { color: "white" } }} 
            placeholder="https://"
              
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3">
          <InputLabel className="text_label"  htmlFor="my-input">Telegram</InputLabel>
          <TextField
            className="profile_input  "
            sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="example@gmail.com"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
        <Grid item lg={6} sm={12} md={12} className="w-100 mt-3" >
          <InputLabel className="text_label"  htmlFor="my-input">Medium</InputLabel>
          <TextField
           className="profile_input   "
           sx={{ mt: 1 , "& fieldset": { border: 'none' },}}
            id="outlined-textarea"
            placeholder="Enter tagline"
            inputProps={{ style: { color: "white" } }} 
              
            fullWidth
          />
        </Grid>
      </Grid>
    <Box className="text-end mt-4">
    <Button sx={{m:2}} variant="contained" size="large" className="Profile_btn">
     Save
    </Button> 
    <Button sx={{m:2}} variant="outlined" size="large" className="Profile_btn">
    Discard
        </Button>
       
    </Box>
    </Box>
  );
}
