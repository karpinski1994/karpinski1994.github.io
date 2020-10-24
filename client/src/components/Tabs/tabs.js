import React from 'react'
import {BaseTabs} from './base'
import {single, preventClose, combineReducers} from './shared'

function Tabs({stateReducer = (state, changes) => changes, ...props}) {
  return (
    <BaseTabs
      stateReducer={combineReducers(single, preventClose, stateReducer)}
      {...props}
    />
  )
}

export default Tabs