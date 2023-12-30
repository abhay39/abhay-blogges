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

  let mode=theme.themeChanger;


  const changeThe=()=>{
    dispatch(ThemeActions.changeTheme())
  }

  return (
    <div style={
      mode==='dark' ?({backgroundColor:'white'}):({backgroundColor:'#0f172a'})
    } className={styles.containers}>
      <IoIosMoon  size={18} color='yellow'/>
      <div className={styles.ball} style={
        mode==='dark' ?({left:1,backgroundColor:'#0f172a'}):({right:1,backgroundColor:'white'})
      }></div>
      <IoSunnyOutline onClick={changeThe} size={18} color='yellow'/>
    </div>
  )
}

export default ThemeToogle