import React from 'react'
import Avatar from "@mui/material/Avatar";
import { Box, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import { FormControl } from 'react-bootstrap';




export default function Nft() {


    return (
        <>



            <Box className='blur_color  '>
                <Box className='mt-5 nftMainBox'>
                    <Typography variant="h1" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Eurostile LT Pro Unicode' }} sx={{ pb: 3 }} >My <span style={{ color: "rgba(6, 205, 253, 1)" }}> NFts </span></Typography>
                    <Grid className='' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} md={3}>
                            <Box class="card boXCard nftBox p-2" >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                                    <Grid item xs={3}>
                                        <Box sx={{ mt: 3 }}> <Avatar /> </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Typography className="card-title cardText mt-2 mx-3 ">VulcanMarket NFTs</Typography>
                                            <Typography variant="h5" sx={{ mt: 3 }} className="mx-4"   >25</Typography>
                                        </Box>

                                    </Grid>

                                </Grid>


                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box class="card boXCard nftBox p-2" >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                                    <Grid item xs={3}>
                                        <Box sx={{ mt: 3 }}> <Avatar /> </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Typography className="card-title cardText mt-2 mx-3 ">Agora NFTs</Typography>
                                            <Typography variant="h5" sx={{ mt: 3 }} className="mx-4"   >09</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box class="card boXCard nftBox p-2" >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                                    <Grid item xs={3}>
                                        <Box sx={{ mt: 3 }}> <Avatar /> </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Typography className="card-title cardText mt-2 mx-3 ">Total NFTs</Typography>
                                            <Typography variant="h5" sx={{ mt: 3 }} className="mx-4"   >12</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box class="card boXCard nftBox p-2" >
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                                    <Grid item xs={3}>
                                        <Box sx={{ mt: 3 }}> <Avatar /> </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Typography className="card-title cardText mt-2 mx-3 ">Total NFTs Sold</Typography>
                                            <Typography variant="h5" sx={{ mt: 3 }} className="mx-4"   >16</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>


                </Box>





                <Grid container spacing={2}>

                    <Grid item xs={3} md={3}>
                        <Box>

                            <TextField
                                // id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch', height: '45px', "& fieldset": { border: 'none' }, }}
                                placeholder='search...'
                                className='rounded-4 search_background '

                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                }}
                            />

                        </Box>
                    </Grid>
                    <Grid item xs={2} md={3}>
                        <Box>

                            <Select
                                sx={{ m: 1, width: '20ch', height: '45px', "& fieldset": { border: 'none' }, }}

                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                className='search_background text-white'

                            >

                                <MenuItem className='text-white search_background_2 ' value={10}>Ten</MenuItem>
                                <MenuItem className='text-white search_background_2 ' value={20}>Twenty</MenuItem>
                                <MenuItem className='text-white search_background_2' value={30}>Thirty</MenuItem>
                            </Select>

                        </Box>

                    </Grid>
                    <Grid item xs={1} md={2}>
                        <Box>  </Box>

                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Box sx={{ width: '20ch', height: '45px', border: "2px solid #1a97ef" }} className='rounded-3'> Transfer NFT </Box>

                    </Grid>
                    <Grid item xs={1} md={2}>
                        <Box sx={{ width: '15ch', height: '45px', border: "2px solid #1a97ef" }} className='rounded-3'> Mint new </Box>


                    </Grid>
                </Grid>






            </Box>








        </>
    )
}