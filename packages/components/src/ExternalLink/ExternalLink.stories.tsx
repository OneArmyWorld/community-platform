import type { Meta, StoryFn } from '@storybook/react'
import { Text } from 'theme-ui'
import { ExternalLink } from './ExternalLink'
import { Icon } from '..'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ExternalLink',
  component: ExternalLink,
} as Meta<typeof ExternalLink>

export const Basic: StoryFn<typeof ExternalLink> = () => (
  <ExternalLink href="#">Link Text</ExternalLink>
)

export const Styled: StoryFn<typeof ExternalLink> = () => (
  <ExternalLink href="#" color="black" sx={{ textDecoration: 'underline' }}>
    Link Text
  </ExternalLink>
)

export const WithIcon: StoryFn<typeof ExternalLink> = () => (
  <ExternalLink href="#">
    <Text>Link Text</Text>
    <Icon glyph="external-link" ml={[1]}></Icon>
  </ExternalLink>
)
