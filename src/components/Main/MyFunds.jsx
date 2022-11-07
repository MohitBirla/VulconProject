import * as React from 'react';
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
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
      "Type": "Pvr Main Wallet To MArket Wallet Pvr",
      "From Address": "0x994986464564",
      "To Address": "0x994986464564",
      "Transaction Id": "0x994986464564545894856148498479454615646464546464468429"
    },
    {
      "Id": "212275",
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
    <div className='top_main'>
      <div className='main'>
        <div className=''>
          <div className='ps-5'>
          <h1  style={{ fontSize: '60px', fontWeight: 'bold' }} >My Funds</h1>
        
        <div className="events_list_tablist gallery_list mt-4">
          <div className='justify-content-center'>
          <ul
            className="nav nav-pills  tabs_events gallery_image_list"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                MANAGE FUNDS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="ms-3"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                MY WALLETS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="ms-3"
                id="pills-wp-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-wp"
                type="button"
                role="tab"
                aria-controls="pills-wp"
                aria-selected="false"
              >
                NFT TRANSFER HISTORY
              </button>
            </li>

          </ul>
          </div>
          </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div

              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="gallery_main_container ">
                <div>
                  <div className='row mt-5'>
                    <div className='col'>
                      <div class="card  blur_color">

                        <div class="card-body blur_color card-main text-white">

                          <h3 style={{fontFamily:'Beatrix Antiqua'}} className='card-title' >Matice Main Wallet </h3>  
                          <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>
                          <div className='d-flex align-items-center pt-4'>
                            <p style={{ color: '#989FAE' }} class=" text-p card-text mt-2">Total Main Wallet Balance</p>
                            <h3 style={{fontFamily:'Beatrix Antiqua'}} className='ms-3 '><span>0 </span>Matice</h3>
                          </div>
                          <div className='bg-white mt-4' style={{ width: '100%', height: '1px' }} ></div>

                          <div class="d-md-flex d-xxl-block d-fhd-flex mt-3">
                            <div style={{ color: '#989FAE' }} class="me-5 mb-2 mb-md-0 mb-xxl-2 mb-fhd-0">
                              Transfer to
                              <h3 style={{fontFamily:'Beatrix Antiqua'}}  class="mb-0 mt-2 text-white">Market Wallet</h3>
                            </div>
                            <form class="row flex-grow-1 gx-1">
                              <div class="col-6 position-relative mb-2 mb-sm-0">
                                <input type="number" id="FromMainPYR" min="1" class="form-control shadow-none h-pxl-48 rounded-1" placeholder="Enter Amount of PYR" />
                                <h6 id="MainMax" type="button" class="p-0 OrangeText shadow-none  bg-transparent border-0 position-absolute end-0 top-0  mt-3 F-size-20 bottom-0 me-3  "> Max </h6>
                              </div>
                              <div class="col-6">
                                <button type="button" id="ConvertMainToMarket" class="BtnBorder py-2 px-2 bg-transparent border-0 " >Transfer</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-5'>
                      <div className='col-4'>
                        <h3 style={{fontFamily:'Beatrix Antiqua'}}  class="card-title">Swapping <span className='wallet'>History</span> </h3>
                      </div> 
                      <div className='col-8 align-items-end bd-highlight justify-content-end'>
                        <input type="text" class="form-control shadow-none  rounded-1 w-75" name="Payment.TwoFactorCode" placeholder="Search" />
                      </div>
                    </div>
                </div>
              </div>
            </div>
           
            <Paper sx={{ width: '100%', overflow: 'hidden',padding:"5px" ,margin:"3% 0 5% 0" , background: "rgba(0, 0, 0, 0.3)"}}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label=" table" sx={{}}>
        <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell className='text-white fw-bold' sx={{background: "#404040",}}
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
                  <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>


            <div

              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="gallery_main_container justify-content-center d-flex flex-wrap">
                  <h1 className='text-white'>MY WALLETS</h1>
                </div>
              </div>
            </div>
            <div

              className="tab-pane fade"
              id="pills-wp"
              role="tabpanel"
              aria-labelledby="pills-wp-tab"
            >
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="gallery_main_container justify-content-center d-flex flex-wrap">

                  <h1 className='text-white'>NFT TRANSFER HISTORY</h1>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}
