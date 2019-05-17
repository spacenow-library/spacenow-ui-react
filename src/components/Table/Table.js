import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTheme } from '../../theme'

const TableStyled = styled.table`
  width: 100%;
  background: #ffffff;
  border-spacing: 0;
  box-shadow: none;
  text-align: left;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
`

const TableHead = styled.thead``
const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #f7f7f7;
  }
`

const HeaderCell = styled.th`
  padding: 5px 15px;
  font-size: 12px;
`

const TableBody = styled.tbody`
  color: #939393;
`

const TableCell = styled.td`
  padding: 15px 15px;

  :first-child {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  :last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const Table = props => {
  return (
    <TableStyled {...props} className={props.className}>
      <TableHead>
        <TableRow>
          <HeaderCell>Name on card</HeaderCell>
          <HeaderCell>Brand</HeaderCell>
          <HeaderCell>Card Number</HeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Mark</TableCell>
          <TableCell>Otto</TableCell>
          <TableCell>@mdo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mark</TableCell>
          <TableCell>Otto</TableCell>
          <TableCell>@mdo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mark</TableCell>
          <TableCell>Otto</TableCell>
          <TableCell>@mdo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mark</TableCell>
          <TableCell>Otto</TableCell>
          <TableCell>@mdo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mark</TableCell>
          <TableCell>Otto</TableCell>
          <TableCell>@mdo</TableCell>
        </TableRow>
      </TableBody>
    </TableStyled>
  )
}

Table.defaultProps = {
  className: null
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
}

export default withTheme(Table)
