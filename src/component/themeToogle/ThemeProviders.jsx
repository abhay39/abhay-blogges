"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProviders = ({children}) => {
    const theme=useSelector((store)=>store)


  return (
    <div className={theme.themeChanger}>
        {children}
    </div>
  )
}

export default ThemeProviders