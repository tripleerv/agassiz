import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '@tripleerv/agassiz'

console.log(Button)

storiesOf('Button', module)
  .add('plain', () => <Button>Button</Button>)
  .add('text', () => <Button href='https://google.com'>Google</Button>)
