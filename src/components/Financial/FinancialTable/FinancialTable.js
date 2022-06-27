import { useState, useEffect } from 'react';
import { getResourceDetails } from '../../../fetchers/getFetchers';
import ResourceModal from '../Resource/ResourceModal';

import classes from './FinancialTable.module.css';

const FinancialTable = (props) => {
    const { selectedTracks, selectedSubTracks, assignationName, selectedYear, selectedQuarter, selectedMonth, offshoreTableShow, onsiteTableShow, bothTableShow } = props;
    
    const [resourceShow, setResourceShow] = useState(false);
    /* const [isDataSelected, setIsDataSelected] = useState(false);
    const [financialData, setFinancialData] = useState();
 */
    const currentYear = selectedYear.slice(2,4);
    const financialYear = selectedYear.slice(2,7);

    const [data, setData] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResourceDetails()
      .then(responseData => {
        let filteredTracks = [], filteredSubTracks = [], filteredYears = [], filteredQuarters = [], filteredMonths = [];
        if(selectedTracks !== undefined) {
          for(let i=0; i<selectedTracks.length; i++) {
            responseData.map((obj) => {
              (obj.employee_group === selectedTracks[i]) && filteredTracks.push(obj)
            })
          }

          for(let j=0; j<selectedSubTracks.length; j++) {
            filteredTracks.map((obj) => {
              (obj.employee_subgrp === selectedSubTracks[j]) && filteredSubTracks.push(obj)
            })
          }
        } else {
          for(let k=0; k<selectedSubTracks.length; k++) {
            responseData.map((obj) => {
              (obj.employee_subgrp === selectedSubTracks[k]) && filteredSubTracks.push(obj)
            })
          }
        }

        filteredYears = filteredSubTracks.filter((obj) => obj.FY === selectedYear);

        if(selectedQuarter !== undefined && selectedQuarter !== "" && selectedQuarter !== "Select") {
          filteredQuarters = filteredYears.filter((obj) => obj.quarter.slice(0,3) === selectedQuarter.slice(5,8));
          setData(filteredQuarters);
        } else if(selectedMonth !== undefined && selectedMonth !== "" && selectedMonth !== "Select") {
          filteredMonths = filteredYears.filter((obj) => obj.month.slice(2,5) === selectedMonth);
          setData(filteredMonths);
        } else {
          setData(filteredYears);
        }
      })
      .catch(error => console.log(error));
  }, [selectedTracks, selectedSubTracks, selectedYear, selectedQuarter, selectedMonth]);

  useEffect(() => {
    if(offshoreTableShow) {
      let offshoreData = data.filter((resource) => resource.component === "Offshore");
      setResources(offshoreData);
    }
    if(onsiteTableShow) {
      let onsiteData = data.filter((resource) => resource.component === "Onsite");
      setResources(onsiteData);
    }
    if(bothTableShow) {
      setResources(data);
    }
  }, [data, offshoreTableShow, onsiteTableShow, bothTableShow]);

    const checkResourceHandler = () => {
        setResourceShow(true);
    };

    const resourceCloseHandler = () => {
        setResourceShow(false);
    };

/*     const getFinancialData = (financials) => {
        console.log("Data from child: ", financials, resources);
        setIsDataSelected(true);
        setFinancialData(financials);
    }; */

    //console.log("Resources: ", resources);

    return (
        <div className={`container row ${classes['table-data']}`}>
            <div className="col-md-12">
                <h5 className={classes.title}>{assignationName} Financials: FY {selectedYear}</h5>
                <a className={classes.link} onClick={checkResourceHandler}>Check Resource</a>
                <ResourceModal 
                    /* resourceShow={resourceShow} 
                    resourceCloseHandler={resourceCloseHandler}
                    selectedTracks={selectedTracks}
                    selectedSubTracks={selectedSubTracks}
                    selectedYear={selectedYear}
                    selectedQuarter={selectedQuarter}
                    selectedMonth={selectedMonth} 
                    offshoreTableShow={offshoreTableShow} 
                    onsiteTableShow={onsiteTableShow} 
                    bothTableShow={bothTableShow}  */
                    resourceShow={resourceShow}
                    resourceCloseHandler={resourceCloseHandler}
                    offshoreTableShow={offshoreTableShow} 
                    onsiteTableShow={onsiteTableShow}
                    resources={resources}
                    /* sendFinancialData={getFinancialData} */
                />
                {/* {resources.map((obj) => (
                    <p key={obj.employee_id}>{obj.employee}</p>
                ))} */}
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