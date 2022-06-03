import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import ResourceModal from '../Resource/ResourceModal';

import classes from './FinancialTable.module.css';

const FinancialTable = (props) => {
    const { selectedTracks, selectedSubTracks, assignationName, selectedYear, selectedQuarter, selectedMonth, offshoreTableShow, onsiteTableShow, bothTableShow } = props;
    
    const [resourceShow, setResourceShow] = useState(false);

    const currentYear = selectedYear.slice(2,4);
    const financialYear = selectedYear.slice(2,7);

    const checkResourceHandler = () => {
        setResourceShow(true);
    };

    const resourceCloseHandler = () => {
        setResourceShow(false);
    };

    return (
        <div className={`container row ${classes['table-data']}`}>
            <div className="col-md-12">
                <h5 className={classes.title}>{assignationName} Financials: FY {selectedYear}</h5>
                <a className={classes.link} onClick={checkResourceHandler}>Check Resource</a>
                <ResourceModal 
                    resourceShow={resourceShow} 
                    resourceCloseHandler={resourceCloseHandler}
                    selectedTracks={selectedTracks}
                    selectedSubTracks={selectedSubTracks}
                    selectedYear={selectedYear}
                    selectedQuarter={selectedQuarter}
                    selectedMonth={selectedMonth} 
                    offshoreTableShow={offshoreTableShow} 
                    onsiteTableShow={onsiteTableShow} 
                    bothTableShow={bothTableShow} 
                />
                <table className={`table table-sm table-bordered table-striped ${classes['table-bordered']}`}>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="5">AMJ'{currentYear}</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th></th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Forecasted</th>
                            <td>$ 3,800,000</td>
                            <td>$ 3,306,000</td>
                            <td>$ 494,000</td>
                            <td>13%</td>
                        </tr>
                        <tr>
                            <th>Actuals</th>
                            <td>$ 3,800,000</td>
                            <td>$ 3,306,000</td>
                            <td>$ 494,000</td>
                            <td>13%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="5">JAS'{currentYear}</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th></th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Forecasted</th>
                            <td>$ 3,650,000</td>
                            <td>$ 3,306,000</td>
                            <td>$ 584,000</td>
                            <td>16%</td>
                        </tr>
                        <tr>
                            <th>Actuals</th>
                            <td>$ 3,650,000</td>
                            <td>$ 3,306,000</td>
                            <td>$ 584,000</td>
                            <td>16%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="5">OND'{currentYear}</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th></th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Forecasted</th>
                            <td>$3,000,000</td>
                            <td>$2,520,000</td>
                            <td>$480,000</td>
                            <td>16%</td>
                        </tr>
                        <tr>
                            <th>Actuals</th>
                            <td>$3,000,000</td>
                            <td>$2,520,000</td>
                            <td>$480,000</td>
                            <td>16%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="5">JFM'{currentYear}</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th></th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Forecasted</th>
                            <td>$ 2,350,000</td>
                            <td>$ 1,9500,500</td>
                            <td>$ 376,000</td>
                            <td>16%</td>
                        </tr>
                        <tr>
                            <th>Actuals</th>
                            <td>$ 2,350,000</td>
                            <td>$ 1,9500,500</td>
                            <td>$ 376,000</td>
                            <td>16%</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className={classes['main-heading']}>
                            <th colSpan="5">FY {financialYear}</th>
                        </tr>
                        <tr className={classes.heading}>
                            <th></th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Cost</th>
                            <th scope="col">GM</th>
                            <th scope="col">GM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-secondary">
                            <th>Forecasted</th>
                            <th>$ 12,800,000</th>
                            <td>$ 10,738,000</td>
                            <td>$ 2,062,000</td>
                            <th>15%</th>
                        </tr>
                        <tr className="table-secondary">
                            <th>Actuals</th>
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

export default FinancialTable;