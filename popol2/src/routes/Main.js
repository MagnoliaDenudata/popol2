import React from 'react';
import "../scss/Main.scss";
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect } from 'react';

const Main = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  
  useEffect(() => {
    // 1초 후에 환영 메시지를 천천히 사라지게 합니다.
    const fadeOutTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => {
      clearTimeout(fadeOutTimer);
    };
    }, []);
  
  
  return (
    <ReactFullpage
      scrollingSpeed={900} 
      navigation 
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              {showWelcome ? (
                <div className={`headertxt ${showWelcome ? '' : 'fade-out'}`}>
                  <h1>저희 비발디 파크를 찾아주셔서 감사합니다.</h1>
                </div>
              ) : (
                <div className="main-page">
                  <h1>섹션1</h1>
                </div>
              )}
            </div>
            <div className="section">
              <h1>두 번째 섹션</h1>
            </div>
            <div className="section">
              <section className="Money">
                <div className="Moneytoptxt">
                  <h1>요금제 선택하기</h1>
                  <h2>스피커 및 기타 기기에서 제한 없이 마음껏 들으세요.</h2>
                </div>
                <div className='Moneyset3'>
                  <div>
                    <div className='user-text2 first'>
                        <div className="money">
                          <div className="moneytop">
                            <h3>Solo</h3>
                            <p>매월 10,900원 정기결제(부가세 별도).</p>
                            <p>계정 1개</p>
                            <hr className="moneyline"></hr>
                          </div>
                          <ul className="moneymid">
                            <li><p>무광고로 음악 감상하기</p></li>
                            <li><p>다운로드하여 오프라인에서 감상</p></li>
                            <li><p>나만의 맞춤 플레이리스트</p></li>
                            <li><p>8천만 곡 감상 가능</p></li>
                            <li><p>여러 디바이스에서 감상</p></li>
                          </ul>
                          <div className="moneybottom">
                            <div>
                              <a className="moneybottoma" href="/">
                                <span className="moneybottomb">Get Started</span>
                                <span className="moneybotton"></span>
                              </a>
                            </div>
                          </div>
                          <div className="moneyfotter">
                            <p className="moneyfottertxt">체험 기간 이후 매월 정기결제되고 이용 약관이 적용됩니다. Premium을 이미 이용해 봤다면 참여할 수 없습니다.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div>
                    <div className='user-text2 first'>
                        <div className="money">
                          <div className="moneytop">
                            <h3>Duo</h3>
                            <p>매월 16,350원 정기결제(부가세 별도)</p>
                            <p>계정 2개</p>
                            <hr className="moneyline"></hr>
                          </div>
                          <ul className="moneymid">
                            <li><p>Premium 별도 계정 2개</p></li>
                            <li><p>무광고로 음악 감상하기</p></li>
                            <li><p>다운로드하여 오프라인에서 감상</p></li>
                            <li><p>나만의 맞춤 플레이리스트</p></li>
                            <li><p>8천만 곡 감상 가능</p></li>
                            <li><p>여러 디바이스에서 감상</p></li>
                          </ul>
                          <div className="moneybottom">
                            <div>
                              <a className="moneybottoma" href="/">
                                <span className="moneybottomb">Get Started</span>
                                <span className="moneybotton"></span>
                              </a>
                            </div>
                          </div>
                          <div className="moneyfotter">
                            <p className="moneyfottertxt">이용 약관이 적용됩니다. 아직 Premium 구독을 해본 적이 없는 사용자만 참여할 수 있습니다. 같은 주소지에 거주하는 두 사람을 위한 서비스입니다.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div>
                    <div className='user-text2 first'>
                        <div className="money">
                          <div className="moneytop">
                            <h3>Basic</h3>
                            <p>매월 7,900원(부가세 별도)</p>
                            <p>계정 1개</p>
                            <hr className="moneyline"></hr>
                          </div>
                          <ul className="moneymid">
                            <li><p>무광고로 음악 감상하기</p></li>
                            <li><p>나만의 맞춤 플레이리스트</p></li>
                            <li><p>8천만 곡 감상 가능</p></li>
                            <li><p>여러 디바이스에서 감상</p></li>
                          </ul>
                          <div className="moneybottom">
                            <div>
                              <a className="moneybottoma" href="/">
                                <span className="moneybottomb">Get Started</span>
                                <span className="moneybotton"></span>
                              </a>
                            </div>
                          </div>
                          <div className="moneyfotter">
                            <p className="moneyfottertxt">이용 약관이 적용됩니다.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="section">
              <h1>4 번째 섹션</h1>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Main;