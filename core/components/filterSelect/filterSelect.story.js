import React from 'react'
import { storiesOf } from '@storybook/react'
import Story from '../_helpers/story'

import { FilterSelect } from '@tripleerv/agassiz'

storiesOf('FilterSelect', module).add('Simple', () => (
  <Story title='Simple'>
    <FilterSelect
      options={[
        { title: 'All Videos', value: 'all' },
        { title: 'Wonder', value: 'PLwpdwiVGAYOPrrwGNQb7V0iyEZsVv2uds' },
        { title: 'Company', value: 'PLwpdwiVGAYONYx6c8Ld3JTfNeRmqVAh7S' },
        { title: 'The RV Lifestyle', value: 'PLwpdwiVGAYON5XdidJSyzD2rGbLSu4m4J' },
        { title: 'Why Leisure Vans?', value: 'PLwpdwiVGAYOM5CcfrLWGgvuIvt9JzPvWy' },
      ]}
      placeholder='Select'
      onOpen={val => console.log(`open: ${val}`)}
      onSelect={val => console.log(`selected: ${JSON.stringify(val)}`)}
    />
  </Story>
))
