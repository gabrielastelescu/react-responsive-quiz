import { render, screen } from '@testing-library/react';
import Question from '../components/Question';

test('previous and next buttons render initially', () => {

  render(<Question />);

  screen.getByText(/next question/i);

  screen.getByText(/previous question/i);

});

test('previous and next buttons should be initially disabled', () => {

  render(<Question />);
  
  const buttonNext = screen.getByText(/next question/i);
  expect(buttonNext).toBeDisabled();

  const buttonPrevious = screen.getByText(/previous question/i);
  expect(buttonPrevious).toBeDisabled();

});
