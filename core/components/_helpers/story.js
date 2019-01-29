import React from 'react'
import styled from 'styled-components'
import { colours, fonts, misc } from '@tripleerv/agassiz-standards'

const Title = styled.div`
  position: absolute;
  font-family: ${fonts.primary.family.text};
  font-weight: ${fonts.primary.weight.semiBold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  top: 2rem;
  left: 3rem;
  line-height: ${misc.lineHeight};
`

const Wrapper = styled.div`
  padding: 4rem 3rem 3rem;
  position: relative;
  border-bottom: 1px solid rgb(234, 234, 234);
  margin-bottom: 1rem;

  &.align-center {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
  }

  background: ${props => (props.background === 'dark' ? colours.base.black : colours.base.white)};
  color: ${props => (props.background === 'dark' ? colours.base.white : colours.text.default)};
`

const Story = props => (
  <Wrapper className={props.align === 'center' ? 'align-center' : null} {...props}>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
)

export default Story
