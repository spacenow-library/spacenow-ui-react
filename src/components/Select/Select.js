import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'
import arrowSVG from './arrow.svg'

const SelectStyled = styled.select`
  padding: 10px;
  padding-left: 20px;
  border: 2px solid #ececec;
  border-radius: 50px;
  height: 60px;
  margin-top: 20px;
  background-position: 96% 50%;
  background-image: url(${arrowSVG}) !important;
  background-repeat: no-repeat;
  background-size: 25px 25px !important;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-shadow: none;

  :focus {
    outline: none !important;
    border: 2px solid #6adc91;
  }
`

const Select = props => {
  if (props.children) {
    return <SelectStyled>{props.children}</SelectStyled>
  }
  return (
    <SelectStyled>
      {props.options.map(item => (
        <option key={item.key} value={item.value}>
          {item.name}
        </option>
      ))}
    </SelectStyled>
  )
}

Select.defaultProps = {
  children: null,
  options: [{ key: 0, value: 0, name: '' }]
}

Select.propTypes = {
  children: PropTypes.element,
  options: PropTypes.instanceOf(Array)
}

export default withTheme(Select)
