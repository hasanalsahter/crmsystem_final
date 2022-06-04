

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"user", headerName: 'User', width:230, 
        renderCell: (params)=>{
            return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="user" />
            {params.row.username}
        </div>
            );
        },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];


//tepm data for testing 
export const userRows = [
{
id:1,
username: "booooo",
img: "https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg",
status:"active",
email:"isnow@gmail.com",
age:42,
},
{
id:2,
username: "jamil lannsiter",
img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
status:"pending",
email:"jamil@gmail.com",
age:35,
},
{
    id:3,
    username: "lannsiter",
    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    status:"pending",
    email:"lannsiter@gmail.com",
    age:30,
    },
{
    id:4,
    username: "lannsiter",
    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    status:"passive",
    email:"lannsiter@gmail.com",
    age:30,
    },
    {
        id:5,
        username: "lannsiter",
        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        status:"passive",
        email:"lannsiter@gmail.com",
        age:30,
        },
        {
            id:6,
            username: "lannsiter",
            img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            status:"passive",
            email:"lannsiter@gmail.com",
            age:30,
            },
            {
                id:7,
                username: "lannsiter",
                img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                status:"passive",
                email:"lannsiter@gmail.com",
                age:30,
                },
                {
                    id:8,
                    username: "lannsiter",
                    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    status:"passive",
                    email:"lannsiter@gmail.com",
                    age:30,
                    },
                    {
                        id:9,
                        username: "lannsiter",
                        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        status:"passive",
                        email:"lannsiter@gmail.com",
                        age:30,
                        },
                        {
                            id:10,
                            username: "lannsiter",
                            img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            status:"passive",
                            email:"lannsiter@gmail.com",
                            age:30,
                            },
                            {
                                id:11,
                                username: "lannsiter",
                                img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                                status:"passive",
                                email:"lannsiter@gmail.com",
                                age:30,
                                },
                        
       

                    
                
            
        
    


]


export const proColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"product", headerName: 'product', width:230, 
        renderCell: (params)=>{
            return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="user" />
            {params.row.username}
        </div>
            );
        },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];




export const proRows = [
    {
    id:1,
    username: "proowdlaaaaaaaaawhlashdlkasdlkhasklhdaoooo",
    img: "https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg",
    status:"active",
    email:"isnow@gmail.com",
    age:428979878,
    },
    {
    id:2,
    username: "jamil lannsiter",
    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    status:"pending",
    email:"jamil@gmail.com",
    age:35,
    },
    {
        id:3,
        username: "lannsiter",
        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        status:"pending",
        email:"lannsiter@gmail.com",
        age:30,
        },
    {
        id:4,
        username: "lannsiter",
        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        status:"passive",
        email:"lannsiter@gmail.com",
        age:30,
        },
        {
            id:5,
            username: "lannsiter",
            img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            status:"passive",
            email:"lannsiter@gmail.com",
            age:30,
            },
            {
                id:6,
                username: "lannsiter",
                img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                status:"passive",
                email:"lannsiter@gmail.com",
                age:30,
                },
                {
                    id:7,
                    username: "lannsiter",
                    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    status:"passive",
                    email:"lannsiter@gmail.com",
                    age:30,
                    },
                    {
                        id:8,
                        username: "lannsiter",
                        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        status:"passive",
                        email:"lannsiter@gmail.com",
                        age:30,
                        },
                        {
                            id:9,
                            username: "lannsiter",
                            img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            status:"passive",
                            email:"lannsiter@gmail.com",
                            age:30,
                            },
                            {
                                id:10,
                                username: "lannsiter",
                                img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                                status:"passive",
                                email:"lannsiter@gmail.com",
                                age:30,
                                },
                                {
                                    id:11,
                                    username: "lannsiter",
                                    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                                    status:"passive",
                                    email:"lannsiter@gmail.com",
                                    age:30,
                                    },
                            
           
    
                        
                    
                
            
        
    
    
    ]





    

export const Satffcolumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"product", headerName: 'product', width:230, 
        renderCell: (params)=>{
            return(
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="user" />
            {params.row.username}
        </div>
            );
        },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
    renderCell:(params)=>{
        return(
            <div className={`CellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        );
    } },
];




export const StaffRows = [
    {
    id:1,
    username: "Staffff",
    img: "https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg",
    status:"active",
    email:"isnow@gmail.com",
    age:428979878,
    },
    {
    id:2,
    username: "jamil lannsiter",
    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    status:"pending",
    email:"jamil@gmail.com",
    age:35,
    },
    {
        id:3,
        username: "lannsiter",
        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        status:"pending",
        email:"lannsiter@gmail.com",
        age:30,
        },
    {
        id:4,
        username: "lannsiter",
        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        status:"passive",
        email:"lannsiter@gmail.com",
        age:30,
        },
        {
            id:5,
            username: "lannsiter",
            img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            status:"passive",
            email:"lannsiter@gmail.com",
            age:30,
            },
            {
                id:6,
                username: "lannsiter",
                img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                status:"passive",
                email:"lannsiter@gmail.com",
                age:30,
                },
                {
                    id:7,
                    username: "lannsiter",
                    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    status:"passive",
                    email:"lannsiter@gmail.com",
                    age:30,
                    },
                    {
                        id:8,
                        username: "lannsiter",
                        img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        status:"passive",
                        email:"lannsiter@gmail.com",
                        age:30,
                        },
                        {
                            id:9,
                            username: "lannsiter",
                            img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            status:"passive",
                            email:"lannsiter@gmail.com",
                            age:30,
                            },
                            {
                                id:10,
                                username: "lannsiter",
                                img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                                status:"passive",
                                email:"lannsiter@gmail.com",
                                age:30,
                                },
                                {
                                    id:11,
                                    username: "lannsiter",
                                    img: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                                    status:"passive",
                                    email:"lannsiter@gmail.com",
                                    age:30,
                                    },
                            
           
    
                        
                    
                
            
        
    
    
    ]



