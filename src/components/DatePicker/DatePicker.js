import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SingleDatePicker } from 'react-dates'
import { isSameDay } from 'date-fns'
import _ from 'lodash'
import moment from 'moment'
import { withTheme } from '../../theme'
import ListDates from './ListDates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const Wrapper = styled.div`
  .CalendarDay__highlighted_calendar {
    background: ${props => props.theme.datePicker.active.backgroundColor};
    color: ${props => props.theme.datePicker.active.textColor};
  }

  .CalendarDay__highlighted_calendar:active,
  .CalendarDay__highlighted_calendar:hover {
    background: ${props => props.theme.datePicker.hover.backgroundColor};
    color: ${props => props.theme.datePicker.hover.textColor};
  }

  .SingleDatePickerInput {
    display: inline-block;
    background-color: ${props => props.theme.datePicker.inputBackgroundColor};
    border-radius: 50px;
    border: none;
    padding: 15px;
  }

  .DateInput {
    width: 100%;
  }

  .DateInput_input {
    padding: 0;
    width: 100%;
    background-color: ${props => props.theme.datePicker.inputBackgroundColor};
    color: ${props => props.theme.datePicker.inputTextColor};
    font-size: 16px;
  }

  .DateInput_input__focused {
    border-bottom: none;
  }

  .CalendarDay__default:hover {
    background: ${props => props.theme.datePicker.hover.backgroundColor};
    color: ${props => props.theme.datePicker.hover.textColor};
    border-color: ${props => props.theme.datePicker.hover.backgroundColor};
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${props => props.theme.datePicker.selected.backgroundColor};
    border: 1px double ${props => props.theme.datePicker.selected.borderColor};
    color: ${props => props.theme.datePicker.selected.textColor};
  }
`

const DatePicker = props => {
  const _onDatesChange = date => {
    props.onDateChange(new Date(date))
  }

  const _onFocusChange = focus => {
    props.onFocusChange(focus)
  }

  const _dayBlock = date => {
    const dateFromCalendar = new Date(date)
    const find = _.chain(props.arrayOfDayBlocked)
      .map(d => new Date(d))
      .find(dateFromArray => isSameDay(dateFromArray, dateFromCalendar))
      .value()

    if (find) {
      return true
    }
    return false
  }

  const _dayHighLight = date => {
    const dateFromCalendar = new Date(date)
    const find = _.chain(props.arrayOfDayHighlight)
      .map(d => new Date(d))
      .find(dateFromArray => isSameDay(dateFromArray, dateFromCalendar))
      .value()

    if (find) {
      return true
    }
    return false
  }

  return (
    <Wrapper theme={props.theme}>
      <SingleDatePicker
        date={moment()}
        showClearDate
        disabled={false}
        required
        readOnly={false}
        focused
        hideKeyboardShortcutsPanel
        id="date_picker"
        numberOfMonths={1}
        displayFormat="DD/MM/YYYY"
        onDateChange={_onDatesChange}
        onFocusChange={_onFocusChange}
        placeholder={props.placeholder}
        isDayBlocked={_dayBlock}
        isDayHighlighted={_dayHighLight}
      />
      <ListDates dates={props.arrayOfDayHighlight} />
    </Wrapper>
  )
}

DatePicker.defaultProps = {
  placeholder: 'Choose date',
  arrayOfDayBlocked: [],
  arrayOfDayHighlight: []
}

DatePicker.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  arrayOfDayBlocked: PropTypes.instanceOf(Array),
  arrayOfDayHighlight: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  onDateChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired
}

export default withTheme(DatePicker)
