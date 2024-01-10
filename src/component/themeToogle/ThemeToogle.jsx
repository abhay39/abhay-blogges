"use client"
import React from 'react'
import styles from './themetoogle.module.css';
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActions } from '@/store/ThemeStore';


const ThemeToogle = () => {
  const dispatch=useDispatch();
  const theme=useSelector((store)=>store.themeChanger)

  // console.log(theme)


  const changeThe=()=>{
    dispatch(ThemeActions.changeTheme())
  }

  return (
    <div className={styles.containers} onClick={changeThe}>
      {
        theme==='dark' ? (<IoSunnyOutline  size={18} />):(<IoIosMoon  size={18}  />)
      }
    </div>
  )
}

export default ThemeToogle