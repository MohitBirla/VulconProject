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
import { Box } from '@mui/material';
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
              <h4 className=" fw-bold text-white" style={{ fontFamily: "Beatrix Antiqua",fontSize:'25px' }} >CODYPANDA</h4>
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
                  aria-selected="true" type='button' startIcon={<PieChartIcon />} className='  pt-2 nav-link active'>MYFUNDZ</Button>

              </Box>
              <Box onClick={() => linkBtn("MYASSETS")} className="mt-1  text-center pt-0 side-nav-link"


              >
                {/* <h5 className="m-0 pt-2">⚙ My Assets</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' startIcon={<LeaderboardIcon />} className='nav-link pt-2 '> My Assets</Button>

              </Box>
              <Box className="mt-1  text-center pt-0 side-nav-link"

              >
                {/* <h5 className="m-0 pt-2">⚙ Wallet</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' startIcon={<WalletIcon />} className='nav-link text-start pt-2 '> Wallet</Button>

              </Box>

              <Box className="mt-1  text-center pt-0 side-nav-link"

              >
                {/* <h5 className="m-0 pt-2">⚙ Profile</h5> */}
                <Button data-bs-toggle="pill"
                  onClick={() => linkBtn("MYPROFILE")}
                  aria-controls="pills-home"
                  aria-selected="false" type='button' startIcon={<Person2Icon />} className='nav-link pt-2 '> Profile</Button>
                
              </Box>

              <Box className="mt-1 text-center pt-0 side-nav-link "

              >
                {/* <h5 className="m-0 pt-2">⚙  Setting</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' startIcon={<SettingsIcon />} className='nav-link pt-2 '>Setting</Button>

              </Box>
              <Box className="mt-1  text-center pt-0 side-nav-link "

              >
                {/* <h5 className="m-0 pt-2">⚙ Others</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' startIcon={<TuneIcon />} className='nav-link pt-2 '>Others</Button>

              </Box>

              <Box className="mt-5  text-center pt-0 side-nav-link"

              >
                {/* <h5 className="m-0 pt-2">Log Out</h5> */}
                <Button data-bs-toggle="pill"
                  aria-controls="pills-home"
                  aria-selected="false" type='button' startIcon={<LogoutIcon />} className='nav-link pt-2 '>Log Out</Button>

              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='px-lg-5 pt-2 col-lg-9 col-md-9 col-12 text-white all_main'>
        {showdata === "MYFUNDS" ? <MyFunds /> : ""}
        {/* {showdata === "MYASSETS" ? <MyAssets /> : ""} */}
        {showdata === "MYPROFILE" ? <Profile /> : ""}

      </Box>
    </Box>
  )
}