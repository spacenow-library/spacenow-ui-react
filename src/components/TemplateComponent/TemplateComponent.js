import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'

const WrapperStyled = styled.div``

const TemplateComponent = props => {
  return <WrapperStyled>{props.children}</WrapperStyled>
}

TemplateComponent.defaultProps = {
  children: null
}

TemplateComponent.propTypes = {
  children: PropTypes.element
}

export default withTheme(TemplateComponent)
