import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';


const TOTAL_QUESTIONS = 14;

test("renders the header", () => {

    render(<Router><App /></Router>);

    screen.getByText("Let's take this quiz...");

});

test("renders workflow correctly", () => {

    render(<Router><App /></Router>);
    
    // Last question which will enable finishing the test
    const answerRadio = screen.getAllByRole('radio')[0];
    expect(answerRadio).toBeInTheDocument();
    fireEvent.click(answerRadio)

    // Finish test
    const buttonFinishTest = screen.getByText(/finish test/i);
    expect(buttonFinishTest).toBeEnabled();
    fireEvent.click(buttonFinishTest);

    // Finally, the result should be displayed
    screen.getByText(/Your result/i);

    screen.getByText(/You are more of an introvert/i);

});

