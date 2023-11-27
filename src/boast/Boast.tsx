import styles from '../boast/Boast.module.css'
import Header from '../header/Header';
import FuctionICo from '../imgs/gbsw/전국.png'
import MouIco from '../imgs/gbsw/MOU.png'
import KapstoneICo from '../imgs/gbsw/캡스톤.png'
import C_Ico from '../imgs/gbsw/국제교류.jpg'
import GbswIco from '../imgs/gbsw/symbol-only.png'
import Wkit from '../imgs/employ/channels4_profile.jpg'
import Engel from '../imgs/employ/다운로드 (1).png'
import Data from '../imgs/employ/yDgWop8J0d0WeNMYjR5Xv.jpg'
import Ark from '../imgs/employ/CP00013344_20230216172101.png'
import Idea from '../imgs/employ/다운로드.jpeg'
import Yhdeta from '../imgs/employ/다운로드 (2).png'
import Jsolution from '../imgs/employ/다운로드 (3).png'
import KYS from '../imgs/employ/logo_afc76f7d777755.jpeg'

function Boast () {
  return (
    <div>
      <Header />
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
              <li className={styles.class_card}>
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
              <li className={styles.class_card}>
                <img src={GbswIco} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}></div>
                    <div className={styles.class_format}>업데이트중..</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.class_title}></div>
                    <div className={styles.class_detail}></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.inner}>
          <div className={styles.employment_container}>
            <div className={styles.employment_title_container}>
              <div className={styles.employment_title}>취업현황</div>
            </div>
            <ul className={styles.employ_list}>
              <li className={styles.employ_card}>
                <img src={Wkit} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>3명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)우경정보기술</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
                <img src={Engel} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>1명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)엔젤게임즈</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
                <img src={Data} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)데이타뱅크</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
                <img src={Ark} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)아크데이타</div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className={styles.employ_list}>
              <li className={styles.employ_card}>
              <img src={Idea} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>4명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)드림아이디어소프트</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Yhdeta} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)YH데이타베이스</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Jsolution} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)제이솔루션</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={KYS} className={styles.class_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>3명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)제이솔루션</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Boast;