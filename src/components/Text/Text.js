import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withTheme } from '../../theme'

const WrapperStyled = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  padding: 15px;

  ${props =>
    props.rounded &&
    css`
      border-radius: 37px;
    `}
`

const Text = props => {
  return (
    <WrapperStyled sm={props.sm} rounded={props.rounded} txtColor={props.textColor} bgColor={props.backgroundColor}>
      {props.children}
    </WrapperStyled>
  )
}

Text.defaultProps = {
  backgroundColor: 'transparent',
  textColor: '#1F252A',
  sm: true,
  rounded: true
}

Text.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  sm: PropTypes.bool,
  rounded: PropTypes.bool
}

export default withTheme(Text)
