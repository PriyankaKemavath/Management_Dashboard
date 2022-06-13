import { Link } from "react-router-dom";

import classes from './DashboardSummary.module.css';

const DashboardSummary = () => {
    return (
       <div className={`${classes.mainContainer}`}>
           <h1 className={classes.heading}>NESTLE TRACKS</h1>
           <div className="row">
               <div className={`col-md-4 pl-0 pr-0 ${classes.section}`}>
                    <div>
                        <div className={classes.center}>
                        <Link className={classes.link} to="/financial/ADI">
                            <h1 className={classes.title}>ADI</h1>
                        </Link>
                        </div>
                        <div className={`row ${classes.options}`}>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.adiButton}`}>AT</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.adiButton}`}>DAPS</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.adiButton}`}>BSI</button>
                            </div>
                        </div>
                        <div className={`row ${classes.options}`}>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.adiButton}`}>A4A</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.adiButton}`}>Markets</button>
                            </div>
                        </div>
                    </div>
               </div>
               <div className={`col-md-4 pl-0 pr-0 ${classes.section}`}>
                    <div>
                        <div className={classes.center}>
                            <Link className={classes.link} to="/financial/MSE">
                                <h1 className={classes.title}>MSE</h1>
                            </Link>
                        </div>
                        <div className={`row ${classes.options}`}>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.mseButton}`}>AO</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.mseButton}`}>AD</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.mseButton}`}>Markets</button>
                            </div>
                        </div>
                    </div>
               </div>
               <div className={`col-md-4 pl-0 pr-0 ${classes.section}`}>
                   <div>
                        <div className={classes.center}>
                            <Link className={classes.link} to="/financial/CFS">
                                <h1 className={classes.title}>CFS</h1>
                            </Link>
                        </div>
                        <div className={`row ${classes.options}`}>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.cfsButton}`}>AO</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.cfsButton}`}>AD</button>
                            </div>
                            <div className='col-md-4'>
                                <button className={`btn ${classes.cfsButton}`}>Markets</button>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </div>
    );
};

export default DashboardSummary;