import styles from '../introduce/Introduce.module.css'
import Header from '../header/Header';
import Soco from '../imgs/gbsw/soco.png'
import Aco from '../imgs/gbsw/a-co.png'
import Enco from '../imgs/gbsw/enco.png'
import C from '../imgs/lang_icon/c.svg'
import Java from '../imgs/lang_icon/java.svg'
import Html from '../imgs/lang_icon/html.svg'
import Css from '../imgs/lang_icon/css.svg'
import Javascript from '../imgs/lang_icon/javascript.svg'
import React from '../imgs/lang_icon/react.svg'
import Python from '../imgs/lang_icon/python.svg'
import Deep from '../imgs/lang_icon/deep-learning.svg'
import Machine from '../imgs/lang_icon/machine-learning.svg'
import c2 from '../imgs/lang_icon/c2.svg'
import unity from '../imgs/lang_icon/unity.svg'

function Introduce () {
  return (
    <div>
      <Header />
      <section>
        <div className={styles.inner}>
          <div className={styles.department}>
            <div className={styles.department_container}>
              <div className={styles.department_title_container}>
                <div className={styles.department_title}>학과 소개</div>
              </div>
              <div className={styles.department_list}>
                <div className={styles.software}>
                  <img src={Soco} className={styles.char} />
                  <div className={styles.software_title}>소프트웨어개발과</div>
                  <div className={styles.department_introduce}>
                    소프트웨어개발의 계획, 분석, 설계, 프로그래밍, 테스트,
                    운영업무를 수행하는 SW개발자 양성
                  </div>
                  <div className={styles.lang_list}>
                    <img src={C} className={styles.lang} />
                    <img src={Java} className={styles.lang} />
                    <img src={Html} className={styles.lang} />
                    <img src={Css} className={styles.lang} />
                    <img src={Javascript} className={styles.lang} />
                    <img src={React} className={styles.lang} />
                  </div>
                </div>
                <div className={styles.ai}>
                  <img src={Aco} className={styles.char} />
                  <div className={styles.ai_title}>
                    인공지능소프트웨어개발과
                  </div>
                  <div className={styles.department_introduce}>
                    인공지능과 빅데이터에 대한 기본적인 지식을 바탕으로,
                    인공지능 소프트웨어 전문가 양성
                  </div>
                  <div className={styles.lang_list}>
                    <img src={Python} className={styles.lang} />
                    <img src={Deep} className={styles.lang} />
                    <img src={Machine} className={styles.lang} />
                  </div>
                </div>
                <div className={styles.game}>
                  <img src={Enco} className={styles.char} />
                  <div className={styles.game_title}>게임개발과</div>
                  <div className={styles.department_introduce}>
                    게임개발 기획, 분석, 설계, 디자인, 프로그래밍, 테스트,
                    운영업무를 수행하는 게임개발자 양성
                  </div>
                  <div className={styles.lang_list}>
                    <img src={c2} className={styles.lang} />
                    <img src={unity} className={styles.lang} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduce;