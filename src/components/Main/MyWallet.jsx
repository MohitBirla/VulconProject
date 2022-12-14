import { Avatar, Button, Divider, Grid, TextField, Typography, FormControl, InputAdornment } from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import DataTable from './table';
import PieChartIcon from '@mui/icons-material/PieChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Box } from '@mui/system'
import React from 'react'
import Table from './table';

export default function MyWallet() {
    const [age, setAge] = React.useState('');
    const [walletCard, setWalletCard] = React.useState([1,2,3,4,5,6,7]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box className=" mt-5 wallet_fist">
                <Box className="wallet_main">
                    <Grid className='' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontSize: "25px" }}>CONNECTED <Typography className='d-inline' sx={{ color: "rgb(6, 205, 253)", fontSize: "25px" }}>WALLETS</Typography></Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="events_list_tablist gallery_list ">
                                <Box className=''>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                        className="nav nav-pills  tabs_events2 gallery_image_list"
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        <Grid item xs={4} md={4} className="nav-item linked" role="presentation">
                                            <Typography
                                                className="active"
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home1"
                                                type="text"
                                                // role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                                startIcon={<PieChartIcon />}

                                            >
                                                Connect Wallet
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4} className="nav-item linked" role="presentation">
                                            <Typography
                                                // className="ms-3"

                                                id="pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-profile1"
                                                type="text"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="false"
                                                startIcon={<WalletIcon />}
                                            >
                                                Archived Wallets
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4} className="nav-item linked" role="presentation">
                                            <Typography
                                                // className="ms-3"

                                                id="pills-wp-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-wp1"
                                                role="tab"
                                                type="text"
                                                aria-controls="pills-wp"
                                                aria-selected="false"
                                                startIcon={<PaymentsIcon />}


                                            >
                                                Re-Link Wallets
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>
                            </Box>



                        </Grid>

                    </Grid>
                </Box>
                <Box className="tab-content" id="pills-tabContent" >
                    <Box
                        className="tab-pane fade show active"
                        id="pills-home1"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <Box>
                            <Box>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    {walletCard?.map(dt=>
                                    <Grid item xs={12} md={4}>
                                    <Box className="walletCard">
                                        <Box className="walletCard2 p-2">
                                            <Grid container sx={{ justifyContent: "center" }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                                                <Grid item >
                                                    <Box><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.6605 23.2957C17.9198 23.555 17.9198 23.9755 17.6605 24.2349L15.1883 26.7071C11.9088 29.9865 6.57251 29.9867 3.29272 26.7071C0.0131577 23.4274 0.0131577 18.0911 3.29272 14.8115L5.76496 12.3393C6.02428 12.08 6.44474 12.08 6.70411 12.3393L8.89539 14.5306C9.15471 14.7899 9.15471 15.2104 8.89539 15.4697L6.42315 17.9419C4.8697 19.4954 4.8697 22.0231 6.42315 23.5766C7.97661 25.1301 10.5044 25.1301 12.0579 23.5766L14.5301 21.1044C14.7894 20.8451 15.2099 20.8451 15.4692 21.1044L17.6605 23.2957ZM14.5301 8.89583C14.7894 9.15514 15.2099 9.15514 15.4692 8.89583L17.9414 6.42364C19.4949 4.87002 22.0226 4.87013 23.5762 6.42364C25.1296 7.97715 25.1296 10.5048 23.5762 12.0584L21.104 14.5305C20.8446 14.7899 20.8446 15.2103 21.104 15.4697L23.2952 17.661C23.5546 17.9203 23.975 17.9203 24.2344 17.661L26.7066 15.1887C29.9862 11.9091 29.9862 6.57284 26.7066 3.29321C23.4269 0.0136459 18.0907 0.0136459 14.8111 3.29321L12.3389 5.7654C12.0796 6.02471 12.0796 6.44517 12.3389 6.70454L14.5301 8.89583ZM27.5251 28.7778L28.7772 27.5256C29.2959 27.0069 29.2959 26.166 28.7772 25.6474L4.35245 1.22251C3.83377 0.703825 2.99285 0.703825 2.47422 1.22251L1.22202 2.4747C0.703336 2.99339 0.703336 3.83431 1.22202 4.35294L25.6468 28.7778C26.1655 29.2964 27.0064 29.2964 27.5251 28.7778Z" fill="#06CDFD" />
                                                    </svg>
                                                    </Box>
                                                </Grid>
                                                <Grid item >
                                                    <Box sx={{ color: 'rgba(141, 141, 141, 1)', fontWeight: 'bold' }}>MATIC</Box>

                                                </Grid>
                                                <Grid item>
                                                    <Box className="cardInput" >
                                                        <Typography className="border-danger rounded-5 pe-2 ps-2" >0x84d0...B3O    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.7247 2.56924L12.9302 0.774805C12.7559 0.59876 12.5157 0.5 12.2667 0.5H7.47368C6.43804 0.5 5.59868 1.33965 5.59868 2.375L5.59925 9.875C5.62505 10.9121 6.46587 11.75 7.50005 11.75H13.125C14.1563 11.75 15 10.9062 15 9.875V3.23193C15 2.9835 14.9004 2.74502 14.7247 2.56924ZM13.5938 9.875C13.5938 10.1339 13.3839 10.3438 13.125 10.3438H7.47368C7.21476 10.3438 7.00493 10.1339 7.00493 9.875V2.37881C7.00493 2.11994 7.21481 1.91006 7.47368 1.91006H11.2237L11.25 3.3125C11.25 3.83018 11.6699 4.25 12.1875 4.25H13.5674V9.875H13.5938ZM7.9688 13.625C7.9688 13.8839 7.75892 14.0938 7.50005 14.0938H1.84868C1.58976 14.0938 1.37993 13.8839 1.37993 13.625L1.40571 6.12793C1.40571 5.86906 1.6156 5.65918 1.87446 5.65918H4.68755V4.25H1.87476C0.839111 4.25 -0.000244141 5.08936 -0.000244141 6.125L4.29687e-05 13.625C0.000107422 14.6592 0.839697 15.5 1.87505 15.5H7.50005C8.5313 15.5 9.37505 14.6562 9.37505 13.625V12.6875H7.99517L7.9688 13.625Z" fill="#C2C2C2" />
                                                        </svg>
                                                        </Typography>
                                                    </Box>

                                                </Grid>
                                                <Grid item>
                                                    <Box><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.9375 0H6.1875C5.04883 0 4.125 0.923828 4.125 2.0625V4.125H2.0625C0.923828 4.125 0 5.04883 0 6.1875V19.9375C0 21.0762 0.923828 22 2.0625 22H15.8125C16.9512 22 17.875 21.0762 17.875 19.9375V17.875H19.9375C21.0762 17.875 22 16.9512 22 15.8125V2.0625C22 0.923828 21.0762 0 19.9375 0ZM15.8125 19.9375H2.0625V11H15.8125V19.9375ZM19.9375 15.8125H17.875V6.1875C17.875 5.04883 16.9512 4.125 15.8125 4.125H6.1875V2.0625H19.9375V15.8125Z" fill="#C2C2C2" />
                                                    </svg>
                                                    </Box>

                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box className='divide'>
                                            <Divider />

                                        </Box>
                                        <Box className="p-3">
                                            <Box>
                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                    <Grid item md={4}>
                                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                            <Grid item xs={6} md={6}>
                                                                <svg className='mt-2' width="25" height="39" viewBox="0 0 25 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.32927 23.6708C7.32927 17.7168 15.8085 13.7878 15.8085 7.29326C15.8085 3.49334 13.0655 0.193626 12.654 0C12.6863 0.266236 12.7024 0.540541 12.7024 0.806777C12.7024 8.23719 0.834717 13.2231 0.834717 22.4768C0.834717 26.4946 3.43254 28.8665 6.19978 31.2142C11.4519 34.9818 12.5007 36.9746 12.5007 38.2009C12.5007 39.0157 12.1135 39.5724 12.1135 40C13.1703 38.6527 13.5173 37.4264 13.5253 36.2566C13.5253 33.8685 11.7746 31.7144 9.95936 29.2779C8.66852 27.4788 7.32927 25.8411 7.32927 23.6708ZM23.8924 20.5244C22.9162 15.1351 17.5995 10.4881 16.2522 9.9637L16.5749 10.5446C16.7686 10.956 16.8492 11.424 16.8492 11.9242C16.8492 15.5305 12.4765 20.8955 12.2829 21.3393C12.1054 21.7507 12.0247 22.1864 12.0247 22.614C12.0247 24.2356 13.251 26.0105 13.4688 26.0105C13.6625 26.0105 18.0352 21.5409 18.1562 18.9351C18.6726 19.879 18.8904 20.7584 18.8904 21.6297C18.8904 24.9536 15.5181 29.4474 15.5181 29.4474C15.5181 30.3832 18.0917 33.7394 18.3821 33.7394C18.4628 33.7394 18.5596 33.6265 18.6403 33.5458C21.698 30.3752 24.0699 26.6882 24.0699 22.5091C24.0699 21.8637 24.0134 21.2021 23.8924 20.5244Z" fill="#0D89D7" />
                                                                </svg>

                                                            </Grid>
                                                            <Grid item xs={6} md={6}>
                                                                <Typography>pvr</Typography>
                                                                <Typography variant="h5" >0.192</Typography>

                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                    

                                                </Grid>
                                            </Box>
                                            <Box className="pt-3">
                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                    <Grid item xs={6} md={6}>
                                                    </Grid>
                                                    <Grid item xs={6} md={6}>
                                                        <Button
                                                            type="button"
                                                            className='withdrawBtn'

                                                        >
                                                            Withdraw
                                                        </Button>
                                                    </Grid>

                                                </Grid>
                                            </Box>


                                        </Box>
                                    </Box> 


                                </Grid>
                                        )}

                                </Grid>
                            </Box>
                        </Box>
                        <Box className='row mt-5 swap_history'>
                            <Box className='col-lg-5 col-12' sx={{ mt: 2 }}>
                                <Typography className='card-title1' variant="h1" style={{ fontSize: '24px', fontWeight: 'bold' }} >WITHDRAWAL
                                    <Typography className='d-inline card-title2' variant="h1" style={{ fontSize: '24px', fontWeight: 'bold', color: "rgba(6, 205, 253, 1)" }} > HISTORY </Typography></Typography>
                                
                            </Box>
                            <Box className='col-lg-4 col-12 xs-mt-2 align-items-end justify-content-end'>
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
                        <Box>
                                <DataTable/> 
                        </Box>
                    </Box>
                    <Box
                        className="tab-pane fade"
                        id="pills-profile1"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <Box>
                            <Typography> Wallet 2</Typography>
                        </Box>
                    </Box>
                    <Box
                        className="tab-pane fade"
                        id="pills-wp1"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <Box>
                            <Typography> Wallet 3</Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}
