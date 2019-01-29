import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { Link } from '@tripleerv/agassiz'

storiesOf('Link', module).add('Default', () => (
  <Story title='default'>
    <Link href='https://tripleerv.com' target='_blank'>
      Click me!
    </Link>
  </Story>
))
