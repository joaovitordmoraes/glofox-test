import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import { ProductCard } from '.'

const args = {
  img: '/assets/beer-example.png',
  name: 'Punk IPA 2007 - 2010',
  description: 'Post Modern Classic. Spiky. Tropical. Hoppy.'
}

describe('<ProductCard />', () => {
  it('should render the ProductCard correctly', () => {
    const onClick = jest.fn()
    renderWithTheme(<ProductCard {...args} onButtonClick={onClick} />)

    expect(screen.getByRole('img', { name: 'Image of Punk IPA 2007 - 2010' })).toHaveAttribute(
      'src',
      '/assets/beer-example.png'
    )
    expect(screen.getByText('Punk IPA 2007 - 2010')).toBeInTheDocument()
    expect(screen.getByText('Post Modern Classic. Spiky. Tropical. Hoppy.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'See more' })).toBeInTheDocument()
  })

  it('should dispatch onButtonClick function when the button is clicked', async () => {
    const onClick = jest.fn()
    renderWithTheme(<ProductCard {...args} onButtonClick={onClick} />)

    const button = screen.getByRole('button', { name: 'See more' })

    expect(onClick).not.toHaveBeenCalled()

    userEvent.click(button)
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    expect(onClick).toHaveBeenCalled()
  })
})