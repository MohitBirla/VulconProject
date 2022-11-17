import * as React from 'react';
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
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'
import Nft from './Nft';
import { fontFamily } from '@mui/system';
import { Button, ButtonBase, List, li, Typography, FormControl, Grid, TextField } from '@mui/material';
import { Input } from '@mui/icons-material';

const columns = [
  { id: 'Id', label: 'Id', minWidth: 100 },
  { id: 'Type', label: 'Type', minWidth: 100 },
  {
    id: 'From Address',
    label: 'From Address',
    minWidth: 180,
    align: 'center',
  },
  {
    id: 'To Address',
    label: 'To Address',
    minWidth: 180,
    align: 'center',
  },
  {
    id: 'Transaction Id',
    label: 'Transaction Id',
    minWidth: 200,
    align: 'center',
  },
];


// function createData(Id, Type, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

export default function MyFunds() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212276",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212277",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212278",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212279",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212280",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212281",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212282",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212283",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212284",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212285",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212286",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212287",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },


  ])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box className='top_main'>
      <Box className='main'>
        <Box className=''>
          <Box className='ps-5'>

            <Typography variant="h1" style={{ fontSize: '60px', fontWeight: 'bold',fontStyle:"italic" }} >MY 
            <Typography className='d-inline' variant="h1" style={{ fontSize: '60px', fontWeight: 'bold',fontStyle:"italic" , color:"rgba(6, 205, 253, 1)" }} > FUNDS </Typography></Typography>
            <Box className="events_list_tablist gallery_list mt-4">
              <Box className='justify-content-center'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  className="nav nav-pills  tabs_events gallery_image_list"
                  id="pills-tab"
                  role="tablist"
                >
                  <Grid item xs={4} md={4} className="nav-item" role="presentation">
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
                  <Grid item xs={4} md={4} className="nav-item" role="presentation">
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
                  <Grid item xs={4} md={4} className="nav-item" role="presentation">
                    <Button
                      // className="ms-3"
                      id="pills-wp-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wp"
                      type="button"
                      role="tab"
                      aria-controls="pills-wp"
                      aria-selected="false"
                      startIcon={<PaymentsIcon/>}

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

                        <Box class="card-body blur_color card-main text-white">

                          <Typography variant="h4" style={{ fontFamily: 'Beatrix Antiqua' }} className='card-title' >Matic Main Wallet </Typography>
                          <Box className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></Box>
                          <Box className='d-flex align-items-center pt-4'>
                            <Typography style={{ color: '#989FAE' }} class=" text-p card-text mt-2">Total Main Wallet Balance</Typography>
                            <Typography variant="h4" style={{ fontFamily: 'Beatrix Antiqua' }} className='ms-3 '><span>0 </span>Matic</Typography>
                          </Box>
                          <Box className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></Box>

                          <Box class="d-md-flex d-xxl-block d-fhd-flex mt-3">
                            <Box style={{ color: '#989FAE' }} class="me-5 mb-2 mb-md-0 mb-xxl-2 mb-fhd-0">
                              Transfer to
                              <Typography variant="h4" style={{ fontFamily: 'Beatrix Antiqua' }} class="mb-0 mt-2 text-white">Marketing Wallet</Typography>
                            </Box>
                            <FormControl class="row flex-grow-1 gx-1">
                              <Box class="col-6 position-relative mb-2 mb-sm-0">
                                <input type="number" outline="none" id="FromMainPYR" min="1" class="form-control shadow-none h-pxl-48 rounded-1 text-white" placeholder="Enter Amount of MATIC" />

                                <Typography variant="h6" id="MainMax" type="button" class="p-0 OrangeText shadow-none  bg-transparent border-0 position-absolute end-0 top-0  mt-3 F-size-20 bottom-0 me-3  "> Max </Typography>
                              </Box>
                              <Box class="col-6">
                                <Button type="button" id="ConvertMainToMarket" class="BtnBorder py-2 px-2 bg-transparent border-0 " >Transfer</Button>
                              </Box>
                            </FormControl>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className='row mt-5'>
                    <Box className='col-4'>
                      <Typography variant="h4" style={{ fontFamily: 'Beatrix Antiqua' }} class="card-title">Swapping <span className='wallet'>History</span> </Typography>
                    </Box>
                    <Box className='col-8 align-items-end bd-highlight justify-content-end'>
                      <input type="text" class="form-control shadow-none  rounded-1 w-75 text-white" name="Payment.TwoFactorCode" placeholder="Search" />

                    </Box>
                  </Box>
                </Box>
              </Box>

              <Paper sx={{ width: '100%', overflow: 'hidden', padding: "5px", margin: "3% 0 5% 0", background: "rgba(0, 0, 0, 1)" }}>
                <TableContainer sx={{ maxHeight: 400 }}>
                  <Table stickyHeader aria-label=" table" sx={{}}>
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell className='text-white fw-bold' sx={{ background: "#404040", }}
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell className='text-white' key={column.id} align={column.align}>
                                    {column.format && typeof value === 'string'
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  className='text-white'
                  rowsPerPageOptions={[10, 25, 100]}
                  component="Box"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>


            <Box

              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Box
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">
                  <h1 className='text-white'>MY WALLETS</h1>
                </Box>
              </Box>
            </Box>
            <Box

              className="tab-pane fade"
              id="pills-wp"
              role="tabpanel"
              aria-labelledby="pills-wp-tab"
            >
              <Box
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">
                      <Nft/>
                 
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>



      </Box>
    </Box>

  )
}
