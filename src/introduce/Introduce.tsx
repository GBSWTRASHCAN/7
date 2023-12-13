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
import Github from '../imgs/github.svg'
import Notion from '../imgs/notion-svgrepo-com (3).svg'
import Green from '../imgs/student_project/green.jpg'
import Aurora from '../imgs/student_project/Aurora.gif'
import GithubStar from '../imgs/student_project/githubStar.png'
import Map from '../imgs/student_project/map.gif'
import Bamboo from '../imgs/student_project/Bamboo.png'

function Introduce () {
  return (
    <div>
      <Header />
      <section>
        <div className={styles.inner}>
          <div className={styles.department}>
            <div className={styles.department_container}>
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
                    인공지능과 빅데이터에 대한 기본적인 지식을 <br /> 바탕으로,
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
                    게임개발 기획, 분석, 설계, 디자인, 프로그래밍, <br />
                    테스트, 운영업무를 수행하는 게임개발자 양성
                  </div>
                  <div className={styles.lang_list}>
                    <img src={c2} className={styles.lang} />
                    <img src={unity} className={styles.lang} />
                  </div>
                </div>
              </div>
              <div className={styles.software_made}>
                <div className={styles.made_title}>학생 프로젝트</div>
                <ul className={styles.class_list}>
                  <a href="https://mileage.gbsw.hs.kr/" target="_blank">
                    <li className={styles.class_card}>
                      <img src={Green} className={styles.class_img} />
                      <div className={styles.class_container}>
                        <div className={styles.class_skill}>
                          <div
                            className={styles.class_type}
                            id={styles.project}
                          >
                            Team-Firewall
                          </div>
                          <a
                            href="https://github.com/Team-Firewall"
                            target="_blank"
                            className={styles.git}
                          >
                            <img src={Github} className={styles.class_format} />
                          </a>
                        </div>
                        <div className={styles.class_desc}>
                          <div
                            className={styles.class_title}
                            id={styles.green_link}
                          >
                            경북소프트웨어고등학교 상벌점 시스템
                          </div>
                        </div>
                      </div>
                    </li>
                  </a>
                  <li className={styles.class_card}>
                    <img src={Aurora} className={styles.class_img} />
                    <div className={styles.class_container}>
                      <div className={styles.class_skill}>
                        <div className={styles.class_type} id={styles.project}>
                          Team Pixel
                        </div>
                        <a
                          href="https://github.com/proj-aurora"
                          target="_blank"
                          className={styles.git}
                        >
                          <img src={Github} className={styles.class_format} />
                        </a>
                      </div>
                      <div className={styles.class_desc}>
                        <div
                          className={styles.class_title}
                          id={styles.aurora_link}
                        >
                          Aurora
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={styles.class_card}>
                    <img src={Map} className={styles.class_img} />
                    <div className={styles.class_container}>
                      <div className={styles.class_skill}>
                        <div className={styles.class_type} id={styles.project}>
                          김동영 학생 kairos-hk
                        </div>
                        <a
                          href="https://kairos-hk.notion.site/470c1f958aba4d4cb96cffc16f85245a?v=ed37687162494f89b7465295a678f54a"
                          target="_blank"
                          className={styles.notion}
                        >
                          <img src={Notion} className={styles.class_format} />
                        </a>
                      </div>
                      <div className={styles.class_desc}>
                        <div
                          className={styles.class_title}
                          id={styles.green_link}
                        >
                          차량 침수피해를 예방하는 길찾기 서비스
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className={styles.class_list}>
                  <a href="hhttps://star.dyacode.kro.kr" target="_blank">
                    <li className={styles.class_card}>
                      <img src={GithubStar} className={styles.class_img} />
                      <div className={styles.class_container}>
                        <div className={styles.class_skill}>
                          <div
                            className={styles.class_type}
                            id={styles.project}
                          >
                            손보석 학생
                          </div>
                          <a
                            href="https://github.com/dya-only/star-frontend"
                            target="_blank"
                            className={styles.git}
                          >
                            <img src={Github} className={styles.class_format} />
                          </a>
                        </div>
                        <div className={styles.class_desc}>
                          <div
                            className={styles.class_title}
                            id={styles.green_link}
                          >
                            깃허브 스타 랭킹 서비스
                          </div>
                        </div>
                      </div>
                    </li>
                  </a>
                  {/* <a href="#" target="_blank"> */}
                    <li className={styles.class_card}>
                      <img src={Bamboo} className={styles.class_img} />
                      <div className={styles.class_container}>
                        <div className={styles.class_skill}>
                          <div
                            className={styles.class_type}
                            id={styles.project}
                          >
                            Team StackMasters
                          </div>
                          <a
                            href="https://github.com/806gw/gbsw-bamboo"
                            target="_blank"
                            className={styles.git}
                          >
                            <img src={Github} className={styles.class_format} />
                          </a>
                        </div>
                        <div className={styles.class_desc}>
                          <div
                            className={styles.class_title}
                            id={styles.green_link}
                          >
                            경북소프트웨어고등학교 대나무숲
                          </div>
                        </div>
                      </div>
                    </li>
                 {/* </a> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduce;