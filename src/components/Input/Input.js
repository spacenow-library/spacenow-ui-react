import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withTheme } from '../../theme'

const sizeStyle = {
  sm: css`
    padding: 0.25rem 0.5rem;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 37px;
  `,
  md: css`
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 37px;
  `,
  lg: css`
    padding: 0.5rem 1rem;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 37px;
  `
}

const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  margin: 5px;
  color: rgb(33, 37, 41);
  background-color: #ebebeb;
  border-width: 1px;
  border-color: #ebebeb;
  border-style: solid;
  transition: color 0.2s ease-in-out 0s, border-style 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s,
    visibility 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s,
    text-decoration 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s, transform 0.2s ease-in-out 0s,
    opacity 0.2s ease-in-out 0s;

  ${props => props.size && sizeStyle[props.size] && sizeStyle[props.size]};

  :focus {
    box-shadow: #172439 0px 0px 2px;
    outline: 0px;
    // border-color: #172439;
  }
`

const Input = props => {
  return (
    <InputStyled
      value={props.value}
      theme={props.theme}
      size={props.size}
      placeholder={props.placeholder}
      onChange={e => props.handleChange(e, { value: e.target.value })}
    />
  )
}

Input.defaultProps = {
  size: 'md',
  placeholder: 'Input',
  value: '',
  handleChange: null
}

Input.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}

export default withTheme(Input)
