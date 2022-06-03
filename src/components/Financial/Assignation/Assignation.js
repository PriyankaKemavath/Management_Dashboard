import { useState } from "react";
import FinancialTable from "../FinancialTable/FinancialTable";

import classes from './Assignation.module.css';

const Assignation = ({ selectedTracks, selectedSubTracks, selectedYear, selectedQuarter, selectedMonth }) => {
    const [assignationName, setAssignationName] = useState();
    const [offshoreTableShow, setOffshoreTableShow] = useState(false);
    const [onsiteTableShow, setOnsiteTableShow] = useState(false);
    const [bothTableShow, setBothTableShow] = useState(false);

    const offshoreHandler = () => {
        setAssignationName("Offshore");
        setOffshoreTableShow(true);
        setOnsiteTableShow(false);
        setBothTableShow(false);
    };

    const onsiteHandler = () => {
        setAssignationName("Onsite");
        setOnsiteTableShow(true);
        setOffshoreTableShow(false);
        setBothTableShow(false);
    };

    const bothHandler = () => {
        setAssignationName("Offshore & Onsite");
        setBothTableShow(true);
        setOffshoreTableShow(false);
        setOnsiteTableShow(false);
    };

    const financialData = (
        <FinancialTable
            selectedTracks={selectedTracks}
            selectedSubTracks={selectedSubTracks}    
            assignationName={assignationName} 
            selectedYear={selectedYear} 
            selectedQuarter={selectedQuarter}
            selectedMonth={selectedMonth}
            offshoreTableShow={offshoreTableShow} 
            onsiteTableShow={onsiteTableShow} 
            bothTableShow={bothTableShow} 
        />
    );

    return (
        <div className={`container ${classes.content}`}>
            <div className="container row d-flex align-items-center">
                <div className="col-md-12">
                    <div className="btn-group">
                        <button 
                            className={`btn btn-light ${classes.button} ${offshoreTableShow && classes.active}`} 
                            onClick={offshoreHandler}
                        >
                            OFFSHORE
                        </button>
                        <button 
                            className={`btn btn-light ${classes.button} ${onsiteTableShow && classes.active}`} 
                            onClick={onsiteHandler}
                        >
                            ONSITE
                        </button>
                        <button 
                            className={`btn btn-light ${classes.button} ${bothTableShow && classes.active}`} 
                            onClick={bothHandler}
                        >
                            BOTH
                        </button>
                    </div>
                </div>
            </div>
            {offshoreTableShow && financialData}
            {onsiteTableShow && financialData}
            {bothTableShow && financialData}
        </div>
    );
};

export default Assignation;