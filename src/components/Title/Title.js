import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const H1Styled = styled.h1`
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  font-size: 66px;
  color: #172439;
  margin: 0;
`
const H2Styled = styled.h2`
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  font-size: 56px;
  color: #172439;
  margin: 0;
`
const H3Styled = styled.h3`
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  font-size: 46px;
  color: #172439;
  margin: 0;
`
const H4Styled = styled.h4`
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  font-size: 36px;
  color: #172439;
  margin: 25px 0;
`
const SubtitleStyled = styled.p`
  color: #707070;

  ${props =>
    props.size &&
    css`
      font-size: 30px;
    `}
`

// const TitleStyled = styled.span`
//   color: black;
// `

const Title = ({ type, title, subtitle, size }) => {
  if (type === 'h1') {
    return (
      <div>
        <H1Styled>{title}</H1Styled>
        <SubtitleStyled size={size}>{subtitle}</SubtitleStyled>
      </div>
    )
  }
  if (type === 'h2') {
    return (
      <div>
        <H2Styled>{title}</H2Styled>
        <SubtitleStyled>{subtitle}</SubtitleStyled>
      </div>
    )
  }
  if (type === 'h3') {
    return (
      <div>
        <H3Styled>{title}</H3Styled>
        <SubtitleStyled>{subtitle}</SubtitleStyled>
      </div>
    )
  }
  if (type === 'h4') {
    return (
      <div>
        <H4Styled>{title}</H4Styled>
        <SubtitleStyled>{subtitle}</SubtitleStyled>
      </div>
    )
  }
  return (
    <div>
      <H1Styled>{title}</H1Styled>
      <SubtitleStyled>{subtitle}</SubtitleStyled>
    </div>
  )
}

Title.defaultProps = {
  type: 'h1',
  subtitle: null,
  size: '30px'
}

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  size: PropTypes.string
}

export default Title
