import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import WalletIcon from '@mui/icons-material/Wallet';
import PieChartIcon from '@mui/icons-material/PieChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import SearchIcon from '@mui/icons-material/Search';

import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'
import Nft from './Nft';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { fontFamily } from '@mui/system';
import { Button, ButtonBase, List, li, Typography, FormControl, Grid, TextField, FormHelperText, InputAdornment } from '@mui/material';
import { Input } from '@mui/icons-material';
import MyWallet from './MyWallet';
import DataTable from './table';

import { Web3Button, useAccount, useConnectModal, useBalance } from '@web3modal/react';
import { useAuthContext } from '../../providers/AuthProvider';

export default function MyFunds() {

  const [age, setAge] = React.useState('');
  const { connectWithEmail, address, connect, getBalance, balance } = useAuthContext()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    getBalance().then(bal => {
      console.log(bal)
    })

    return () => {

    }
  }, [address])

  return (
    <Box className='top_main'>
      <Box className='main'>
        <Box className=''>
          <Box className=''>

            <Typography variant="h1" style={{ fontSize: '60px', fontWeight: 'bold', fontStyle: "italic" }} >MY
              <Typography className='d-inline' variant="h1" style={{ fontSize: '60px', fontWeight: 'bold', fontStyle: "italic", color: "rgba(6, 205, 253, 1)" }} > FUNDS </Typography></Typography>
            <Box className="events_list_tablist gallery_list mt-4">
              <Box className='justify-content-center'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  className="nav nav-pills  tabs_events gallery_image_list"
                  id="pills-tab"
                  role="tablist"
                >
                  <Grid item xs={12} md={4} className="nav-item" role="presentation">
                    <Button
                      className="active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      startIcon={<PieChartIcon />}

                    >
                      MANAGE FUNDS
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4} className="nav-item" role="presentation">
                    <Button
                      // className="ms-3"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      startIcon={<WalletIcon />}
                    >
                      MY WALLETS
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4} className="nav-item" role="presentation">
                    <Button
                      // className="ms-3"
                      id="pills-wp-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wp"
                      type="button"
                      role="tab"
                      aria-controls="pills-wp"
                      aria-selected="false"
                      startIcon={<PaymentsIcon />}

                    >
                      NFT TRANSFER HISTORY
                    </Button>
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </Box>
          <Box className="tab-content" id="pills-tabContent">
            <Box
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Box className="gallery_main_container ">
                <Box>
                  <Box className='row mt-5'>
                    <Box className='col'>
                      <Box class="card  blur_color">

                        <Box class="card-body blur_color card-main ">

                          <Typography variant="h4" style={{ fontFamily: 'Beatrix Antiqua' }} className='card-title' >Matic Main Wallet </Typography>
                          <Box className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></Box>
                          <Box className='d-flex align-items-center pt-4'>
                            <Typography style={{ color: '#989FAE' }} class=" text-p card-text mt-2">Total Main Wallet Balance</Typography>
                            <Typography variant="h4" style={{ fontFamily: 'Beatrix Antiqua' }} className='ms-3 '><span>{balance} </span>Matic</Typography>
                          </Box>
                          <Box className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></Box>
                          <Box class="d-md-flex d-xxl-block d-fhd-flex mt-3">
                            <Box style={{ color: '#989FAE' }} class="me-5 mb-2 mb-md-0 mb-xxl-2 mb-fhd-0">
                              Transfer to
                              <FormControl class="row flex-grow-1 gx-1">
                                <Box class="col-lg-6 col-8 position-relative mb-2 mb-sm-0">
                                  <TextField
                                    sx={{ border: 'none' }}
                                    placeholder='0x'
                                    className=' search_background_fund '

                                    InputProps={{

                                    }}
                                  />
                                </Box>
                              </FormControl>
                            </Box>
                            <FormControl class="row flex-grow-1 gx-1">
                              <Box class="col-lg-6 col-8 position-relative mb-2 mb-sm-0">
                                {/* <input type="number" outline="none" id="FromMainPYR" min="1" class=" form-control shadow-none h-pxl-48 rounded-1 text-white" placeholder="Enter Amount of MATIC" /> */}
                                <TextField
                                  // id="outlined-start-adornment"
                                  sx={{ border: 'none' }}
                                  placeholder='0.1'
                                  className=' search_background_fund '

                                  InputProps={{
                                  }}
                                />
                                <Typography variant="h6" id="MainMax" type="button" class="p-0 OrangeText shadow-none  bg-transparent border-0 position-absolute end-0 top-0  mt-3 F-size-20 bottom-0 me-3  "> Max </Typography>
                              </Box>
                              <Box class="col-lg-6 col-4">
                                <Button type="button" id="ConvertMainToMarket" class="BtnBorder py-2 px-2 bg-transparent border-0 " >Transfer</Button>
                              </Box>
                            </FormControl>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className='row mt-5 swap_history'>
                    <Box className='col-lg-5 col-12' sx={{ mt: 2 }}>
                      <Typography className='card-title1' variant="h1" style={{ fontSize: '24px', fontWeight: 'bold' }} >TRANSACTION
                        <Typography className='d-inline card-title2' variant="h1" style={{ fontSize: '24px', fontWeight: 'bold', color: "rgba(6, 205, 253, 1)" }} > HISTORY </Typography></Typography>
                      {/* <Typography variant='h1' sx={{mt:1,fontSize:'24px'}}  class="card-title1">Swapping  </Typography>
                      <Typography  variant='h1' sx={{mt:1,fontSize:'24px'}} className='card-title2'>History</Typography> */}
                    </Box>
                    <Box className='col-lg-4 col-12'>
                      {/* <TextField type="text" class="form-control  rounded-1 text-white" name="Payment.TwoFactorCode" placeholder="Search" /> */}
                      <TextField
                        // id="outlined-start-adornment"
                        sx={{ border: 'none' }}
                        placeholder='search...'
                        className=' search_background_fund '

                        InputProps={{
                          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                        }}
                      />
                    </Box>
                    <Box className='col-lg-3 col-12'>
                      <FormControl className='bg-none selectBtn' sx={{ m: 0, }}>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem placeholder='guru' value="">
                            <em>Select Transection Type</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <DataTable />
              </Box>
            </Box>


            <Box

              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >

              <Box className="">
                <MyWallet />
              </Box>

            </Box>
            <Box

              className="tab-pane fade"
              id="pills-wp"
              role="tabpanel"
              aria-labelledby="pills-wp-tab"
            >

              <Box className="gallery_main_container justify-content-center d-flex flex-wrap">
                <Nft />

              </Box>

            </Box>
          </Box>
        </Box>



      </Box>
    </Box>

  )
}
