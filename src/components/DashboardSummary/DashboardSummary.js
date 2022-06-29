import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectDetails } from '../../fetchers/getFetchers';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

import classes from './DashboardSummary.module.css';

const DashboardSummary = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        getProjectDetails().then((responseData) => {
            setData(responseData);
            const filteredTracks = responseData.map(obj =>  obj.track)
                .filter((item, index, arr) =>  arr.indexOf(item) === index);
            setTracks(filteredTracks);
            setIsLoading(false);
        }).catch((error) => {
            console.log("Error: ", error);
            setError(error.message);
        });
    }, []);

    if(error || !Array.isArray(data)) {
        return <Error errorMessage={error} />;
    }

    return (
        <div className={classes.mainContainer}>
            <h1 className={classes.heading}>NESTLE TRACKS</h1>
            {isLoading && <Loading />}
            <div className="row">
                <table className="table">
                    {tracks.map((track, index) => (
                        <Fragment key={index}>
                            <thead>
                                <tr>
                                    <th colSpan="5" className='border-top-0 p-0'>
                                        <div className="card">
                                            <div className="card-header">
                                                <Link className={classes.link} to={`/financial/${track}`}>
                                                    <h3>{track}</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="table-primary">
                                    <th>Sub Track</th>
                                    <th>Project</th>
                                    <th>Month</th>
                                    <th>Cost Revenue</th>
                                    <th>GM %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((obj, index) => {
                                    if(obj.track === track) {
                                        return (
                                            <tr key={index}>
                                                <td>{obj.sub_track}</td>
                                                <td>{obj.project}</td>
                                                <td>{obj.month}</td>
                                                <td>
                                                    <div className="progress">
                                                        <div 
                                                            className="progress-bar progress-bar-striped progress-bar-animated" 
                                                            role="progressbar" 
                                                            aria-valuenow={Math.round(((obj.cost)/obj.revenue)*100)}
                                                            aria-valuemin="0" 
                                                            aria-valuemax="100" 
                                                            style={{width: `${Math.round(((obj.cost)/obj.revenue)*100)}%`}}
                                                        >
                                                            <span data-toggle="tooltip" data-placement="top" title={obj.cost}>{obj.cost}</span>
                                                        </div>  
                                                        <span className="d-flex align-items-center ml-2">{obj.revenue}</span> 
                                                    </div>
                                                </td>
                                                <td>{Math.round(((obj.revenue - obj.cost)/obj.revenue)*100)}%</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </Fragment>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default DashboardSummary;