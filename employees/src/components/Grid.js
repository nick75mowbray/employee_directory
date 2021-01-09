import React from 'react';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';



export default function Grid({userData, name}) {

let userRows = []; 

if (userData){
  
  userRows = userData.map((user, index)=>{
    return pullData(user, index);
  })
  
}  //end of if statement  


function pullData(item, index) {
  const user = {
    id: index, 
    col1: item.name.first, 
    col2: item.name.last,
    col3: item.phone,
    col4: item.email
  };
  return user;
}

const rows: RowsProp = userRows;

const columns: ColDef[] = [
  { field: 'col1', headerName: 'First Name', width: 120 },
  { field: 'col2', headerName: 'Last Name', width: 150 },
  { field: 'col3', headerName: 'Phone', width: 150 },
  { field: 'col4', headerName: 'Email', width: 150 },
];

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}