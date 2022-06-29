import { Fragment } from 'react';

const TotalQuarter = ({ quarterData }) => {
    let totalRevenue = 0, totalCost = 0;

    if(quarterData.length !== 0) {
        for(let i=0; i<quarterData.length; i++) {
            totalRevenue += quarterData[i].revenue;
            totalCost += quarterData[i].total_cost;
        }
    }

    let grossMargin = totalRevenue - totalCost;
    let grossMarginPercentage = Math.round(((totalRevenue - totalCost)/totalRevenue)*100);

    return (
        <Fragment>
            <tbody>
                <tr>
                    <th>Forecasted</th>
                    <td>{isNaN(totalRevenue) ? "-" : `$ ${totalRevenue}`}</td>
                    <td>{isNaN(totalCost) ? "-" : `$ ${totalCost}`}</td>
                    <td>
                        {
                            (totalRevenue === 0 && totalCost === 0) ? "NA" :  (isNaN(totalRevenue) || isNaN(totalCost)) ? 
                                "-" : `$ ${grossMargin}`
                        }
                    </td>
                    <td>
                        {
                            (totalRevenue === 0 && totalCost === 0) ? "NA" : (isNaN(totalRevenue) || isNaN(totalCost)) ? 
                                "-" : `${grossMarginPercentage}%`
                        }
                    </td>
                </tr>
                <tr>
                    <th>Actuals</th>
                    <td>{isNaN(totalRevenue) ? "-" : `$ ${totalRevenue}`}</td>
                    <td>{isNaN(totalCost) ? "-" : `$ ${totalCost}`}</td>
                    <td>
                        {
                            (totalRevenue === 0 || totalCost === 0) ? "NA" :  (isNaN(totalRevenue) || isNaN(totalCost)) ? 
                                "-" : `$ ${grossMargin}`
                        }
                    </td>
                    <td>
                        {
                            (totalRevenue === 0 || totalCost === 0) ? "NA" : (isNaN(totalRevenue) || isNaN(totalCost)) ? 
                                "-" : `${grossMarginPercentage}%`
                        }
                    </td>
                </tr>
            </tbody>
        </Fragment>
    );
};

export default TotalQuarter;