import React from 'react'
import Avatar from "@mui/material/Avatar";
import { Box, Grid, Typography } from '@mui/material'

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function Nft() {

    return (
        <>

            <Box>
                <Box className='blur_color '>
                    <Box className='mt-5 nftMainBox'>
                        <Typography variant="h1" style={{ fontSize: '25px', fontWeight: 'bold', }}  sx={{ pb: 3}} >My NFts</Typography>
                        <Grid className='' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6} md={3}>
                                <Box class="card  border border-light nftBox">
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                                        <Grid item xs={4}>
                                        <Box sx={{ mt: 2}}> <Avatar /> </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Box>
                                            <Typography  style={{ fontSize: '20px', fontWeight: 'bold' }} sx={{ p: 0 ,m:0}} class="card-title">VulcanMarket NFTs</Typography>
                                        <Typography  variant="h1" class=" fw-bolder " sx={{ p: 0 ,m:0}} >0</Typography>
                                            </Box>
                                        
                                        </Grid>

                                    </Grid>
                                    {/* <Box class="card-body">
                                        <Box className='row'>
                                            <Box className='col-4'> <Avatar /> </Box>
                                            <Box className='col-8'>
                                                <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                <Typography class=" fw-bolder fs-2">0</Typography>
                                            </Box>
                                        </Box>
                                    </Box> */}

                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Box class="card  border border-light nftBox ">
                                    <Box class="card-body">
                                        <Box className='row'>
                                            <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                            <Box className='col-8'>
                                                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                <Typography class=" fw-bolder fs-2">0</Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Box class="card  border border-light nftBox ">
                                    <Box class="card-body">
                                        <Box className='row'>
                                            <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                            <Box className='col-8'>
                                                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                <Typography class=" fw-bolder fs-2">0</Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Box class="card  border border-light nftBox ">
                                    <Box class="card-body">
                                        <Box className='row'>
                                            <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                            <Box className='col-8'>
                                                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                <Typography class=" fw-bolder fs-2">0</Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                        {/* <Box className='nftBox' >
                        <Box class=" col-lg-3 col-md-6 col-12" >
                                            <Box class="card  border border-light ">
                                                <Box class="card-body">
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box class=" col-lg-3 col-md-6 col-12" >
                                            <Box class="card  border border-light ">
                                                <Box class="card-body">
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box class=" col-lg-3 col-md-6 col-12" >
                                            <Box class="card  border border-light ">
                                                <Box class="card-body">
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box class=" col-lg-3 col-md-6 col-12" >

                                            <Box class="card  border border-light ">
                                                <Box class="card-body">
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">VulcanMarket NFTs</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>

                        </Box> */}

                    </Box>
                </Box>





            </Box>


        </>
    )
}
