import classes from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={classes.mainContainer}>
            <h1 className={classes.heading}>ABOUT US</h1>
            <h4 className={classes.content}>
                Good food, good life – that is what we stand for. <br /><br />
                Everything you need to know about Nestle is here: brands, key figures, milestones.
            </h4>
        </div>
    );
};

export default AboutUs;