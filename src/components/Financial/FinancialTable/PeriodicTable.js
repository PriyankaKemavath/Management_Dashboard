import { Fragment } from 'react';

const PeriodicTable = ({ periodicData }) => {
    return (
        <Fragment>
            {periodicData.map((obj, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{obj.month}</td>
                        <th>{isNaN(obj.revenue) ? "-" : `$ ${obj.revenue}`}</th>
                        <td>{isNaN(obj.total_cost) ? "-" : `$ ${obj.total_cost}`}</td>                         
                        <td>
                            {
                                (obj.revenue === 0 || obj.total_cost === 0) ? "NA" :  
                                    (isNaN(obj.revenue) || isNaN(obj.total_cost)) ? "-" : `$ ${obj.revenue - obj.total_cost}`
                            }
                        </td>
                        <td>
                            {
                                (obj.revenue === 0 || obj.total_cost === 0) ? "NA" :  
                                    (isNaN(obj.revenue) || isNaN(obj.total_cost)) ? "-" : `${Math.round(((obj.revenue - obj.total_cost)/obj.revenue)*100)}%`
                            } 
                        </td>
                    </tr>
                </tbody>
            ))}
        </Fragment>
    );
};

export default PeriodicTable;