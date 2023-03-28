import { render } from '@testing-library/react';

const Comp = () => <div>Hello</div>;

it('should work', () => {
  const { getByText } = render(<Comp />);

  expect(getByText('Hello')).toBeVisible();
});
