import Featured from '@/component/featured/Featured';
import style from './homepage.module.css';
import CardList from '@/component/cardList/CardList';
import Menu from '@/component/menu/Menu';

export default function Home() {
  return (
    <div className={style.containers}>
      <Featured />
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
