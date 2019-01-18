import React from 'react'
import { storiesOf } from '@storybook/react'

import { Heading } from '@tripleerv/agassiz'

storiesOf('Heading', module).add('plain', () => (
  <React.Fragment>
    <Heading size={1} decorated>Styled components are cool</Heading>
    <Heading size={2}>Styled components are cool</Heading>
    <Heading size={3}>Styled components are cool</Heading>
    <Heading size={4}>Styled components are cool</Heading>
    <Heading size={3} decorated>This is something important</Heading>
</React.Fragment>
))
