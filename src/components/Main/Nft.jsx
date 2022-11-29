import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Button,
  Divider,
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
  
  const [nftBoxs , setNftBoxs]=useState([1,2,3,4,5,6,7,8])

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


        
          <Box className="events_list_tablist gallery_list ">
            <Box className=''>
              <Box container  
                className="nav nav-pills  tabs_Nft gallery_image_list"
                id="pills-tab"
                role="tablist"
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 1,
                  m: 1,
                  
                  borderRadius: 1,
                }}
              >
                <Box item  className="nav-item linked" role="presentation">


                  <Typography
                    className="active mx-1"
                    id="pills-All-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-All"
                    type="button"
                    role="tab"
                    aria-controls="pills-All"
                    aria-selected="false"
                  >
                    All

                  </Typography>

                </Box>
                <Box item className="nav-item linked" role="presentation">
                  <Typography
                    // className="ms-3"
                    sx={{mx:1}}
                    id="pills-CategaryOne-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-CategaryOne"
                    type="text"
                    role="tab"
                    aria-controls="pills-CategaryOne"
                    aria-selected="false"
                  >
                    Categary 01
                  </Typography>
                </Box>
                <Box item className="nav-item linked" role="presentation">
                  <Typography
                    // className="ms-3"
                    sx={{mx:1}}

                    id="pills-CategaryTwo-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-CategaryTwo"
                    role="tab"
                    type="text"
                    aria-controls="pills-CategaryTwo"
                    aria-selected="false"


                  >
                    Categary 02

                  </Typography>
                </Box>
                <Box className="nav-item linked" role="presentation">
                  <Typography
                    // className="ms-3"
                    sx={{mx:1}}

                    id="pills-CategaryThree-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-CategaryThree"
                    role="tab"
                    type="text"
                    aria-controls="pills-CategaryThree"
                    aria-selected="false"


                  >
                    Categary 03

                  </Typography>
                </Box>

              
            </Box>
          </Box>
          </Box>


          <Box className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></Box>


    


        <Box className="tab-content" id="pills-tabContent">
          <Box
            className="tab-pane fade show active mt-3"
            id="pills-All"
            role="tabpanel"
            aria-labelledby="pills-All-tab"
          >
          

{/* == new grid */}
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={5} md={3 }>
            <Box className='align-items-end justify-content-end' sx={{mx:2}}>
              {/* <TextField type="text" class="form-control  rounded-1 text-white" name="Payment.TwoFactorCode" placeholder="Search" /> */}
              <TextField
                // id="outlined-start-adornment"
                sx={{ border: 'none' }}
                placeholder='search...'
                className=' search_background_fund rounded-3'

                InputProps={{
                  startAdornment: <InputAdornment position="start" sx={{ color: 'white' }} ><SearchIcon /></InputAdornment>,
                }}
              />
            </Box>

          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>shiv 1</Typography>

          </Grid>
          <Grid item xs={1}>
          <Box className="AllNft" sx={{ mt: 2, px: 1 }}>  
         
          <Avatar
                        className="mt-2"
                        alt="Remy Sharp"
                        src="/images/tables.svg"
                        sx={{ width: "90%", height: "60%" }}
                      />
          </Box>

          </Grid>
          <Grid item xs={12} md={5}>

          <Box className="events_list_tablist gallery_list mt-4">
                <Box className='justify-content-center'>
                  <Box container rowSpacing={1} columnSpacing={{ }}
                    className="nav nav-pills  tabs_events gallery_image_list"
                    id="pills-tab"
                    role="tablist"
                  >
          <Grid item  xs={5} md={5} sx={{mx:3}}>

                    <Typography item  className="nav-item" role="presentation">
                      <Button
                        className="active"
                        id="pills-Transfer-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Transfer"
                        type="button"
                        role="tab"
                        aria-controls="pills-Transfer"
                        aria-selected="true"


                      >
                        Transfer NFT
                      </Button>
                    </Typography>
          </Grid>
          <Grid item xs={5} md={5}>

                    <Typography className="nav-item" role="presentation">
                      <Button
                        // className="ms-3"
                        id="pills-Mint-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Mint"
                        type="button"
                        role="tab"
                        aria-controls="pills-Mint"
                        aria-selected="false"
                      >
                        Mint New
                      </Button>
                    </Typography>
                    </Grid>



                  </Box>
                </Box>
              </Box>
        
              </Grid>
         
        </Grid>

{/* == */}
<Grid container spacing={3}>
    {nftBoxs.map((dt)=>( <Grid item xs={6} md={3}>
 <Box className="Nftbox" sx={{mx:3,mt:4,height:290, maxHeight: { xs: 200,md:300}, }} >
 <Box variant='div' sx={{mx:2}} >
 <Box
        component="img"
        sx={{ justifyContent: 'flex-end' }}
        
        alt="The house from the offer."
        src="/images/threeDoi.svg"
        

      /> 
<Box
      component="img"
      sx={{
      }}
      alt="The house from the offer."
      src="/images/threeDoi.svg"
      

    /> 
    <Box
      component="img"
      sx={{
      }}
      alt="The house from the offer."
      src="/images/threeDoi.svg"
      

    /> 
</Box>
 <Box
        component="img"
        sx={{
          height: 233,
          // width: 350,
          justifyContent: 'center', 
          mx:1,
          mt:2,
         
          maxHeight: { xs: 150, md: 233 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="/images/frontCard.svg"
      /> 
 </Box>
  </Grid> 
))}
  {/* <Grid item xs={6} md={3}>
    <Typography>xs=6</Typography>
  </Grid>
  <Grid item xs={6} md={3}>
    <Typography>xs</Typography>
  </Grid>
  <Grid item xs={6} md={3}>
    <Typography>xs</Typography>
  </Grid> */}
</Grid>
        
{/* == */}

          </Box>

          {/* Transfer NFT */}
          <Box className="tab-pane fade "
            id="pills-Transfer"
            role="tabpanel"
            aria-labelledby="pills-Transfer-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Transfer 1 lo</Typography>
            </Box>
          </Box>
          {/* Mint New */}
          <Box className="tab-pane fade"
            id="pills-Mint"
            role="tabpanel"
            aria-labelledby="pills-Mint-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Mint 1 lo</Typography>
            </Box>
          </Box>

          {/* == categery 1 */}
          <Box className="tab-pane fade active"
            id="pills-CategaryOne"
            role="tabpanel"
            aria-labelledby="pills-CategaryOne-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Categary 1 lo</Typography>
            </Box>
          </Box>

          {/* == categery 2 */}
          <Box className="tab-pane fade active"
            id="pills-CategaryTwo"
            role="tabpanel"
            aria-labelledby="pills-CategaryTwo-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Categary 2</Typography>
            </Box>
          </Box>

          {/* == categery 3 */}
          <Box className="tab-pane fade active"
            id="pills-CategaryThree"
            role="tabpanel"
            aria-labelledby="pills-CategaryThree-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Categary 3</Typography>
            </Box>
          </Box>


        </Box>


       


     
      </Box>
    </>
  );
}
