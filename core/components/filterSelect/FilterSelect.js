import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colours, fonts } from '@tripleerv/agassiz-standards'

const FilterSelect = props => {
  const { placeholder, options } = props
  const [open, setOpen] = useState(false)
  const [newPlaceholder, setPlaceholder] = useState(placeholder)
  const [selected, setSelected] = useState(null)

  const onOpen = e => {
    e.preventDefault()
    setOpen(wasOpen => {
      if (props.onOpen) props.onOpen(!wasOpen)
      if (selected != null && !open) setPlaceholder(placeholder)
      return !wasOpen
    })
  }

  const onSelectItem = (option, idx) => {
    setPlaceholder(option.title)
    setSelected(idx)
    props.onSelect(option)
  }

  return (
    <FilterSelect.Element onClick={onOpen} open={open} {...props}>
      <List open={open}>
        <Item.Placeholder>{newPlaceholder}</Item.Placeholder>
        {open &&
          options.map((option, idx) => (
            <Item key={idx} id={idx} selected={selected} onClick={() => onSelectItem(option, idx)}>
              {option.title}
            </Item>
          ))}
      </List>
    </FilterSelect.Element>
  )
}

FilterSelect.Element = styled.div`
  position: relative;
  z-index: 3;
  height: 40px;
  width: 200px;
  cursor: pointer;
  font-family: ${fonts.primary.family};

  &::after {
    content: '';
    position: absolute;
    right: 16px;
    top: 50%;
    display: inline-block;
    width: 12px;
    height: 12px;
    transform: translateY(-50%) rotate(${props => (props.open ? '90deg' : '-90deg')});
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><path fill="${
      colours.base.green
    }" d="M3.5 11.5c-.15 0-.25-.05-.35-.15-.2-.2-.2-.5 0-.7l4.65-4.65-4.65-4.65c-.2-.2-.2-.5 0-.7s.5-.2.7 0l5 5c.2.2.2.5 0 .7l-5 5c-.1.1-.2.15-.35.15z"/><path fill="#D4D4D4" d="M3.5 23.5c-.15 0-.25-.05-.35-.15-.2-.2-.2-.5 0-.7l4.65-4.65-4.65-4.65c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l5 5c.2.2.2.5 0 .7l-5 5c-.1.1-.2.15-.35.15z"/></svg>')
      no-repeat 0 0;
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    transition: transform 0.3s;
    pointer-events: none;
  }

`

const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: ${colours.base.greyLightest};
  list-style: none;
  box-shadow: ${props => (props.open ? `0 4px 20px ${colours.base.boxShadow}` : 'none')};
`

const Item = styled.li`
  display: block;
  height: 40px;
  width: 200px;
  line-height: 40px;
  padding-left: 1em;
  font-weight: ${fonts.primary.weight.medium};
  color: ${props => (props.selected == props.id ? colours.base.greyLightest : colours.base.greyMedium)};
  text-decoration: none;
  background: ${props => (props.selected == props.id ? colours.base.green : colours.base.greyLightest)};

  &:hover {
    color: ${props => (props.selected == props.id ? colours.base.greyLightest : colours.base.green)};
  }
`

Item.Placeholder = styled(Item)`
  color: ${colours.base.green};
  background: ${colours.base.greyLightest};
  &:hover {
    color: ${colours.base.green};
  }
`

const StyledFilterSelect = FilterSelect.Element

FilterSelect.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  onOpen: PropTypes.func,
}

FilterSelect.defaultProps = {
  options: [],
  placeholder: '',
  onOpen: null,
}

List.propTypes = {
  open: PropTypes.bool,
}

List.defaultProps = {
  open: false,
}

export default FilterSelect
export { StyledFilterSelect }
