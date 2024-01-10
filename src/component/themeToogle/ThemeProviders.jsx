"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProviders = ({children}) => {
    const theme=useSelector((store)=>store.themeChanger)


  return (
    <div className={theme}>
        {children}
    </div>
  )
}

export default ThemeProviders