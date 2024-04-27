import React from 'react';
import Table from "./components/table/Table"

function MyApp() {
  const ingresosNetos = [
    {marca: "McDonalds", ingreso: 1291283}, 
    {marca: "Burger King", ingreso: 1927361}, 
    {marca: "KFC", ingreso: 1098463}
  ];

  return (
    <div>
      <Table ingresosNetos={ingresosNetos} />
    </div>
  );
}

export default MyApp;
