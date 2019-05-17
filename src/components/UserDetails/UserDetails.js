import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'
import Avatar from '../Avatar'

const WrapperStyled = styled.div`
  display: grid;
  grid-row-gap: 25px;
`
const TopStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 25px;
  align-items: center;
`

const UserContainer = styled.div`
  line-height: 30px;
`
const BottomStyled = styled.div`
  font-family: 'Montserrat-Medium';
  line-height: 25px;
`

const TextDefaultStyled = styled.span`
display: block
color: #1C3942;
`
const TextName = styled(TextDefaultStyled)`
  font-family: Montserrat-Bold;
  font-size: 24px;
`
const TextCity = styled(TextDefaultStyled)`
  color: #707070v;
`
const TextTimeResponse = styled(TextDefaultStyled)`
  font-size: 14px;
`
const TextJoined = styled(TextDefaultStyled)`
  color: #2da577;
  font-size: 14px;
`

const UserDetails = () => {
  return (
    <WrapperStyled>
      <TopStyled>
        <Avatar small />
        <UserContainer>
          <TextName>Spacenow host name</TextName>
          <TextCity>Sydney, Australia</TextCity>
        </UserContainer>
      </TopStyled>
      <BottomStyled>
        <TextTimeResponse>Average response time: 2 hours</TextTimeResponse>
        <TextJoined>Joined in 2019</TextJoined>
      </BottomStyled>
    </WrapperStyled>
  )
}

UserDetails.defaultProps = {}

UserDetails.propTypes = {}

export default withTheme(UserDetails)
