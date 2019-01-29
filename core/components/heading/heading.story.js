import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { Heading } from '@tripleerv/agassiz'

storiesOf('Heading', module).add('Sizes', () => (
  <Story title='Sizes'>
    <Heading size={1}>Styled components are cool</Heading>
    <Heading size={2}>Styled components are cool</Heading>
    <Heading size={3}>Styled components are cool</Heading>
    <Heading size={4}>Styled components are cool</Heading>
  </Story>
))

storiesOf('Heading', module).add('Decorated', () => (
  <Story title='Sizes'>
    <Heading size={1} decorated center>
      This heading is emphasized by a decoration
    </Heading>
  </Story>
))
