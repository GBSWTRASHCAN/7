import styles from './Introduce.module.css'
import Header from '../header/Header';

function Introduce () {
  return (
    <div>
      <Header />
      <div className={styles.inner}>
        <div className={styles.department}>
          <div className={styles.software}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;