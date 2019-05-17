import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'

const WrapperStyled = styled.div`
  display: grid;
  grid-row-gap: 8px;
  width: 300px;
  font-size: 14px;
  margin: 35px 0;
`
const ContentStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
`
const LeftStyled = styled.span`
  align-self: center;
  justify-self: start;
`
const RichtStyled = styled.span`
  font-family: 'Montserrat-Bold';
  align-self: center;
  justify-self: end;
  font-weight: 700;
`

const PriceDetail = props => {
  if (!props.list || props.list.lenght < 1) {
    return null
  }
  return (
    <WrapperStyled>
      {props.list.map(item => (
        <ContentStyled>
          <LeftStyled>{item.name}</LeftStyled>
          <RichtStyled>{item.value}</RichtStyled>
        </ContentStyled>
      ))}
    </WrapperStyled>
  )
}

PriceDetail.defaultProps = {}

PriceDetail.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired
}

export default withTheme(PriceDetail)
