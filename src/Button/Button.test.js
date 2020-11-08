import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render', () => {
    render(<Button text="My Button" />);
    const linkElement = screen.getByText(/My Button/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('should handle onClick', () => {
    const handleClick = jest.fn();
    render(<Button text="My Button" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/My Button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
