import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { Button, Modal, Paragraph } from '@tripleerv/agassiz'

storiesOf('Modal', module).add('Default', () => <Default />)

class Default extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  setIsOpen = isOpen => () => {
    this.setState({ isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <Story title='default'>
        <Button appearance='primary' onClick={this.setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal open={isOpen} title='Example Modal' onClose={this.setIsOpen(false)}>
          <Paragraph>Esc to close</Paragraph>
        </Modal>
      </Story>
    )
  }
}
