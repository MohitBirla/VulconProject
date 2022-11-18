import { Avatar, Button, Grid, Typography } from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet';
import PieChartIcon from '@mui/icons-material/PieChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Box } from '@mui/system'
import React from 'react'

export default function MyWallet() {
    return (
        <>
            <Box className=" mt-5 wallet_first">
                <Box className=" wallet_main">
                    <Grid className='' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} md={6}>
                            <Typography sx={{fontSize:"25px" }}>CONNECTED <Typography className='d-inline' sx={{ color: "rgb(6, 205, 253)",fontSize:"25px" }}>WALLETS</Typography></Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box className="p-3">
                                <Box className=''>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                        className="nav nav-pills gallery_image_list"
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        <Grid item xs={4} md={4}  className="nav-item" role="presentation">
                                            <Typography
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
                                               Connect Wallet
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4} className="nav-item" role="presentation">
                                            <Typography
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
                                               Archived Wallets
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4} className="nav-item" role="presentation">
                                            <Typography
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
                                                Re-Link Wallets
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}
