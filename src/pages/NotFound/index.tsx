import styles from './NotFound.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import { ReactComponent as NotFoundSvg } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
    const navigate = useNavigate();
    return (
        <div className={classNames({
            [styles.container]: true,
            [themeStyles.container]: true
        })}>
            <div className={styles.back}>
                <button type='button' onClick={()=>navigate(-1)} >{'< Voltar'}</button>
            </div>
            <NotFoundSvg height={'25rem'}/>
        </div>
    );
}