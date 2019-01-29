import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { Paragraph, Link } from '@tripleerv/agassiz'

storiesOf('Paragraph', module).add('Default', () => (
  <Story title='Default'>
    <Paragraph>
      So you two dig up, dig up dinosaurs? Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! You really think you can fly that thing? What do they got in there? King Kong? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
    </Paragraph>

    <Paragraph>
      Did he just throw my cat out of the window? I was part of something special. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.
    </Paragraph>

    <Paragraph>Text via <Link href='http://jeffsum.com/' target='_blank'>Jeffsum.com</Link></Paragraph>
  </Story>
))

storiesOf('Paragraph', module).add('With Styles', () => (
  <Story title='With Styles'>
    <Paragraph>
      Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind me to thank John for a lovely weekend. Do you have any idea how long it takes those cups to decompose. My dad once told me, laugh and the <strong>world laughs with you</strong>, Cry, and I'll give you something to cry about you little bastard!
    </Paragraph>

    <Paragraph>
    Yes, Yes, without the oops! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the <strong>OZONE</strong>! 'Cause maybe if we screw up this planet enough, they won't want it anymore!
    </Paragraph>

    <Paragraph>Text via <Link href='http://jeffsum.com/' target='_blank'>Jeffsum.com</Link></Paragraph>
  </Story>
))
