import React from 'react'
import styled from 'styled-components'

import { colours, fonts, misc } from '@tripleerv/agassiz-standards'

const Paragraph = props => <Paragraph.Element {...props}>{props.children}</Paragraph.Element>

Paragraph.Element = styled.p`
  line-height: ${misc.lineHeight};
  margin: 1rem 0;
  color: ${colours.text.default};
  font-size: ${fonts.primary.size.default};
  font-weight: ${fonts.primary.weight.normal};
`

const StyledParagraph = Paragraph.Element

export default Paragraph
export { StyledParagraph }
