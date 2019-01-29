import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { TextInput, Button } from '@tripleerv/agassiz'

storiesOf('TextInput', module).add('Simple', () => (
  <Story title='Simple'>
    <TextInput type='text' placeholder='Enter some text' />
    <Button>Submit</Button>
  </Story>
))
