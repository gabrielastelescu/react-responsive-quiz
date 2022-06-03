import Question from '../../components/Question';
import hero from '../../assets/hero.jpg';
import classes from './index.module.css';
import Result from '../Result';
import { useState } from 'react';

function Quiz() {

    let [quizResult, setQuizResult] = useState();
    const finishQuizHandler = (value) => setQuizResult(value);

    return (
        <div className={classes.quiz}>
            <main>
                <div>
                    <article>
                        <header>
                            <h1>Are you an <span className={classes.pop}>introvert </span> or an <span className={`${classes.pop}  ${classes.withDelay}`}>extrovert</span>?</h1>
                            <p>Let's take this quiz...</p>
                        </header>
                        <section>
                            <img alt="not found" src={hero} />
                            {!quizResult && <Question onQuizFinished={finishQuizHandler} />}
                            {quizResult && <Result type={quizResult} />}
                        </section>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default Quiz