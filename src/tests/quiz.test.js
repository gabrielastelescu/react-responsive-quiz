import { render, screen } from '@testing-library/react';
import Quiz from '../pages/Quiz';

test("renders the correct content", () => {

    render(<Quiz />);
  
    screen.getByText("Let's take this quiz...");
    
  });
  