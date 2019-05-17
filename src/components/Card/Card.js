import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'

const WrapperStyled = styled.div`
  display: grid;
  width: 350px;
  min-height: 200px;
  background-color: #ececec;
  padding: 50px;
  grid-row-gap: 25px;
  border-radius: 37px;
`
const TitleStyled = styled.div`
  justify-self: stretch;
`
const ContentStyled = styled.div`
  justify-self: stretch;
`
const FooterStyled = styled.div`
  justify-self: stretch;
`

const Card = props => {
  return (
    <WrapperStyled>
      {props.titleComponent && (
        <TitleStyled>
          {cloneElement(props.titleComponent, {
            ...props.titleComponent.props
          })}
        </TitleStyled>
      )}
      {props.contentComponent && (
        <ContentStyled>
          {cloneElement(props.contentComponent, {
            ...props.contentComponent.props
          })}
        </ContentStyled>
      )}
      {props.contentComponent && (
        <FooterStyled>
          {cloneElement(props.footerComponent, {
            ...props.footerComponent.props
          })}
        </FooterStyled>
      )}
    </WrapperStyled>
  )
}

Card.defaultProps = {
  titleComponent: null,
  footerComponent: null
}

Card.propTypes = {
  titleComponent: PropTypes.element,
  contentComponent: PropTypes.element.isRequired,
  footerComponent: PropTypes.element
}

export default withTheme(Card)
