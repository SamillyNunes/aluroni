import styles from './NotFound.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import { ReactComponent as NotFoundSvg } from 'assets/not_found.svg';
import classNames from 'classnames';

export default function NotFound(){
    return (
        <div className={classNames({
            [styles.container]: true,
            [themeStyles.container]: true
        })}>
            <NotFoundSvg/>
        </div>
    );
}