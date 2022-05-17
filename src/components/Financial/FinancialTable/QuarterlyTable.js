import classes from './FinancialTable.module.css';

const QuarterlyTable = ({ assignationName, quarter }) => {
    /* const currentYear = year.slice(2,4);
    const financialYear = year.slice(2,7); */
    //console.log(quarter);

    return (
        <div className={`container row ${classes['table-data']}`}>
            <div className="col-md-12">
                <h5 className={classes.title}>{assignationName} Financials: {quarter} </h5>
                <table className={`table table-sm table-bordered table-striped ${classes['table-bordered']}`}>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="4">AMJ'</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$ 3,800,000</td>
                            <td>$ 3,306,000</td>
                            <td>$ 494,000</td>
                            <td>13%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="4">JAS'</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$ 3,650,000</td>
                            <td>$ 3,306,000</td>
                            <td>$ 584,000</td>
                            <td>16%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="4">OND'</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$3,000,000</td>
                            <td>$2,520,000</td>
                            <td>$480,000</td>
                            <td>16%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="4">JFM'</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$ 2,350,000</td>
                            <td>$ 1,9500,500</td>
                            <td>$ 376,000</td>
                            <td>16%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="4">FY</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-secondary">
                            <th>$ 12,800,000</th>
                            <td>$ 10,738,000</td>
                            <td>$ 2,062,000</td>
                            <th>15%</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuarterlyTable;