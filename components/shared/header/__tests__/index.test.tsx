import { render, screen } from '@testing-library/react';
import Header from '@/components/shared/header';

test('renders header', () => {
  render(<Header />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});