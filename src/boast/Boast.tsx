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
import Ark from '../imgs/employ/다운로드 (13).png'
import Idea from '../imgs/employ/4d63e7bbb7856efe41890e238f3eb6f9.jpg'
import Yhdeta from '../imgs/employ/324483533_5398.jpg'
import Jsolution from '../imgs/employ/KakaoTalk_20231130_172938254.png'
import KYS from '../imgs/employ/logo_afc76f7d777755.jpeg'
import Cozmo from '../imgs/employ/rv6u6w_vjwr-ilz8b_logo.jpeg'
import Inplep from '../imgs/employ/qv8xk0_osyq-geat4m_logo (1).png'
import Qs from '../imgs/employ/image (3).png'
import Se from '../imgs/employ/다운로드 (15).png'
import Cow from '../imgs/employ/r9831n_8tyc-1mr854s_logo.jpg'
import LPC from '../imgs/employ/다운로드 (10).png'
import Arpa from '../imgs/employ/다운로드 (11).png'
import Woorl from '../imgs/employ/pyfdrs_hn5l-2rxicy_logo.png'
import Gachi from '../imgs/employ/다운로드 (12).png'

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
                <img src={Ark} className={styles.gbsw_img} />
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
              <img src={Idea} className={styles.gbsw_img} />
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
              <img src={Jsolution} className={styles.gbsw_img} />
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
              <img src={KYS} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>3명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)구일엔지니어링</div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className={styles.employ_list}>
              <li className={styles.employ_card}>
              <img src={Cozmo} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>1명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)코스모</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Inplep} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)인플랩</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Qs} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>3명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)큐에스</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Se} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>1명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)에스이코리아</div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className={styles.employ_list}>
              <li className={styles.employ_card}>
              <img src={Cow} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)민속친한우</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={LPC} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>3명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)민속LPC</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Arpa} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>1명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)한국알파시스템</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={Woorl} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>2명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)우리소프트</div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className={styles.employ_list}>
              <li className={styles.employ_card}>
              <img src={Gachi} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>1명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)가치</div>
                  </div>
                </div>
              </li>
              <li className={styles.employ_card}>
              <img src={GbswIco} className={styles.gbsw_img} />
                <div className={styles.class_container}>
                  <div className={styles.class_skill}>
                    <div className={styles.class_type}>2023.9.1 기준</div>
                    <div className={styles.class_format}>1명 취업</div>
                  </div>
                  <div className={styles.class_desc}>
                    <div className={styles.employ_title}>(주)디플로</div>
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