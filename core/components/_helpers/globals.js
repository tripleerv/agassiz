import { fonts, misc } from '@tripleerv/agassiz-standards'

const injectIntoHead = styles => {
  let tag = document.getElementById('agassiz-globals')
  console.log(fonts)

  if (tag) {
    tag.innerHTML = styles
  } else {
    tag = document.createElement('style')
    tag.type = 'text/css'
    tag.id = 'agassiz-globals'
    tag.innerHTML = styles

    const head = document.getElementsByTagName('head')[0]
    head.insertBefore(tag, head.firstChild)
  }
}

injectIntoHead(`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: ${misc.lineHeight};
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* Our resets */
  * {
    box-sizing: border-box;
  }
  strong, em {
    font-weight: ${fonts.primary.weight.semiBold};
  }
  body, input, textarea, button, select {
    font-family: ${fonts.primary.family.text};
    font-weight: ${fonts.primary.weight.normal};
    font-size: ${fonts.primary.size.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`)
