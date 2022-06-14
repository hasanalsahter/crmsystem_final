export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"DisplayName_Customer", headerName: 'User', width:180, 
        renderCell: (params)=>{
            return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="user" />
            {params.row.DisplayName_Customer}
        </div>
            );
        },
    },
    { field: 'Email_customer', headerName: 'Email', width: 180 },
    { field: 'Customer_representative', headerName: 'Customer Representative', width: 180 },
    { field: 'phone_customer', headerName: 'Phone Customer', width: 120 },
    { field: 'Extra_Info_Customer', headerName: 'Extra Info Customer', width: 120 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];



export const proColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"listings_street", headerName: 'street', width:230, 
        renderCell: (params)=>{
            return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="user" />
            {params.row.listings_street}
        </div>
            );
        },
    },
    { field: 'listings_Bulding', headerName: 'Bulding', width: 150 },
    { field: 'listings_Door_num', headerName: 'Door_num', width: 100 },
    { field: 'listings_city', headerName: 'City', width: 100 },
    { field: 'listings_neighborhood', headerName: 'Neighborhood', width: 100 },
    { field: 'listings_state', headerName: 'state', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];


    

export const Satffcolumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"Staff_name", headerName: 'Name', width:230, 
        renderCell: (params)=>{
            return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="user" />
            {params.row.Staff_name}
        </div>
            );
        },
    },
    { field: 'Staff_Email', headerName: 'Email', width: 230 },
    { field: 'Staff_address', headerName: 'address', width: 100 },
    { field: 'Staff_Rol', headerName: 'Rol', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];


  

export const contractscolums = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customer_name', headerName: 'customer name', width: 230 },
    { field: 'customer_phone', headerName: 'customer phone', width: 100 },
    { field: 'customer_address', headerName: 'customer address', width: 100 },
    { field: 'seller_name', headerName: 'seller name', width: 100 },
    { field: 'seller_Email', headerName: 'seller Email', width: 100 },
    { field: 'sold_price', headerName: 'sold price', width: 100 },
    { field: 'listing_address', headerName: 'listing address', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];















