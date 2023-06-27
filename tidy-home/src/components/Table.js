function Table({ tableConfig }) {

    const { name, columnHeaders, rowAction, rowData } = tableConfig;

    const tableColumnHeaders = columnHeaders.map(heading => {
        return (
            <tr key={`${name}-${heading}`}>
                <th style={Heading}>{heading}</th>
            </tr>
        );
    });


    const tableRows = rowData.map(row => {
        return (
            <tr style={TableRow} key={row.id}>
                <td>{row.name}</td>
                {rowAction.map(action => {
                    return (
                        <td style={ActionsContainer} key={`${row.id}-${action.actionName}`}>
                            <button style={ActionButton} onClick={() => action.actionCallback(row.id)}>
                                {action.actionName}
                            </button>
                        </td>
                    );
                })}
            </tr>
        );
    });

    return (
        <>
            <table style={TableStyles}>
                <thead>
                    {tableColumnHeaders}
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </>
    );
}

export default Table;

// styles
const ActionButton = {
    background: 'none',
    border: 'none',
    color: 'rgb(164,20,63)',
    fontWeight: '900',
    textTransform: 'uppercase'
};
const ActionsContainer = { textAlign: 'center' };
const Heading = { textAlign: 'left' };
const TableStyles = { borderCollapse: 'collapse', margin: '0 auto', minWidth: '100%' };
const TableRow = { borderBottom: '1px solid #FFF', height: '50px' };