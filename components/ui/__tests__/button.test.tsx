import { render, screen } from '@testing-library/react';
import {Button} from '@/components/ui/button';

test('renders button with default variant and size', () => {
  render(<Button>Click Me</Button>);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('group/button');
  expect(button).toHaveClass('bg-primary');
  expect(button).toHaveClass('text-primary-foreground');
  expect(button).toHaveClass('h-8');
});