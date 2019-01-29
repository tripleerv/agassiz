import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { Button } from '@tripleerv/agassiz'

storiesOf('Button', module).add('Appearances', () => (
  <Story title='Appearances'>
    <Button>Default</Button>
    <Button appearance='primary'>Primary</Button>
    <Button appearance='outline'>Outline</Button>
    <Button disabled>Disabled</Button>
    <Button appearance='dark'>Dark</Button>
  </Story>
))

storiesOf('Button', module).add('Sizes', () => (
  <Story title='Sizes'>
    <Button>Default</Button>
    <Button size='large'>Large</Button>
  </Story>
))
