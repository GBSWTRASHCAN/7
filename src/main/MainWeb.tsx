import styles from "../main/MainWeb.module.css";
import InstagramIco from "../imgs/instagram-2016-logo-svgrepo-com.svg";
import SoWonIco from "../imgs/gbsw/sowon.png";
import FuctionICo from "../imgs/gbsw/전국.png";
import MouIco from "../imgs/gbsw/MOU.png";
import KapstoneICo from "../imgs/gbsw/캡스톤.png";
import C_Ico from "../imgs/gbsw/국제교류.jpg";
import Git from "../imgs/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MainWeb() {
  const navigate = useNavigate();
  const [isDarktheme, setDarktheme] = useState(false);
  const toggleTheme = () => {
    setDarktheme((prev) => !prev);
  };
  return (
    <div
      id={styles.body}
      className={`${isDarktheme ? styles["dark-theme"] : ""}`}
    >
      git
      <script
        src="https://kit.fontawesome.com/b202cac855.js"
        crossOrigin="anonymous"
      ></script>
      <header className={`${isDarktheme ? styles["dark-theme"] : ""}`}>
        <div className={styles.inner}>
          <div className={styles.head_container}>
            <div className={styles.head_brand}>
              <a
                href="http://school.gyo6.net/gbsw"
                id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              >
                경북소프트웨어고등학교
              </a>
            </div>
            <div
              className={styles.head_logo}
              onClick={toggleTheme}
              id={`${isDarktheme ? styles["dark-theme"] : ""}`}
            >
              {isDarktheme ? "☀️" : "🌙"}
            </div>
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
      <section className={`${isDarktheme ? styles["dark-theme"] : ""}`}>
        <div className={styles.inner}>
          <div className={styles.skill_container}>
            <div
              className={styles.skill}
              onClick={() => navigate("/Boast")}
              id={`${isDarktheme ? styles["dark-theme"] : ""}`}
            >
              <FontAwesomeIcon
                icon={faMedal}
                className={styles.skill_icon}
                id={styles.medal_style}
              />
              <div className={styles.skill_title}>
                <div
                  className={styles.skill_name}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  학교자랑
                </div>
                <div
                  className={styles.skill_usage}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  주요 업적
                </div>
              </div>
            </div>
            <div
              className={styles.skill}
              onClick={() => navigate("/Introduce")}
              id={`${isDarktheme ? styles["dark-theme"] : ""}`}
            >
              <img src={SoWonIco} className={styles.sowon} />
              <div className={styles.skill_title}>
                <div
                  className={styles.skill_name}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  학교 소개
                </div>
                <div
                  className={styles.skill_usage}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  과별소개보러가기
                </div>
              </div>
            </div>
            <div
              className={styles.skill}
              id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              onClick={() => navigate("/Feature")}
            >
              <FontAwesomeIcon
                icon={faPhotoFilm}
                className={styles.skill_icon}
                id={styles.film_style}
              />
              <div className={styles.skill_title}>
                <div
                  className={styles.skill_name}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  특색 프로그램
                </div>
                <div
                  className={styles.skill_usage}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  갤러리
                </div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/gbsw_hs/"
              target="_blank"
              className={styles.skill}
              id={`${isDarktheme ? styles["dark-theme"] : ""}`}
            >
              <img src={InstagramIco} className={styles.insta_style} />
              <div className={styles.skill_title}>
                <div
                  className={styles.skill_name}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  인스타그램
                </div>
                <div
                  className={styles.skill_usage}
                  id={`${isDarktheme ? styles["dark-theme"] : ""}`}
                >
                  바로가기
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className={`${isDarktheme ? styles["dark-theme"] : ""}`}>
        <div className={styles.inner}>
          <div className={styles.roadmap_container}>
            <div className={styles.roadmap_title_container}>
              <div
                className={styles.roadmap_title}
                id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              >
                학교 자랑
              </div>
            </div>
            <ul className={styles.class_list}>
              <li
                className={styles.class_card}
                id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              >
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
              <li
                className={styles.class_card}
                id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              >
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
              <li
                className={styles.class_card}
                id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              >
                <img src={KapstoneICo} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023캡스톤프로젝트</div>
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
              <li
                className={styles.class_card}
                id={`${isDarktheme ? styles["dark-theme"] : ""}`}
              >
                <img src={C_Ico} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>국제알고리즘대회</div>
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
        <div className={styles.inner}>
          <a href="https://github.com/806gw/Promotion_gbsw" target="_blank">
            <img src={Git} className={styles.git} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MainWeb;
