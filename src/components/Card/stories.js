import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'
import PriceDetail from '../PriceDetail'
import Title from '../Title'
import Text from '../Text'
import UserDetails from '../UserDetails'

const arrayMock = [
  {
    name: 'AUD $182.84 x 9 days',
    value: 'Quantity x10'
  },
  {
    name: 'Quantity x10',
    value: 'AUD $112.80'
  },
  {
    name: 'Service fee',
    value: 'AUD $478.49'
  },
  {
    name: 'Total',
    value: 'AUD $478.49'
  }
]
const ContentFooter = () => {
  return (
    <div>
      <span>Total</span>
    </div>
  )
}

storiesOf('Card', module).add('Default', () => (
  <Card
    titleComponent={<Title type="h4" title="Hosted by" />}
    contentComponent={
      <div>
        <UserDetails />
        <Title type="h4" title="Desk 01 - Alexandria Office Headquarters" subtitle="Sydney, Australia" />
        <PriceDetail list={arrayMock} style={{ marginTop: '50px' }} />
      </div>
    }
    footerComponent={
      <Text backgroundColor="white">
        <ContentFooter />
      </Text>
    }
  />
))
