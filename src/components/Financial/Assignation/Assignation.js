import { useState } from "react";
import FinancialTable from "../FinancialTable/FinancialTable";

import classes from './Assignation.module.css';

const Assignation = ({ year }) => {
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

    return (
        <div className={`container ${classes.content}`}>
            <div className="container row d-flex align-items-center">
                <div className="col-md-4">
                    <button className={`btn btn-light ${classes.button}`} onClick={offshoreHandler}>OFFSHORE</button>
                </div>
                <div className="col-md-4">
                    <button className={`btn btn-light ${classes.button}`} onClick={onsiteHandler}>ONSITE</button>
                </div>
                <div className="col-md-4">
                    <button className={`btn btn-light ${classes.button}`} onClick={bothHandler}>BOTH</button>
                </div>
            </div>
            {offshoreTableShow && <FinancialTable assignationName={assignationName} year={year} />}
            {onsiteTableShow && <FinancialTable assignationName={assignationName} year={year} />}
            {bothTableShow && <FinancialTable assignationName={assignationName} year={year} />}
        </div>
    );
};

export default Assignation;