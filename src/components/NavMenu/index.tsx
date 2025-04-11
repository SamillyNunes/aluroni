
import { ReactComponent as Logo } from 'assets/logo.svg';

import styles from './NavMenu.module.scss';
import { Link } from 'react-router-dom';

export default function NavMenu(){
    const routes = [{
      label: 'Início',
      to: '/',
    },{
      label: 'Cardápio',
      to: '/menu',
    },{
      label: 'Sobre',
      to: '/about',
    }
  ];

    return (
        <nav className={styles.menu}>
        <Logo />
        <ul className={styles.menuList} >
          {routes.map((route, index) => (
            <li key={index} className={styles.menuLink}>
              <Link to={route.to} >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}