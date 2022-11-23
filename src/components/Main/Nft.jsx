import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { FormControl } from "react-bootstrap";

export default function Nft() {
  return (
    <>
      <Box className="blur_color  ">
        <Box className="mt-5 nftMainBox">
          <Typography
            variant="h1"
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              fontFamily: "Eurostile LT Pro Unicode",
            }}
            sx={{ pb: 3 }}
          >
            My <span style={{ color: "rgba(6, 205, 253, 1)" }}> NFts </span>
          </Typography>
          <Grid
            className=""
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} md={3}>
              <Box class="card boXCard nftBox p-2">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                >
                  <Grid className="p-1" item xs={3}>
                    <Box className="borderNft" sx={{ mt: 2, px: 1 }}>
                      <Avatar
                        className="mt-2 mx-1"
                        alt="Remy Sharp"
                        src="/images/nft.svg"
                        sx={{ width: "70%", height: "70%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={9} className="p-1">
                    <Box>
                      <Typography className="card-title cardText mt-2 mx-3 ">
                        VulcanMarket NFTs
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 3 }} className="mx-4">
                        25
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box class="card boXCard nftBox p-2">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                >
                  <Grid className="p-1" item xs={3}>
                    <Box className="borderNft" sx={{ mt: 2, px: 1 }}>
                      <Avatar
                        className="mt-2 mx-1"
                        alt="Remy Sharp"
                        src="/images/nft.svg"
                        sx={{ width: "70%", height: "70%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={9} className="p-1">
                    <Box>
                      <Typography className="card-title cardText mt-2 mx-3 ">
                        Agora NFTs
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 3 }} className="mx-4">
                        09
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box class="card boXCard nftBox p-2">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                >
                  <Grid className="p-1" item xs={3}>
                    <Box className="borderNft" sx={{ mt: 2, px: 1 }}>
                      <Avatar
                        className="mt-2 mx-1"
                        alt="Remy Sharp"
                        src="/images/nft.svg"
                        sx={{ width: "70%", height: "70%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={9} className="p-1">
                    <Box>
                      <Typography className="card-title cardText mt-2 mx-3 ">
                        Total NFTs{" "}
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 3 }} className="mx-4">
                        12
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Box class="card boXCard nftBox p-2">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                >
                  <Grid className="p-1" item xs={3}>
                    <Box className="borderNft" sx={{ mt: 2, px: 1 }}>
                      <Avatar
                        className="mt-2 mx-1"
                        alt="Remy Sharp"
                        src="/images/nft.svg"
                        sx={{ width: "70%", height: "70%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={9} className="p-1">
                    <Box>
                      <Typography className="card-title cardText mt-2 mx-3 ">
                        Total NFTs Sold
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 3 }} className="mx-4">
                        16
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>


        <Grid item xs={12} md={6}>
                            <Box className="events_list_tablist gallery_list ">
                                <Box className=''>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                        className="nav nav-pills  tabs_events2 gallery_image_list"
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        <Grid item xs={8} md={8}></Grid>
                                        <Grid item xs={1} md={1} className="nav-item linked" role="presentation">
                                            <Typography
                                                className="active"
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home1"
                                                type="text"
                                                // role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"

                                            >
                                                All
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} md={1} className="nav-item linked" role="presentation">
                                            <Typography
                                                // className="ms-3"

                                                id="pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-profile1"
                                                type="text"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="false"
                                            >
                                                Categary 01
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} md={1} className="nav-item linked" role="presentation">
                                            <Typography
                                                // className="ms-3"

                                                id="pills-wp-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-wp1"
                                                role="tab"
                                                type="text"
                                                aria-controls="pills-wp"
                                                aria-selected="false"


                                            >
                                            Categary 02

                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} md={1} className="nav-item linked" role="presentation">
                                            <Typography
                                                // className="ms-3"

                                                id="pills-wp-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-wp1"
                                                role="tab"
                                                type="text"
                                                aria-controls="pills-wp"
                                                aria-selected="false"


                                            >
                                                                                               Categary 03

                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Box>
                            </Box>



                        </Grid>



        {/* <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Box>
              <TextField
                // id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "25ch",
                  height: "45px",
                  "& fieldset": { border: "none" },
                }}
                placeholder="search..."
                className="rounded-4 search_background "
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={2} md={3}>
            <Box>
              <Select
                sx={{
                  m: 1,
                  width: "20ch",
                  height: "45px",
                  "& fieldset": { border: "none" },
                }}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                className="search_background text-white"
              >
                <MenuItem
                  className="text-white search_background_2 "
                  value={10}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  className="text-white search_background_2 "
                  value={20}
                >
                  Twenty
                </MenuItem>
                <MenuItem className="text-white search_background_2" value={30}>
                  Thirty
                </MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={1} md={2}>
            <Box> </Box>
          </Grid>
          <Grid item xs={2} md={2}>
            <Box
              sx={{
                width: "20ch",
                height: "45px",
                border: "2px solid #1a97ef",
              }}
              className="rounded-3"
            >
              {" "}
              Transfer NFT{" "}
            </Box>
          </Grid>
          <Grid item xs={1} md={2}>
            <Box
              sx={{
                width: "15ch",
                height: "45px",
                border: "2px solid #1a97ef",
              }}
              className="rounded-3"
            >
              {" "}
              Mint new{" "}
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    </>
  );
}
