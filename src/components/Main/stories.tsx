import { StoryObj, Meta } from '@storybook/react'
import { Main } from '.'

export default {
  title: 'General/Main',
  component: Main,
  tags: ['autodocs'],
} as Meta<typeof Main>

export const Default: StoryObj<typeof Main> = {
  render: () => <Main />
}
