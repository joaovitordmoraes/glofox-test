import { StoryObj, Meta } from '@storybook/react'
import { ProductCard } from '.'

export default {
  title: 'General/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} as Meta<typeof ProductCard>

export const Default: StoryObj<typeof ProductCard> = {
  args: {
    img: '/assets/beer-example.png',
    name: 'Punk IPA 2007 - 2010',
    description: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    onButtonClick: () => console.log('click')
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <ProductCard {...args} />
    </div>
  )
}
