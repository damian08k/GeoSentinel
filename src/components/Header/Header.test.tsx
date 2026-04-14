import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header component', () => {
  it('should render the select component in Header and have default 7 days value', () => {
    render(<Header />);
    const select = screen.getByRole('combobox');

    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('7_days');
  });

  it('should render logout and analyst buttons in Header', () => {
    render(<Header />);
    const buttons = screen.getAllByRole('button');
    const buttonLabels = buttons.map(btn => btn.textContent);

    expect(buttons).toHaveLength(2);
    expect(buttonLabels).toEqual(['Analyst', 'Wyloguj']);
  });
});
