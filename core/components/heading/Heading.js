import React from 'react'
import styled, { css } from 'styled-components'

import { colours, fonts } from '@tripleerv/agassiz-standards'

const decorationStyles = {
  true: css`
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      height: 3px;
      width: 30px;
      background: ${colours.base.green};
      transition: width 0.2s;
    }
  `,
}

const BaseHeading = styled.h1`
  position: relative;
  margin: 1em 0;
  color: ${colours.text.heading};
  font-family: ${fonts.primary.family.text};
  font-weight: ${fonts.primary.weight.normal};
  line-height: 1.3;
  ${props => decorationStyles[props.decorated]}
`

const Heading = props => {
  const Component = Heading.Element[props.size]
  return (
    <Component {...props} decorated={props.decorated}>
      {props.children}
    </Component>
  )
}

Heading.Element = []

Heading.Element[1] = styled(BaseHeading.withComponent('h1'))`
  font-size: 36px;
  font-weight: ${fonts.primary.weight.semiBold};
`

Heading.Element[2] = styled(BaseHeading.withComponent('h2'))`
  font-size: 24px;
  font-weight: ${fonts.primary.weight.medium};
`

Heading.Element[3] = styled(BaseHeading.withComponent('h3'))`
  font-size: 18px;
  font-weight: ${fonts.primary.weight.normal};
`

Heading.Element[4] = styled(BaseHeading.withComponent('h4'))`
  font-size: 14px;
  font-weight: ${fonts.primary.weight.light};
`

const StyledHeading = Heading.Element

Heading.defaultProps = {
  size: 1,
  children: null,
}

export default Heading
export { StyledHeading, BaseHeading }
