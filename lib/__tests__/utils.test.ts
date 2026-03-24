import { cn } from '@/lib/utils';

describe('cn util', () => {
  test('joins class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  test('merges Tailwind classes', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });
});