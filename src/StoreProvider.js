"use client"
import React from 'react'
import { Provider } from 'react-redux'
import ThemeStore from './store/ThemeStore'

const StoreProvider = ({children}) => {
  return (
    <Provider store={ThemeStore}>
        {children}
    </Provider>
  )
}

export default StoreProvider