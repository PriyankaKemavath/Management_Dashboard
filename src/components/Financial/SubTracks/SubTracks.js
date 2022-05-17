import { useState } from "react";
import Assignation from "../Assignation/Assignation";

import classes from './SubTracks.module.css';

const SubTracks = ({ showTitle, track }) => {
    const [isAOSelected, setIsAOSelected] = useState(false);
    const [isADSelected, setIsADSelected] = useState(false);
    const [selectedYear, setSelectedYear] = useState();
    const [selectedQuarter, setSelectedQuarter] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [assignationShow, setAssignationShow] = useState(false);

    const years = ["2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16", "2014-15", "2013-14", "2012-13", "2011-12"];
    const quarters = ["Q1 - AMJ", "Q2 - JAS", "Q3 - OND", "Q4 - JFM"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

    const aoHandler = () => {
        setIsAOSelected(!isAOSelected);
        setAssignationShow(false);
    };

    const adHandler = () => {
        setIsADSelected(!isADSelected);
        setAssignationShow(false);
    };

    const yearHandler = (event) => {
        setSelectedYear(event.target.value);
        if(event.target.value === "Select") {
            setAssignationShow(false);
        } else {
            setAssignationShow(true);
        }
    };

    const quarterHandler = (event) => {
        setSelectedQuarter(event.target.value);
        //setSelectedMonth("Select");
        /* if(event.target.value === "Select") {
            setAssignationShow(false);
        } else {
            setAssignationShow(true);
            setSelectedYear("2020-21");
        } */
    };

    const monthHandler = (event) => {
        setSelectedMonth(event.target.value);
        /* if(event.target.value === "Select") {
            setAssignationShow(false);
        } else {
            setAssignationShow(true);
            setSelectedYear("2020-21");
        } */
    };

    const yearsDropdown = (
        <div>
            <select name="years" onChange={yearHandler}>
                <option value="Select">Select</option>
                {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
        </div>
    );
    
    const quarterDropdown = (
        <div>
            <select name="quarter" onChange={quarterHandler}>
                <option value="Select">Select</option>
                {quarters.map((quarter, index) => (
                    <option key={index} value={quarter}>{quarter}</option>
                ))}
            </select>
        </div>
    );

    const monthDropdown = (
        <div>
            <select name="month" onChange={monthHandler}>
                <option value="Select">Select</option>
                {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="container">
            {showTitle && <h1 className={classes.title}>Financials</h1>}
            <div className={`container ${classes.subtrack}`}>
                <div className="container row d-flex align-items-center">
                    <div className="col-md-6">
                        <button className={`btn btn-info ${classes.button} ${isAOSelected && classes.active}`} onClick={aoHandler}>AO</button>
                    </div>
                    <div className="col-md-6">
                        <button className={`btn btn-info ${classes.button} ${isADSelected && classes.active}`} onClick={adHandler} >AD</button>
                    </div>
                    <div className={`container row ${classes.subtrack}`}>
                        {isAOSelected && !isADSelected ? (
                            <div className="row col-md-12">
                                <strong>AO Periodic View - &nbsp;</strong>
                                <div className="col-md-3">
                                    <label htmlFor="years">Yearly: &nbsp;</label>
                                    {yearsDropdown}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="years">Quarterly: &nbsp;</label>
                                    {quarterDropdown}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="years">Monthly: &nbsp;</label>
                                    {monthDropdown}
                                </div>
                            </div>
                        ) :
                        (isADSelected && !isAOSelected) ? (
                            <div className="row col-md-12">
                            <strong>AD Periodic View - &nbsp;</strong>
                            <div className="col-md-3">
                                <label htmlFor="years">Yearly: &nbsp;</label>
                                {yearsDropdown}
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="years">Quarterly: &nbsp;</label>
                                {quarterDropdown}
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="years">Monthly: &nbsp;</label>
                                {monthDropdown}
                            </div>
                        </div>
                        )
                        :
                        (isAOSelected && isADSelected && 
                            <div className="row col-md-12">
                            <strong>AO &amp; AD Periodic View - &nbsp;</strong>
                            <div className="col-md-3">
                                <label htmlFor="years">Yearly: &nbsp;</label>
                                {yearsDropdown}
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="years">Quarterly: &nbsp;</label>
                                {quarterDropdown}
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="years">Monthly: &nbsp;</label>
                                {monthDropdown}
                            </div>
                        </div>
                        )}
                    </div>
                    {assignationShow && <Assignation year={selectedYear} />}
                </div>
            </div>
        </div>
    );
};

export default SubTracks;