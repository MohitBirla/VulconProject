import React, { useState, useEffect } from "react";
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
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MintNFTModal from "../Modals/MintNFTModal";
import Modal from "react-bootstrap/Modal";
import { useAuthContext } from "../../providers/AuthProvider";

export default function Nft() {
  const [nftBoxs, setNftBoxs] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [age, setAge] = React.useState("");
  const [show, setShow] = useState(false);
  const {
    connectWithEmail,
    address,
    connect,
    getBalance,
    balance,
    listNFTs,
    nftList,
  } = useAuthContext();

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    listNFTs().then((r) => {
      console.log(r);
    });
    return () => {};
  }, [address]);

  return (
    <>
      <Box className="pb-3">
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
                        Meta NFTs
                      </Typography>
                      <Typography variant="h5" sx={{ mt: 3 }} className="mx-4">
                        25
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* <Grid item xs={6} md={3}>
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
            </Grid> */}
          </Grid>
        </Box>

        <Box className="events_list_tablist gallery_list ">
          <Box className="">
            <Box
              container
              className="nav nav-pills  tabs_Nft gallery_image_list"
              id="pills-tab"
              role="tablist"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 1,
                m: 1,

                borderRadius: 1,
              }}
            >
              <Box item className="nav-item linked" role="presentation">
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
                  {/* All */}
                </Typography>
              </Box>
              <Box item className="nav-item linked" role="presentation">
                <Typography
                  // className="ms-3"
                  sx={{ mx: 1 }}
                  // id="pills-CategaryOne-tab"
                  // data-bs-toggle="pill"
                  // data-bs-target="#pills-CategaryOne"
                  type="text"
                  role="tab"
                  // aria-controls="pills-CategaryOne"
                  aria-selected="false"
                >
                  {/* Categary 01 */}
                </Typography>
              </Box>
              <Box item className="nav-item linked" role="presentation">
                <Typography
                  // className="ms-3"
                  sx={{ mx: 1 }}
                  // id="pills-CategaryTwo-tab"
                  // data-bs-toggle="pill"
                  // data-bs-target="#pills-CategaryTwo"
                  role="tab"
                  type="text"
                  // aria-controls="pills-CategaryTwo"
                  aria-selected="false"
                >
                  {/* Categary 02 */}
                </Typography>
              </Box>
              {/* <Box className="nav-item linked" role="presentation">
                <Typography
                  // className="ms-3"
                  sx={{ mx: 1 }}

                  // id="pills-CategaryThree-tab"
                  // data-bs-toggle="pill"
                  // data-bs-target="#pills-CategaryThree"
                  role="tab"
                  type="text"
                  // aria-controls="pills-CategaryThree"
                  aria-selected="false"


                >
                  Categary 03

                </Typography>
              </Box> */}
            </Box>
          </Box>
        </Box>
        <Box
          className="bg-white mt-4"
          style={{ width: "100%", height: "1px" }}
        ></Box>
        <Box className="tab-content" id="pills-tabContent">
          <Box
            className="tab-pane fade show active mt-3"
            id="pills-All"
            role="tabpanel"
            aria-labelledby="pills-All-tab"
          >
            
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item lg={8} md={12} sm={12}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 2 }}
                  className="ps-lg-4 ps-md-4 ps-sm-4"
                >
                  <Grid item xs={5}>
                    <Box className="">
                      <TextField
                        sx={{ border: "none" }}
                        placeholder="search..."
                        className=" search_background_fund rounded-3"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ color: "white" }}
                            >
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={5}>
                    <FormControl className="bg-none  selectBtn">
                      <Select
                      className="text-white"
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem  placeholder="" value="">
                          <em>Selet</em>
                        </MenuItem>
                        <MenuItem  value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    className="mt-2 d-flex justify-content-center "
                  >
                    <Box className="AllNft px-2">
                      <Avatar
                        className="mt-2"
                        alt="Remy Sharp"
                        src="/images/tables.svg"
                        sx={{ width: "90%", height: "60%" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={4} md={12} sm={12}>
                    <Box
                      className="nav nav-pills  tabs_events gallery_image_list gap-2 ps-lg-4 ps-md-4 ps-sm-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <Grid item lg={5} md={5} sm={5}>
                        <Typography
                          item
                          className="nav-item"
                          role="presentation"
                        >
                          <Button
                            className=""
                            id="pills-Transfer-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Transfer"
                            type="button"
                            role="tab"
                            aria-controls="pills-Transfer"
                            aria-selected="true"
                            sx={{ height: 55, mb: 2 
                            }}
                          >
                            Transfer NFT
                          </Button>
                        </Typography>
                      </Grid>

                      <Grid item lg={5} md={5} sm={5}>
                        <Typography className="nav-item" role="presentation">
                          <Button
                            className=""
                            id="pills-Mint-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Mint"
                            type="button"
                            role="tab"
                            aria-controls="pills-Mint"
                            aria-selected="false"
                            sx={{ height: 55, mb: 2 }}
                            onClick={() => {
                              setShow(true);
                            }}
                          >
                            Mint New
                          </Button>
                        </Typography>
                      </Grid>
                    </Box>
              </Grid>
            </Grid>

           
            <Grid container spacing={3}>
              {nftList?.tokens.map((dt) => (
                <Grid item xs={6} md={3}>
                  <Box className="Nftbox" sx={{mt: 2, px: 2, py: 3 }}>
                    <Box variant="div" sx={{ mx: 2 }}></Box>
                    <Box
                      component="img"
                      sx={{
                        justifyContent: "center",
                        // mx: 1,
                        // mt: 2,
                      }}
                      className="nft_image"
                      alt="The house from the offer."
                      src={dt.tokenMetadata.image}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box className="tab-content" id="pills-tabContent">
            
            </Box>

            {/* Transfer NFT */}

            <Box
              className="tab-pane fade "
              id="pills-Transfer"
              role="tabpanel"
              aria-labelledby="pills-Transfer-tab"
            >
            </Box>
            <Box
              className="tab-pane fade"
              id="pills-Mint"
              role="tabpanel"
              aria-labelledby="pills-Mint-tab"
            >
            </Box>
          </Box>

          {/* === */}

          {/* == categery 1 */}
          {/* <Box className="tab-pane fade active"
            id="pills-CategaryOne"
            role="tabpanel"
            aria-labelledby="pills-CategaryOne-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Categary 1 lo</Typography>
            </Box>
          </Box> */}

          {/* == categery 2 */}
          {/* <Box className="tab-pane fade active"
            id="pills-CategaryTwo"
            role="tabpanel"
            aria-labelledby="pills-CategaryTwo-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Categary 2</Typography>
            </Box>
          </Box> */}

          {/* == categery 3 */}
          {/* <Box className="tab-pane fade active"
            id="pills-CategaryThree"
            role="tabpanel"
            aria-labelledby="pills-CategaryThree-tab"
          >
            <Box className="">
              <Typography variant="h1" className='text-white'>Categary 3</Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
      <Modal show={show} onHide={handleClose}>
        <MintNFTModal handleClose={() => handleClose()} />
      </Modal>
    </>
  );
}
