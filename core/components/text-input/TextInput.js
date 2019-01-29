import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledInput } from '../styled-input'
import { misc } from '@tripleerv/agassiz-standards'

const TextInput = props => {
  let { defaultValue, placeholder, readOnly, ...rest } = props

  const Input = (
    <TextInput.Element defaultValue={defaultValue} placeholder={placeholder} readOnly={readOnly} {...rest} />
  )

  return Input
}

TextInput.Element = styled(StyledInput)`
  height: ${props => misc.inputs[props.size].height};
`
TextInput.propTypes = {
  hasError: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large', 'small']),
}

TextInput.defaultProps = {
  error: null,
  onChange: null,
  type: 'text',
  size: 'default',
}

export default TextInput
