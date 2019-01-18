import React from 'react'
import styled from 'styled-components'

import { colours, fonts, misc, spacing } from '@tripleerv/agassiz-standards'

const appearances = {
  default: {
    text: colours.button.default.text,
    icon: colours.button.default.icon,
    background: colours.button.default.background,
    border: colours.button.default.border,
    hoverBackground: colours.button.default.backgroundHover,
    hoverBorder: colours.button.default.borderHover,
    focusBackground: colours.button.default.backgroundFocus,
    focusBorder: colours.button.default.borderFocus,
    activeBackground: colours.button.default.backgroundActive,
    activeBorder: colours.button.default.borderActive,
  },
}

const sizes = {
  large: {
    lineHeight: misc.button.large.height,
    minWidth: '140px',
  },
  default: {
    lineHeight: misc.button.default.height,
    minWidth: '120px',
  },
}

const getAttributes = props => {
  const appearanceStyles = appearances[props.appearance] ? appearances[props.appearance] : appearances.default

  const sizeStyles = sizes[props.size] ? sizes[props.size] : sizes.default

  let styles = { ...appearanceStyles, ...sizeStyles }
  return styles
}

const InnerButton = props => {
  let content = []

  // let icon = props.success ? 'check' : props.icon
  // const iconNode = icon ? (
  //   <Icon key="icon" size={16} name={icon} color={getAttributes(props).icon} />
  // ) : null

  if (props.text) content.push(<Button.Text key='text'>{props.text}</Button.Text>)
  const Element = props.href ? Button.LinkElement : Button.Element

  return <Element {...props}>{content}</Element>
}

const Button = ({ children, ...props }) => <InnerButton {...props} text={children} />

Button.Element = styled.button`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;

  min-width: ${props => getAttributes(props).minWidth};
  min-height: ${props => getAttributes(props).lineHeight};
  line-height: ${props => getAttributes(props).lineHeight};

  margin-top: 0;
  margin-left: 0;

  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
  font-size: 13px;
  font-family: ${fonts.primary.family.text};
  font-weight: ${fonts.primary.weight.medium};

  background: ${props => getAttributes(props).background};
  border: 1px solid ${props => getAttributes(props).border};
  box-sizing: border-box;
  border-radius: ${misc.radius};
  color: ${props => getAttributes(props).text};
  padding: 0 ${props => getAttributes(props).padding};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled || props.loading || props.success ? 'none' : null)};
  transition: border-color ${misc.animationDuration}, background ${misc.animationDuration};
  > *:not(:last-child):not(:only-child) {
    margin-right: ${props => (props.text ? spacing.xsmall : 0)};
  }
  &:hover {
    color: ${props => getAttributes(props).hoverText || getAttributes(props).text};
    background: ${props => getAttributes(props).hoverBackground};
    border-color: ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    background: ${props => getAttributes(props).focusBackground};
    border-color: ${props => getAttributes(props).focusBorder};
    outline: none;
  }
  &:active {
    background: ${props => getAttributes(props).activeBackground};
    border-color: ${props => getAttributes(props).activeBorder};
    outline: none;
  }
`

Button.Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin-top: 1px;
`

Button.LinkElement = styled(Button.Element.withComponent('a'))`
  text-decoration: none;
`

export default Button
