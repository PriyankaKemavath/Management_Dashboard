import { useState, useEffect, Fragment } from 'react';
import { getResourceDetails } from '../../../fetchers/getFetchers';
import ResourceModal from '../Resource/ResourceModal';
import PeriodicTable from './PeriodicTable';
import NoRecordFound from './NoRecordFound';
import TotalQuarter from './TotalQuarter';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';

import classes from './FinancialTable.module.css';

const FinancialTable = (props) => {
    const { selectedTracks, selectedSubTracks, assignationName, selectedYear, selectedQuarter, selectedMonth, offshoreTableShow, onsiteTableShow, bothTableShow } = props;
    
    const startingYear = selectedYear.slice(2,4);
    const endingYear = selectedYear.slice(5,7);
    
    const [resourceShow, setResourceShow] = useState(false);
    const [data, setData] = useState([]);
    const [resources, setResources] = useState([]);
    const [quarters, setQuarters] = useState({
        q1: [], q2: [], q3: [], q4: []
    });
    const [months, setMonths] = useState({
        m1: [], m2: [], m3: [], m4: [], m5: [], m6: [], m7: [], m8: [], m9: [], m10: [], m11: [], m12: []
    });
    const [annualRevenue, setAnnualRevenue] = useState();
    const [annualCost, setAnnualCost] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
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
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        });
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
        };
    }, [data, offshoreTableShow, onsiteTableShow, bothTableShow]);

    useEffect(() => {
        setQuarters({
            q1: resources.filter((obj) => obj.quarter.slice(0,3) === "AMJ"),
            q2: resources.filter((obj) => obj.quarter.slice(0,3) === "JAS"),
            q3: resources.filter((obj) => obj.quarter.slice(0,3) === "OND"),
            q4: resources.filter((obj) => obj.quarter.slice(0,3) === "JFM")
        });

        setMonths({
            m1: resources.filter((obj) => obj.month.slice(2,5) === "JAN"),
            m2: resources.filter((obj) => obj.month.slice(2,5) === "FEB"),
            m3: resources.filter((obj) => obj.month.slice(2,5) === "MAR"),
            m4: resources.filter((obj) => obj.month.slice(2,5) === "APR"),
            m5: resources.filter((obj) => obj.month.slice(2,5) === "MAY"),
            m6: resources.filter((obj) => obj.month.slice(2,5) === "JUN"),
            m7: resources.filter((obj) => obj.month.slice(2,5) === "JUL"),
            m8: resources.filter((obj) => obj.month.slice(2,5) === "AUG"),
            m9: resources.filter((obj) => obj.month.slice(2,5) === "SEP"),
            m10: resources.filter((obj) => obj.month.slice(2,5) === "OCT"),
            m11: resources.filter((obj) => obj.month.slice(2,5) === "NOV"),
            m12: resources.filter((obj) => obj.month.slice(2,5) === "DEC")
        });

        let totalRevenue = 0, totalCost = 0;
        for(let i=0; i<resources.length; i++) {
            totalRevenue += resources[i].revenue;
            totalCost += resources[i].total_cost; 
        }
        setAnnualRevenue(totalRevenue);
        setAnnualCost(totalCost);

    }, [resources]);

    const checkResourceHandler = () => {
        setResourceShow(true);
    };

    const resourceCloseHandler = () => {
        setResourceShow(false);
    };

    const tableHeading = (
        <Fragment>
            <th scope="col">Revenue</th>
            <th scope="col">Cost</th>
            <th scope="col">GM</th>
            <th scope="col">GM%</th>
        </Fragment>
    );

    if (error || !Array.isArray(data)) {
        return <Error errorMessage={error} />;
    }

    return (
        <div className={`container row ${classes['table-data']}`}>
            <div className="col-md-12">
                <h5 className={classes.title}>{assignationName} Financials: FY {selectedYear}</h5>
                {isLoading ?
                    <Loading />
                :
                <Fragment>
                    <a className={classes.link} onClick={checkResourceHandler}>Check Resource</a>
                    <ResourceModal 
                        resourceShow={resourceShow}
                        resourceCloseHandler={resourceCloseHandler}
                        offshoreTableShow={offshoreTableShow} 
                        onsiteTableShow={onsiteTableShow}
                        resources={resources}
                    />
                    {selectedYear && selectedQuarter && selectedQuarter !== "Select" ? 
                        <table className={`table table-sm table-bordered table-striped ${classes['table-bordered']}`}>
                            <thead>
                                <tr className={classes['main-heading']}>
                                    <th colSpan="5">{selectedQuarter}'{selectedQuarter.slice(5,8) === "JFM" ? endingYear : startingYear}</th>
                                </tr>
                                <tr className={classes.heading}>
                                    <th scope="col">Date</th>
                                    {tableHeading}
                                </tr>
                            </thead>
                            {selectedQuarter.slice(5,8) === "AMJ" && ( quarters.q1.length !== 0 ? <PeriodicTable periodicData={quarters.q1} /> : <NoRecordFound /> )}
                            {selectedQuarter.slice(5,8) === "JAS" && ( quarters.q2.length !== 0 ? <PeriodicTable periodicData={quarters.q2} /> : <NoRecordFound /> )}
                            {selectedQuarter.slice(5,8) === "OND" && ( quarters.q3.length !== 0 ? <PeriodicTable periodicData={quarters.q3} /> : <NoRecordFound /> )}
                            {selectedQuarter.slice(5,8) === "JFM" && ( quarters.q4.length !== 0 ? <PeriodicTable periodicData={quarters.q4} /> : <NoRecordFound /> )}
                        </table> 
                    : 
                        selectedYear && selectedMonth && selectedMonth !== "Select" ? 
                            <table className={`table table-sm table-bordered table-striped ${classes['table-bordered']}`}>
                                <thead>
                                    <tr className={classes['main-heading']}>
                                        <th colSpan="5">
                                            {selectedMonth}'
                                            {(selectedMonth === "JAN" || selectedMonth === "FEB" || selectedMonth === "MAR") ? endingYear : startingYear}
                                        </th>
                                    </tr>
                                    <tr className={classes.heading}>
                                        <th scope="col">Date</th>
                                        {tableHeading}
                                    </tr>
                                </thead>
                                {selectedMonth === "JAN" && ( months.m1.length !== 0 ? <PeriodicTable periodicData={months.m1} /> : <NoRecordFound /> )}
                                {selectedMonth === "FEB" && ( months.m2.length !== 0 ? <PeriodicTable periodicData={months.m2} /> : <NoRecordFound /> )}
                                {selectedMonth === "MAR" && ( months.m3.length !== 0 ? <PeriodicTable periodicData={months.m3} /> : <NoRecordFound /> )}
                                {selectedMonth === "APR" && ( months.m4.length !== 0 ? <PeriodicTable periodicData={months.m4} /> : <NoRecordFound /> )}
                                {selectedMonth === "MAY" && ( months.m5.length !== 0 ? <PeriodicTable periodicData={months.m5} /> : <NoRecordFound /> )}
                                {selectedMonth === "JUN" && ( months.m6.length !== 0 ? <PeriodicTable periodicData={months.m6} /> : <NoRecordFound /> )}
                                {selectedMonth === "JUL" && ( months.m7.length !== 0 ? <PeriodicTable periodicData={months.m7} /> : <NoRecordFound /> )}
                                {selectedMonth === "AUG" && ( months.m8.length !== 0 ? <PeriodicTable periodicData={months.m8} /> : <NoRecordFound /> )}
                                {selectedMonth === "SEP" && ( months.m9.length !== 0 ? <PeriodicTable periodicData={months.m9} /> : <NoRecordFound /> )}
                                {selectedMonth === "OCT" && ( months.m10.length !== 0 ? <PeriodicTable periodicData={months.m10} /> : <NoRecordFound /> )}
                                {selectedMonth === "NOV" && ( months.m11.length !== 0 ? <PeriodicTable periodicData={months.m11} /> : <NoRecordFound /> )}
                                {selectedMonth === "DEC" && ( months.m12.length !== 0 ? <PeriodicTable periodicData={months.m12} /> : <NoRecordFound /> )}
                            </table>
                        :
                        <table className={`table table-sm table-bordered table-striped ${classes['table-bordered']}`}>
                            <thead>
                                <tr className={classes['main-heading']}>
                                    <th colSpan="5">AMJ'{startingYear}</th>
                                </tr>
                                <tr className={classes.heading}>
                                    <th></th>
                                    {tableHeading}
                                </tr>
                            </thead>
                            <TotalQuarter quarterData={quarters.q1} />
                            <thead>
                                <tr className={classes['main-heading']}>
                                    <th colSpan="5">JAS'{startingYear}</th>
                                </tr>
                                <tr className={classes.heading}>
                                    <th></th>
                                    {tableHeading}
                                </tr>
                            </thead>
                            <TotalQuarter quarterData={quarters.q2} />
                            <thead>
                                <tr className={classes['main-heading']}>
                                    <th colSpan="5">OND'{startingYear}</th>
                                </tr>
                                <tr className={classes.heading}>
                                    <th></th>
                                    {tableHeading}
                                </tr>
                            </thead>
                            <TotalQuarter quarterData={quarters.q3} />
                            <thead>
                                <tr className={classes['main-heading']}>
                                    <th colSpan="5">JFM'{endingYear}</th>
                                </tr>
                                <tr className={classes.heading}>
                                    <th></th>
                                    {tableHeading}
                                </tr>
                            </thead>
                            <TotalQuarter quarterData={quarters.q4} />
                            <thead>
                                <tr className={classes['main-heading']}>
                                    <th colSpan="5">FY {selectedYear}</th>
                                </tr>
                                <tr className={classes.heading}>
                                    <th></th>
                                    {tableHeading}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-secondary">
                                    <th>Forecasted</th>
                                    <th>{isNaN(annualRevenue) ? "-" : `$ ${annualRevenue}`}</th>
                                    <td>{isNaN(annualCost) ? "-" : `$ ${annualCost}`}</td>
                                    <td>
                                        {
                                            (annualRevenue === 0 || annualCost === 0) ? "NA" : 
                                                (isNaN(annualRevenue) || isNaN(annualCost)) ? "-" : `$ ${annualRevenue - annualCost}`
                                        }
                                    </td>
                                    <th>
                                        {
                                            (annualRevenue === 0 || annualCost === 0) ? "NA" : 
                                                (isNaN(annualRevenue) || isNaN(annualCost)) ? "-" : `${Math.round(((annualRevenue - annualCost)/annualRevenue)*100)}%`
                                        }
                                    </th>
                                </tr>
                                <tr className="table-secondary">
                                    <th>Actuals</th>
                                    <th>{isNaN(annualRevenue) ? "-" : `$ ${annualRevenue}`}</th>
                                    <td>{isNaN(annualCost) ? "-" : `$ ${annualCost}`}</td>
                                    <td>
                                        {
                                            (annualRevenue === 0 || annualCost === 0) ? "NA" : 
                                                (isNaN(annualRevenue) || isNaN(annualCost)) ? "-" : `$ ${annualRevenue - annualCost}`
                                        }
                                    </td>
                                    <th>
                                        {
                                            (annualRevenue === 0 || annualCost === 0) ? "NA" : 
                                                (isNaN(annualRevenue) || isNaN(annualCost)) ? "-" : `${Math.round(((annualRevenue - annualCost)/annualRevenue)*100)}%`
                                        }
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    }
                </Fragment>
            }
            </div>
        </div>
    );
};

export default FinancialTable;