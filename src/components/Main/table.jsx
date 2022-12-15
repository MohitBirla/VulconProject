import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'


const columns = [
    { 
      id: 'Id',
      label: 'Id',
      minWidth: 100 
    },
    { 
      id: 'Type',
      label: 'Type', 
      minWidth: 100 
    },
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
export default function DataTable() {
   
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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box>
         <Paper className='table_data' sx={{ width: '100%', padding: "5px", margin: "3% 0 5% 0", }}>
                <TableContainer sx={{ maxHeight: 400 }}>
                  <Table stickyHeader aria-label=" table" sx={{}}>
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell className='text-white fw-bold' sx={{ background: "#073F59", }}
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
  )
}
