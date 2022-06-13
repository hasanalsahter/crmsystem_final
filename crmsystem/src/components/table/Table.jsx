import"./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List=()=>{

  const rows= [
    {
      id: "i5VAm1XaAg8NbIB2wD9f",
      Listing: "Acer Nitro 5",
      img:"https://istanbulapartmentsforsale.com/wp-content/uploads//2019/07/old-Istanbul-house-for-sale-1.jpeg",
      customer:"John Smith",
      date:"1 March",
      amount:785,
      method:"Cach on Delivery",
      status: "Approved",
    },
    {
      id: 1143154,
      Listing: "Acer Nitro 5",
      img:"https://istanbulapartmentsforsale.com/wp-content/uploads//2019/07/old-Istanbul-house-for-sale-1.jpeg",
      customer:"hasan alshater",
      date:"5 March",
      amount:100,
      method:"Cach on Delivery",
      status: "Pending",
    },
    
  ];



  return(
<TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">cuatomer id</TableCell>
          <TableCell className="tablecell">custoer name</TableCell>
          <TableCell className="tableCell">customer phone</TableCell>
          <TableCell className="tableCell">seller adress</TableCell>
          <TableCell className="tableCell">seller name</TableCell>
          <TableCell className="tableCell">seller Email</TableCell>
          <TableCell className="tableCell">listing address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              
              <TableCell className="tableCell">
                  <div className="cellWrapper">
                    {row.Listing}
                  </div>
              </TableCell>

              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className= {`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 )
};

export default List;