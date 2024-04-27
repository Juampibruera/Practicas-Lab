import PropTypes from "prop-types";

const Table = ({netIncomes}) => {
    const totalIncome = netIncomes.reduce((sum, item) => sum + item.income, 0);
    const averageIncome = (totalIncome/netIncomes.length).toFixed(2);
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
                {netIncomes.map((branch,index)=> (
                    <tr key={index}>
                        <td>{branch.brand}</td>
                        <td>{branch.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>El promedio de ingresos de las marcas es: {averageIncome}</p>
        </>
    );
}
        
Table.propTypes = {
    netIncomes: PropTypes.array
};

export default Table;
