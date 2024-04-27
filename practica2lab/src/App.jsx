import Table from './Table';

const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
];

const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
const averageIncome = totalIncome / netIncomes.length;

const App = () => {
    return (
        <div>
            <h1>Tabla de Ingresos Netos por Marca</h1>
            <Table netIncomes={netIncomes} />
            <p>Promedio de ingreso neto: {averageIncome}</p>
        </div>
    );
}

export default App;

