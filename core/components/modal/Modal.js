import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import Overlay from '../_overlay'
import styled from 'styled-components'

import { colours, fonts } from '@tripleerv/agassiz-standards'

const Modal = props => {
  return (
    <Overlay {...props}>
      <InnerModal {...props}>
        <ModalHeader>
          {props.title && <ModalTitle>{props.title}</ModalTitle>}
          <ModalActions>
            {props.download && <>DL</>}
            {props.share && <>SR</>}
            <Action label='close' onClick={props.onClose} />
          </ModalActions>
        </ModalHeader>
        {props.children}
      </InnerModal>
    </Overlay>
  )
}

const InnerModal = styled.div``

const ModalHeader = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: white;
`

const ModalTitle = styled.h3`
  height: 100%;
  color: ${colours.text.heading};
  font-family: ${fonts.primary.family.text};
  font-weight: ${fonts.primary.weight.semiBold};
  font-size: 1.5rem;
  margin: 0 150px 0 2%;
  line-height: 80px;
  text-transform: none;
`

const ModalActions = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`

const Action = styled.a`
  display: block;
  position: relative;
  height: 80px;
  width: 80px;

  &::before {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    transform: translateY(-50%) translateX(-50%);
    height: 32px;
    width: 32px;
    opacity: 0.6;
    background: url('https://leisurevans.com/wp-content/themes/ltv-wp/img/icons/icons-popup-header.svg') no-repeat -64px
      0;
    transition: opacity 0.3s;
  }

  &::after {
    content: '${props => props.label}';
    position: absolute;
    transform: translateX(-50%) translateY(10px);
    left: 50%;
    bottom: 8px;
    width: 100%;
    color: ${colours.text.default};
    font-size: 0.6rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0;
    text-indent: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover {
    background: ${colours.base.white};
    cursor: pointer;

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
`

export default Modal
