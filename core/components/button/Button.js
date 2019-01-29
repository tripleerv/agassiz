import React from 'react'
import styled from 'styled-components'

import { colours, fonts, misc, spacing } from '@tripleerv/agassiz-standards'

const appearances = {
  default: {
    text: colours.button.default.text,
    hoverText: colours.button.default.textHover,
    icon: colours.button.default.icon,
    background: colours.button.default.background,
    border: colours.button.default.border,
    hoverBackground: colours.button.default.backgroundHover,
    hoverBorder: colours.button.default.borderHover,
    focusBackground: colours.button.default.backgroundFocus,
    focusBorder: colours.button.default.borderFocus,
    activeBackground: colours.button.default.backgroundActive,
    activeBorder: colours.button.default.borderActive,
    padding: '12px 18px',
  },
  primary: {
    text: colours.button.primary.text,
    hoverText: colours.button.primary.textHover,
    icon: colours.button.primary.icon,
    background: colours.button.primary.background,
    border: colours.button.primary.border,
    hoverBackground: colours.button.primary.backgroundHover,
    hoverBorder: colours.button.primary.borderHover,
    focusBackground: colours.button.primary.backgroundFocus,
    focusBorder: colours.button.primary.borderFocus,
    activeBackground: colours.button.primary.backgroundActive,
    activeBorder: colours.button.primary.borderActive,
    padding: '12px 18px',
  },
  outline: {
    text: colours.button.outline.text,
    hoverText: colours.button.outline.textHover,
    icon: colours.button.outline.icon,
    background: colours.button.outline.background,
    border: colours.button.outline.border,
    hoverBackground: colours.button.outline.backgroundHover,
    hoverBorder: colours.button.outline.borderHover,
    focusBackground: colours.button.outline.backgroundFocus,
    focusBorder: colours.button.outline.borderFocus,
    activeBackground: colours.button.outline.backgroundActive,
    activeBorder: colours.button.outline.borderActive,
    padding: '12px 18px',
  },
  dark: {
    text: colours.button.dark.text,
    hoverText: colours.button.dark.textHover,
    icon: colours.button.dark.icon,
    background: colours.button.dark.background,
    border: colours.button.dark.border,
    hoverBackground: colours.button.dark.backgroundHover,
    hoverBorder: colours.button.dark.borderHover,
    focusBackground: colours.button.dark.backgroundFocus,
    focusBorder: colours.button.dark.borderFocus,
    activeBackground: colours.button.dark.backgroundActive,
    activeBorder: colours.button.dark.borderActive,
    padding: '12px 18px',
  }
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
  font-size: 12px;
  font-family: ${fonts.primary.family.text};
  font-weight: ${fonts.primary.weight.semiBold};

  background: ${props => getAttributes(props).background};
  border: 2px solid ${props => getAttributes(props).border};
  border-color: ${props => getAttributes(props).border};
  box-sizing: border-box;
  border-radius: ${misc.radius};
  color: ${props => getAttributes(props).text};
  padding: ${props => getAttributes(props).padding};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled || props.loading || props.success ? 'none' : null)};
  transition: box-shadow ${misc.button.animationDuration}, background ${misc.button.animationDuration}, color ${misc.button.animationDuration};
  > *:not(:last-child):not(:only-child) {
    margin-right: ${props => (props.text ? spacing.xsmall : 0)};
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  text-decoration: none;
  outline: none;
  &:hover {
    color: ${props => getAttributes(props).hoverText || getAttributes(props).text};
    background: ${props => getAttributes(props).hoverBackground};
    border: 2px solid ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    color: ${props => getAttributes(props).hoverText};
    background: ${props => getAttributes(props).focusBackground};
    border: 2px solid ${props => getAttributes(props).focusBorder};
    outline: none;
  }
  &:active {
    color: ${props => getAttributes(props).hoverText};
    background: ${props => getAttributes(props).activeBackground};
    border-color: ${props => getAttributes(props).activeBorder};
    box-shadow: inset 0 0 0 1px ${props => getAttributes(props).activeBorder};
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
