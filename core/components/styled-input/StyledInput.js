import styled from 'styled-components'

import { colours, misc } from '@tripleerv/agassiz-standards'

const config = {
  default: {
    background: colours.input.background,
    border: colours.input.border,
    borderFocus: colours.input.borderFocus,
  },
  error: {
    background: colours.input.background,
    border: colours.input.border,
    borderFocus: colours.input.borderFocus,
  }
}

const getAttributes = props => {
  if (props.hasError || props.error) return config.error
  else return config.default
}

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;

  background: ${props => getAttributes(props).background};
  border: 2px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  font-family: inherit;
  font-size: inherit;
  color: ${colours.text.inputs};

  padding: ${misc.inputs.padding};

  transition: border-color ${misc.inputs.animationDuration};

  &:focus {
    border-color: ${props => getAttributes(props).borderFocus};
    outline: none;
  }
`

export { StyledInput }
