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
      id: 1143155,
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
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tablecell">Listing</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
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
                    <img src={row.img} alt="" className="image" />
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