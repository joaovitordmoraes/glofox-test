import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Main } from '.'
import theme from 'styles/theme'

describe('<Main />', () => {
  it('should render the Heading', () => {
    renderWithTheme(<Main />)

    expect(screen.getByRole('heading', { name: /Hello World/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Hello World/i })).toHaveStyle({ color: theme.colors.black })
  })
})