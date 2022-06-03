import Results from '../../Results';
import classes from './index.module.css';
import commonStyles from '../../styles/common.module.css';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';

function Result(props) {

    const navigate = useNavigate();

    const getTitle = () => Results[props.type].title;

    const getText = () => Results[props.type].text;

    const handleRetakeTest = e => {
        navigate(0);
    }

    const handleShowResults = e => {
        navigate(0);
    }

    return (
        <>
            <div className={classes.result}>
                <h2>Your result</h2>
                <h3>{getTitle()}</h3>
                <div className={classes.resultText}><p>{getText()}</p></div>
            </div>
            <div className={commonStyles.buttonsWrapper}>
                <Button variant='primary' onClick={handleRetakeTest}>Retake test</Button>
                <Button variant='secondary' onClick={handleShowResults}>Show my answers</Button>
            </div>
        </>

    )
}

export default Result;