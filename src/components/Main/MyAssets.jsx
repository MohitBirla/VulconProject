import React from 'react'
import Avatar from "@mui/material/Avatar";
import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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
export default function MyAssets() {
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
        <>

            <Box>
                <Box className='text-white'>
                    <Typography variant="h1" style={{ fontSize: '60px', fontWeight: 'bold',fontFamily: "Beatrix Antiqua"  }} >My Assets</Typography>
                </Box>
                <Box className="gallery_list mt-4">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                        className="nav nav-pills  tabs_events gallery_image_list"
                        id="pills-tab"
                        role="tablist"
                       
                    >
                        <Grid item xs={4} md={2} className="nav-item" role="presentation">
                            <Button
                                className="active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                NFTS
                            </Button>
                        </Grid>
                        <Grid item xs={4} md={2}  className="nav-item" role="presentation">
                            <Button
                                // className="ms-3"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                            >
                                COLLECTIONS
                            </Button>
                        </Grid>
                        <Grid item xs={4} md={2} className="nav-item" role="presentation">
                            <Button
                                // className="ms-3"

                                id="pills-land-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-land"
                                type="button"
                                role="tab"
                                aria-controls="pills-land"
                                aria-selected="false"
                            >
                                LANDS
                            </Button>
                        </Grid>
                        <Grid item xs={4} md={2} className="nav-item" role="presentation">
                            <Button
                                // className="ms-3"
                                id="pills-VULCANITES-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-VULCANITES"
                                type="button"
                                role="tab"
                                aria-controls="pills-VULCANITES"
                                aria-selected="false"
                            >
                                VULCANITES
                            </Button>
                        </Grid>
                        <Grid item xs={4} md={2} className="nav-item" role="presentation">
                            <Button
                                // className="ms-3"
                                id="pills-SOW-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-SOW"
                                type="button"
                                role="tab"
                                aria-controls="pills-SOW"
                                aria-selected="false"
                            >
                                SOW SEED
                            </Button>
                        </Grid>
                        <Grid item xs={4} md={2} className="nav-item" role="presentation">
                            <Button
                                // className="ms-3"
                                id="pills-GOD-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-GOD"
                                type="button"
                                role="tab"
                                aria-controls="pills-GOD"
                                aria-selected="false"
                            >
                                GODS
                            </Button>
                        </Grid>



                    </Grid>
                    <Box className="tab-content" id="pills-tabContent">
                        <Box

                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                        >
                            <Box className="gallery_main_container ">
                                <Box>
                                    <Box className='row mt-3 '>
                                        <Box class=" col-lg-3 col-md-6 col-12" >
                                            <Box class="card blur_color border border-light ">
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
                                        <Box class=" col-lg-3 col-md-6 col-12  " >
                                            <Box class="card blur_color border border-light">
                                                <Box class="card-body" style={{ height: '140px' }}>
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold', }} class="card-title">Agors NFTs</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box class=" col-lg-3 col-md-6 col-12" >
                                            <Box class="card blur_color border border-light ">
                                                <Box class="card-body" style={{ height: '140px' }}>
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">Total NFTs</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box class=" col-lg-3 col-md-6 col-12" >
                                            <Box class="card blur_color border border-light ">
                                                <Box class="card-body">
                                                    <Box className='row'>
                                                        <Box className='col-4'> <Avatar style={{ fontSize: '4rem' }} /> </Box>
                                                        <Box className='col-8'>
                                                            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} class="card-title">Total NFTs Sold</Typography>
                                                            <Typography class=" fw-bolder fs-2">0</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        {/* ============================= table ///////////////////////// */}
                                        <Box className='table_head'>
                                            <Box className='row mt-5'>
                                                <Box className='col-4'>
                                                    <Typography style={{ fontSize: '50px', fontWeight: 'bold',fontFamily: "Beatrix Antiqua"  }} class="card-title d-inline">My<Typography className='wallet d-inline' style={{ fontSize: '20px', }}>NFTs</Typography> </Typography>

                                                </Box>
                                                <Box className='col-8'>
                                                    <input type="text" class="form-control shadow-none h-pxl-48 rounded-1 w-75" name="Payment.TwoFactorCode" placeholder="Search" />

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



                                    </Box>


                                </Box>

                            </Box>
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
                                    <h1 className='text-white'>COLLECTIONS</h1>



                                </Box>
                            </Box>
                        </Box>
                        <Box

                            className="tab-pane fade"
                            id="pills-land"
                            role="tabpanel"
                            aria-labelledby="pills-land-tab"
                        >
                           
                                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>LAND</h1>


                                </Box>
                            
                        </Box>
                        {/* == */}
                        <Box

                            className="tab-pane fade"
                            id="pills-VULCANITES"
                            role="tabpanel"
                            aria-labelledby="pills-VULCANITES-tab"
                        >
                            <Box
                                className="tab-pane fade show active"
                                id="pills-VULCANITES"
                                role="tabpanel"
                                aria-labelledby="pills-VULCANITES-tab"
                            >
                                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>VULCANITES</h1>


                                </Box>
                            </Box>

                        </Box>


                        <Box

                            className="tab-pane fade"
                            id="pills-SOW"
                            role="tabpanel"
                            aria-labelledby="pills-SOW-tab"
                        >
                            <Box
                                className="tab-pane fade show active"
                                id="pills-SOW"
                                role="tabpanel"
                                aria-labelledby="pills-SOW-tab"
                            >
                                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>SOW SEED</h1>


                                </Box>
                            </Box>

                        </Box>


                        <Box

                            className="tab-pane fade"
                            id="pills-GOD"
                            role="tabpanel"
                            aria-labelledby="pills-GOD-tab"
                        >
                            <Box
                                className="tab-pane fade show active"
                                id="pills-GOD"
                                role="tabpanel"
                                aria-labelledby="pills-GOD-tab"
                            >
                                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>GODS</h1>


                                </Box>
                            </Box>

                        </Box>


                        <Box

                            className="tab-pane fade"
                            id="pills-BERSERK"
                            role="tabpanel"
                            aria-labelledby="pills-BERSERK-tab"
                        >
                            <Box
                                className="tab-pane fade show active"
                                id="pills-BERSERK"
                                role="tabpanel"
                                aria-labelledby="pills-BERSERK-tab"
                            >
                                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>BERSERK</h1>


                                </Box>
                            </Box>

                        </Box>


                        <Box

                            className="tab-pane fade"
                            id="pills-VAULT"
                            role="tabpanel"
                            aria-labelledby="pills-VAULT-tab"
                        >
                            <Box
                                className="tab-pane fade show active"
                                id="pills-VAULT"
                                role="tabpanel"
                                aria-labelledby="pills-VAULT-tab"
                            >
                                <Box className="gallery_main_container justify-content-center d-flex flex-wrap">

                                    <h1 className='text-white'>VULCANS'VAULT</h1>


                                </Box>
                            </Box>

                        </Box>
                        {/* == */}
                    </Box>
                </Box>




            </Box>


        </>
    )
}
