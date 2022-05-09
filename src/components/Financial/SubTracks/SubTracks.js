import { useState } from "react";
import Assignation from "../Assignation/Assignation";

import classes from './SubTracks.module.css';

const SubTracks = ({ showTitle }) => {
    const [aoYearsShow, setAoYearsShow] = useState(false);
    const [adYearsShow, setAdYearsShow] = useState(false);
    const [selectedYear, setSelectedYear] = useState();
    const [assignationShow, setAssignationShow] = useState(false);

    const years = ["2021-22", "2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16", "2014-15", "2013-14", "2012-13", "2011-12"];

    const aoHandler = () => {
        setAoYearsShow(true);
        setAdYearsShow(false);
        setAssignationShow(false);
    };

    const adHandler = () => {
        setAdYearsShow(true);
        setAoYearsShow(false);
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

    const yearsDropdown = (
        <select name="years" onChange={yearHandler}>
            <option value="Select">Select</option>
            {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
            ))}
        </select>
    );

    return (
        <div className="container">
            {showTitle && <h1 className={classes.title}>Financials</h1>}
            <div className={`container ${classes.subtrack}`}>
                <div className="container row d-flex align-items-center">
                    <div className="col-md-6">
                        <button className={`btn btn-info ${classes.button}`} onClick={aoHandler}>AO</button>
                    </div>
                    <div className="col-md-6">
                        <button className={`btn btn-info ${classes.button}`} onClick={adHandler}>AD</button>
                    </div>
                    <div className={`container row ${classes.subtrack}`}>
                        {aoYearsShow && (
                            <div className="col-md-12">
                                <label htmlFor="years">
                                    <strong>AO Periodic View - Years: &nbsp;</strong>
                                </label>
                                {yearsDropdown}
                            </div>
                        )}
                        {adYearsShow && (
                            <div className="col-md-12">
                                <label htmlFor="years">
                                    <strong>AD Periodic View - Years: &nbsp;</strong>
                                </label>
                                {yearsDropdown}
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