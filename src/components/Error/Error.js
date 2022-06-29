import classes from './Error.module.css';

const Error = ({ errorMessage }) => {
    return (
        <div className={classes.error}>
            <h5>There was an error while loading the data!</h5>
            <h6>Error Message: <strong>{errorMessage}</strong></h6>
        </div>
    );
};

export default Error;