import styles from '../header/Header.module.css'
import { useNavigate } from "react-router-dom";
function Header () {
  const navigate = useNavigate();
  return (
    <div>
       <header>
        <div className={styles.inner}>
          <div className={styles.head_container}>
            <div className={styles.head_brand}>
              <a href="http://school.gyo6.net/gbsw">경북소프트웨어고등학교</a>
            </div>
            <div className={styles.head_logo} onClick={() => navigate("/")}>메인으로 돌아가기</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;