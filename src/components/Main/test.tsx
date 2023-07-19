import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the Heading', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /Hello World/i })).toBeInTheDocument()
  });
});