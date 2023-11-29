import styles from '../main/MainWeb.module.css'
import InstagramIco from '../imgs/instagram-2016-logo-svgrepo-com.svg'
import SoWonIco from '../imgs/gbsw/sowon.png'
import FuctionICo from '../imgs/gbsw/전국.png'
import MouIco from '../imgs/gbsw/MOU.png'
import KapstoneICo from "../imgs/gbsw/캡스톤.png";
import C_Ico from '../imgs/gbsw/국제교류.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMedal, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";  
import { useNavigate } from "react-router-dom";
function MainWeb () {
  const navigate = useNavigate();
  return (
    <div>
      <script
        src="https://kit.fontawesome.com/b202cac855.js"
        crossOrigin="anonymous"
      ></script>
      <header>
        <div className={styles.inner}>
          <div className={styles.head_container}>
            <div className={styles.head_brand}>
              <a href="http://school.gyo6.net/gbsw">경북소프트웨어고등학교</a>
            </div>
            <div className={styles.head_logo}>홍보사이트</div>
          </div>
        </div>
      </header>
      <section className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.inner}>
            <div className={styles.title_container}>
              <div className={styles.title}>
                경북SW고등학교 홍보사이트입니다.
              </div>
              <div className={styles.message}>환영합니다.</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.inner}>
          <div className={styles.skill_container}>
            <div className={styles.skill} onClick={() => navigate("/Boast")}>
              <FontAwesomeIcon
                icon={faMedal}
                className={styles.skill_icon}
                id={styles.medal_style}
              />
              <div className={styles.skill_title}>
                <div className={styles.skill_name}>학교자랑</div>
                <div className={styles.skill_usage}>주요 업적</div>
              </div>
            </div>
            <div className={styles.skill}>
              <img src={SoWonIco} className={styles.sowon} />
              <div className={styles.skill_title}>
                <div className={styles.skill_name}>학교 소개</div>
                <div className={styles.skill_usage}>과별소개보러가기</div>
              </div>
            </div>
            <div className={styles.skill}>
              <FontAwesomeIcon
                icon={faPhotoFilm}
                className={styles.skill_icon}
                id={styles.film_style}
              />
              <div className={styles.skill_title}>
                <div className={styles.skill_name}>특색 프로그램</div>
                <div className={styles.skill_usage}>갤러리</div>
              </div>
            </div>
            <div className={styles.skill}>
              <img src={InstagramIco} className={styles.insta_style} />
              <div className={styles.skill_title}>
                <div className={styles.skill_name}>인스타그램</div>
                <div className={styles.skill_usage}>바로가기</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.inner}>
          <div className={styles.roadmap_container}>
            <div className={styles.roadmap_title_container}>
              <div className={styles.roadmap_title}>학교 자랑</div>
            </div>
            <ul className={styles.class_list}>
              <li className={styles.class_card}>
                <img src={FuctionICo} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>
                      2022전국기능경기대회
                    </div>
                    <div className={styles.class_format}>전종목 입상</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.class_title}>
                      금메달 1, 은메달 1, 우수 및 정리
                    </div>
                    <div className={styles.class_detail}>ss</div>
                  </div>
                </div>
              </li>
              <li className={styles.class_card}>
                <img src={MouIco} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>
                      산학협력 및 협약기관
                    </div>
                    <div className={styles.class_format}>현제진행중</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.class_title}>
                      (주)케이티, 우아한형제들, (주)마이다스아이티 등
                    </div>
                    <div className={styles.class_detail}>ss</div>
                  </div>
                </div>
              </li>
              <li className={styles.class_card}>
                <img src={KapstoneICo} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>
                      2023캡스톤프로젝트
                    </div>
                    <div className={styles.class_format}>한학기 프로젝트</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.class_title}>
                      기업참여 캡스톤 프로젝트
                    </div>
                    <div className={styles.class_detail}>ss</div>
                  </div>
                </div>
              </li>
              <li className={styles.class_card}>
                <img src={C_Ico} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>
                      국제알고리즘대회
                    </div>
                    <div className={styles.class_format}>대회 및 문화탐방</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.class_title}>
                      베트남 국제 알고리즘 대회 참가
                    </div>
                    <div className={styles.class_detail}>ss</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className={styles.address}>우[37362] 경상북도 의성군 봉양면 봉호로 14 경북소프트웨어고등하교 Tel. 교무실 054.832.2903</div>
        <div className={styles.address_title}>Copyright(c) 경북소프트웨어고등학교. All right reserved.</div>
      </footer>
    </div>
  );
}

export default MainWeb;