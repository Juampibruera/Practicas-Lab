import React from "react";
import PropTypes from "prop-types";

const MyTable = ({ingresosNetos}) => {
    const totalIngreso = ingresosNetos.reduce((sum, item) => sum + item.ingreso, 0);
    const promedioIngreso = (totalIngreso/ingresosNetos.length).toFixed(2);
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </tr>
            </thead>
            <tbody>
                {ingresosNetos.map((branch,index)=> (
                    <tr key={index}>
                        <td>{branch.marca}</td>
                        <td>{branch.ingreso}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>El promedio de ingresos de las marcas es: {promedioIngreso}</p>
        </>
    );
}
        
MyTable.propTypes = {
    ingresosNetos: PropTypes.array
};

export default MyTable;
