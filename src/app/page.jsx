'use client'
import Featured from '@/component/featured/Featured';
import style from './homepage.module.css';
import CardList from '@/component/cardList/CardList';
import Menu from '@/component/menu/Menu';
import CategoryList from '@/component/categoryList/CategoryList';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { UserDetailsActions } from '@/store/ThemeStore';
import { useEffect, useState } from 'react';

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  const [isLoading,setIsLoading] = useState(true);

  const {data}=useSession();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(UserDetailsActions.addDetails(data));
  })

  setTimeout(()=>{
    setIsLoading(false);
  },2000)


  return (
    <div className={style.containers}>
        {
          isLoading?(<div className={style.loader}>
            <div className={style.customLoader}></div>
              <h1>Loading</h1>
        </div>):(
            <>
              <Featured />
              <CategoryList />
              <div className={style.content}>
                <CardList page={page}/>
                <Menu />
              </div>
            </>
          )
        }
    </div>
  )
}
