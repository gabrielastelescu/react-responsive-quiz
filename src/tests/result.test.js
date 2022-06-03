import { render, screen } from '@testing-library/react';
import Result from '../pages/Result';
import { BrowserRouter as Router } from 'react-router-dom';

test("renders the correct content", () => {

    render(<Router><Result type="A"/></Router>);

    screen.getByText("Your result");

});
