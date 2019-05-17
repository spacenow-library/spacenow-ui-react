import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'

const ButtonStyled = styled.button`
  background-color: ${props =>
    (props.outline && props.theme.button.outline.active.backgroundColor) ||
    (props.disabled && props.theme.button.default.inactive.backgroundColor) ||
    props.theme.button.default.active.backgroundColor} 
  color: ${props =>
    (props.outline && props.theme.button.outline.active.textColor) || props.theme.button.default.active.textColor};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${props => props.theme.button.baseRadius};
  border: ${props => (props.outline ? `1px solid ${props.theme.button.outline.active.borderColor}` : 'none')};
  font-size: ${props => {
    const { baseFontSize } = props.theme.button
    const baseFontSizeParsed = parseInt(baseFontSize, 10)
    return (
      (props.small && `${baseFontSizeParsed * 0.875}px`) ||
      (props.large && `${baseFontSizeParsed * 1.375}px`) ||
      baseFontSize
    )
  }};
  font-weight: ${props => props.theme.button.fontSemibold};
  line-height: ${props => (props.small && '2.2') || (props.large && '1.25') || '2.5'};
  padding: ${props => (props.large ? '16px 25px 17px' : '0 12px')};
  width: ${props =>
    (props.small && props.theme.button.size.small.width) ||
    (props.large && props.theme.button.size.large.width) ||
    props.theme.button.size.default.width};
  height: ${props =>
    (props.small && props.theme.button.size.small.height) ||
    (props.large && props.theme.button.size.large.height) ||
    props.theme.button.size.default.height};
  font-weight: 600;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  background-image: none;
  
  :hover {
    background-color: ${props =>
      (props.outline && props.theme.button.outline.hover.backgroundColor) ||
      props.theme.button.default.hover.backgroundColor} 
    border: ${props => (props.outline ? `1px solid ${props.theme.button.outline.hover.borderColor}` : 'none')};
    color: ${props =>
      (props.outline && props.theme.button.outline.hover.textColor) || props.theme.button.default.active.textColor};
    
  }
  :focus {
    background-color: ${props =>
      (props.outline && props.theme.button.outline.focus.backgroundColor) ||
      props.theme.button.default.focus.backgroundColor} 
    border: ${props => (props.outline ? `1px solid ${props.theme.button.outline.focus.borderColor}` : 'none')};
    color: ${props =>
      (props.outline && props.theme.button.outline.focus.textColor) || props.theme.button.default.focus.textColor};
  }
  :disabled {
    background-color: ${props => props.theme.button.default.inactive.backgroundColor};
    border: 1px solid ${props => props.theme.button.default.inactive.borderColor};
    color: ${props => props.theme.button.default.inactive.textColor};
  }
`

// const BtnLink = Button.withComponent('a')

const Button = ({ children, className, disabled, isLoading, theme, type, outline, small, large }) => {
  return (
    <ButtonStyled
      theme={theme}
      className={className}
      disabled={disabled || isLoading}
      type={type}
      outline={outline}
      small={small}
      large={large}
    >
      {isLoading && 'Loading...'}
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  className: null,
  type: 'submit',
  outline: false,
  small: false,
  large: false
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool
}

export default withTheme(Button)
