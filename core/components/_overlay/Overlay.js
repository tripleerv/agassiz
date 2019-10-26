import React from 'react'
import { createPortal } from 'react-dom'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colours } from '@tripleerv/agassiz-standards'

class Overlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mounted: false }
    this.mountEl = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.mountEl)
    document.addEventListener('keydown', this.handleDocumentKeyDown)
    this.setState({ mounted: true })
  }

  componentWillUnmount() {
    document.body.removeChild(this.mountEl)
    document.removeEventListener('keydown', this.handleDocumentKeyDown)
  }

  handleDocumentKeyDown = e => {
    const { open, onClose } = this.props
    const escapeWasPressed = e.which === 27
    if (open && escapeWasPressed) {
      e.preventDefault()
      onClose()
    }
  }

  render() {
    const { open, children } = this.props

    if (!this.state.mounted) return null

    let content = (
      <Overlay.Pseudo onMouseDown={this.handleMouseDown} open={open}>
        <Overlay.Element ref={el => (this.contentElement = el)}>{children}</Overlay.Element>
      </Overlay.Pseudo>
    )

    return createPortal(content, this.mountEl)
  }
}

Overlay.Pseudo = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colours.base.white};
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 400ms 0s, visibility 0s 400ms;
`

Overlay.Element = styled.div`
  width: 100%;
  background: ${colours.base.green};
  display: inline-block;
`

export default Overlay
