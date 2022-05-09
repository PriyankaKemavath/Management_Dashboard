const TableData = () => {
    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Column 1</th>
                    <th scope="col">Column 2</th>
                    <th scope="col">Column 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Row 2</td>
                    <td>Row 2</td>
                    <td>Row 2</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Row 3</td>
                    <td>Row 3</td>
                    <td>Row 3</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableData;