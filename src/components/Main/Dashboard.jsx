import React, { useEffect } from 'react'
import MyAssets from './MyAssets'
import MyFunds from './MyFunds'
import Profile from './Profile';
import Avatar from "@mui/material/Avatar";
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import WalletIcon from '@mui/icons-material/Wallet';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import TuneIcon from '@mui/icons-material/Tune';
import { useAuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import { Box, Grid, Paper } from '@mui/material';
export default function Dashboard() {
  const [showdata, setShowdata] = React.useState("MYFUNDS")
  const { connectWithEmail, address, connect } = useAuthContext()
  const navigate = useNavigate();
  const linkBtn = (e) => {
    setShowdata(e)
  }
  useEffect(() => {
    console.log(address)
    if (!address) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [address]);
  return (
    <Box className='row pt-3 ps-4 px-4 main_dashboard'>
      <Box className='side_bar_div col-lg-3 col-md-3 col-12'>
        <Box className="blur_color side_main rounded-5">
          <Box>
            <center className="pt-4 pb-4">
              <h4 className=" fw-bold text-white" style={{ fontFamily: "Roboto,Helvetica,Arial,sans-serif",fontSize:'25px' }}  >CODYPANDA</h4>
                <Avatar
                  className='mt-4'
                  alt="Remy Sharp"
                  src="/images/user_photo.jpeg"
                  sx={{ width: "70%", height: "70%" }}
                />
             
            </center>
            <Box className=" nav nav-pills tabs_events1 d-inline" id="pills-tab">
              <Box onClick={() => linkBtn("MYFUNDS")} className="d-block pt-0  text-center m-0 side-nav-link "

              >
                {/* <h5 className="m-0 pt-2 " startIcon={<EmailIcon/>}>My Funds</h5> */}
                   
              <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="true" type='button'  className='  pt-2 nav-link active'>           
                   <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <PieChartIcon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>MY</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"", paddingLeft:"10px",color:"#06CDFD" }}>FUNDZ</Typography>
                    </Typography>  
                  </Grid>
                  </Grid>
                  </Button>
              </Box>
              <Box onClick={() => linkBtn("MYASSETS")} className="mt-1  text-center pt-0 side-nav-link"
              >
                {/* <h5 className="m-0 pt-2">⚙ My Assets</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button'  className='nav-link pt-2 '>

                <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <LeaderboardIcon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>MY</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" ,color:"#06CDFD" ,paddingLeft:"10px"}}>ASSETS</Typography>
                    </Typography> 
                  </Grid>
                  </Grid>
                  </Button>
              </Box>
              <Box className="mt-1  text-center pt-0 side-nav-link"

              >
                {/* <h5 className="m-0 pt-2">⚙ Wallet</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button'className='nav-link text-center pt-2 '>
                     <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <WalletIcon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>WAL</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" ,color:"#06CDFD" }}>LET</Typography>
                    </Typography> 
                  </Grid>
                  </Grid>
                   </Button>

              </Box>

              <Box className="mt-1  text-center pt-0 side-nav-link"

              >
                {/* <h5 className="m-0 pt-2">⚙ Profile</h5> */}
                <Button data-bs-toggle="pill"
                  onClick={() => linkBtn("MYPROFILE")}
                  aria-controls="pills-home"
                  aria-selected="false" type='button'  className='nav-link pt-2 '> 
                 <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <Person2Icon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>PRO</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" ,color:"#06CDFD" }}>FILE</Typography>
                    </Typography> 
                  </Grid>
                  </Grid>
                  </Button>
                
              </Box>

              <Box className="mt-1 text-center pt-0 side-nav-link "

              >
                {/* <h5 className="m-0 pt-2">⚙  Setting</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' className='nav-link pt-2 '>
                      <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <SettingsIcon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>SETT</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" ,color:"#06CDFD" }}>ING</Typography>
                    </Typography> 
                  </Grid>
                  </Grid>
                    </Button>
              </Box>
              <Box className="mt-1  text-center pt-0 side-nav-link "
              >
                {/* <h5 className="m-0 pt-2">⚙ Others</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button'  className='nav-link pt-2 '>
                      <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <TuneIcon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>OTH</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" ,color:"#06CDFD" }}>ERS</Typography>
                    </Typography> 
                  </Grid>
                  </Grid>
                    </Button>

              </Box>

              <Box className="mt-5  text-center pt-0 side-nav-link">
                {/* <h5 className="m-0 pt-2">Log Out</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' className='nav-link pt-2'>
                      <Grid container spacing={0} style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>
                  <Grid item xs={5} sm={5} className="bg-transparent">
                      <LogoutIcon style={{color:"#06CDFD"}}/>
                    </Grid>
                    <Grid item xs={7} sm={7} className="bg-transparent text-start">
                    <Typography>
                      <Typography display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" }}>LOG</Typography> 
                      <Typography  display="inline" style={{fontFamily: "Eurostile LT Pro Unicode", fontWeight:"600" ,fontStyle:"" ,color:"#06CDFD",paddingLeft:"10px"}}>OUT</Typography>
                    </Typography> 
                  </Grid>
                  </Grid>
                    </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className=' col-lg-9 col-md-9 col-12 text-white all_main mt-3'>
        {showdata === "MYFUNDS" ? <MyFunds /> : ""}
        {showdata === "MYASSETS" ? <Typography variant='h2'>My Assets</Typography>: ""}
        {showdata === "MYPROFILE" ? <Profile /> : ""}

      </Box>
    </Box>
  )
}


