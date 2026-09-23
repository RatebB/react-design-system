import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect'
import { Input } from './Input';

describe('Input accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should expose the error message to assistive technologies', () => {
    const { getByRole, getByText } = render(
      <Input
        label="Email"
        type="email"
        error="Email invalide"
      />,
    );

    const input = getByRole('textbox');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute(
      'aria-describedby',
      expect.stringContaining('-error'),
    );

    expect(getByText('Email invalide')).toHaveAttribute(
      'role',
      'alert',
    );
  });
});