import { render, screen } from '@testing-library/react';

import { APP_ID } from 'tests/testIds';

import App from './App';

describe('Main App Component', () => {
  it('should render the App component', () => {
    render(<App />);

    expect(screen.getByTestId(APP_ID)).toBeInTheDocument();
  });
});
