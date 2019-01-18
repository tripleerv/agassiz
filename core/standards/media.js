import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
