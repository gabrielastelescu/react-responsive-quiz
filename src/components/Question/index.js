import classes from './index.module.css';
import commonStyles from '../../styles/common.module.css';
import { useState, useEffect } from 'react';
import Questions from '../../QuestionsBucket';
import helpers from '../../utils/helpers';
import Button from '../Button';

function Question(props) {

    let [currentQuestionId, setCurrentQuestionId] = useState(Questions[0].id)
    let [currentQuestion, setCurrentQuestion] = useState(Questions[0]);
    const [questionAnswerMap, updateQuestionAnswerMap] = useState(new Map());

    useEffect(() => {

        if (currentQuestionId < Questions.length) {
            const question = Questions[currentQuestionId]
            setCurrentQuestion({ ...question })
        }

    }, [currentQuestionId])

    const handlePrevious = () => setCurrentQuestionId(--currentQuestionId);
    const handleNext = () => setCurrentQuestionId(++currentQuestionId);
    const handleFinishTest = () => props.onQuizFinished(helpers.getMostFrequentAnswer(questionAnswerMap));

    const onSelectedQuestionChanged = e => {
        updateQuestionAnswerMap(new Map(questionAnswerMap.set(currentQuestionId, e.target.value)));
    };

    const handleSelectQuestion = key => {
        updateQuestionAnswerMap(new Map(questionAnswerMap.set(currentQuestionId, key)));
    }

    const answers = [];
    if (currentQuestion) {
        for (const [key, value] of Object.entries(currentQuestion.answers)) {
            answers.push(
                <div key={currentQuestion.id + key} onClick={() => handleSelectQuestion(key)} 
                className={`${classes.answers} ${questionAnswerMap.get(currentQuestionId) === key 
                ? classes.answerSelected : ''}`} >
                    <input type="radio"
                        id={key}
                        name={"answer-" + key}
                        onChange={() => handleSelectQuestion(key)}
                        checked={questionAnswerMap.get(currentQuestionId) === key}
                        value={key} />
                    <span className={classes.answerText}>{value}</span>
                </div>
            )
        }
    }

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.question}>
                    <p>Question {currentQuestionId}/{Questions.length}</p>
                    <h3> {currentQuestion.question} </h3>
                </div>
                <div onChange={onSelectedQuestionChanged}>
                    {answers}
                </div>
            </div>
            <div className={commonStyles.buttonsWrapper}>
                <Button
                    onClick={handlePrevious}
                    variant='primary'
                    disabled={currentQuestionId < 2}> Previous question</Button>
                <Button onClick={handleNext}
                    hide={currentQuestionId === Questions.length}
                    variant='secondary'
                    disabled={!questionAnswerMap.get(currentQuestionId)}> Next question</Button>
                <Button
                    onClick={handleFinishTest}
                    hide={currentQuestionId !== Questions.length}
                    variant='secondary'
                    disabled={!questionAnswerMap.get(currentQuestionId)}> Finish test</Button>
            </div>

        </>
    )
}

export default Question;