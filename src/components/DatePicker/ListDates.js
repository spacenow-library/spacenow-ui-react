import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
import { format } from 'date-fns'
import { withTheme } from '../../theme'
import Badge from '../Badge'
import { monthNames } from '../../constants'

const WrapperStyled = styled.div``

const ContainerStyled = styled.div`
  margin-top: 15px;
`

const MonthNameStyled = styled.span`
  margin-left: 15px;
  font-size: 14px;
`

const ContainerDatesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 45px));
  margin-top: 5px;
`

const DatePicker = props => {
  if (!props.dates || props.dates.lenght < 0) {
    props.onClickDate()
    return null
  }
  const datesGrouped = _.groupBy(props.dates, item => format(item, 'MMMM'))
  return (
    <WrapperStyled>
      {monthNames.map(month => {
        if (datesGrouped[month]) {
          return (
            <ContainerStyled theme={props.theme}>
              <MonthNameStyled>{month}</MonthNameStyled>
              <ContainerDatesStyled>
                {datesGrouped[month].map(date => {
                  return (
                    <Badge key={date} handleClick={e => props.onClickDate(e)}>
                      {format(date, 'D')}
                    </Badge>
                  )
                })}
              </ContainerDatesStyled>
            </ContainerStyled>
          )
        }
        return null
      })}
    </WrapperStyled>
  )
}

DatePicker.defaultProps = {
  onClickDate: () => {}
}

DatePicker.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  onClickDate: PropTypes.func,
  dates: PropTypes.instanceOf(Array).isRequired
}

export default withTheme(DatePicker)
