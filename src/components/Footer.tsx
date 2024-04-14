import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='container'>
        <div className='footer-container'>
          <div className='footer-container-child'>
            <div className='footer-container'>
              <img
                src='img/Logo.png'
                alt=''
                className='footer-container-child-img'
              />
            </div>
            <address>
              <span>아이앤아이드림 |</span>
              <span>대표자 : 조지훈 |</span>
              <span>사업자번호 : 574-34-00883 |</span>
              <span>근무시간 : AM.09 - PM.6 (주말 및 공휴일 휴무) |</span>
              <span>대표메일 : inidream20@gmail.com</span>
              <br />
              <div className='footer-container'>
                <span>서울시 서초구 주흥로 13길 13-1 (반포동)|</span>
                <span>대표전화 : 070-8277-4970</span>
              </div>
            </address>
          </div>
        </div>

        <div className='row'>
          <div className='footer-container'>
            <div className='col-sm-7 footer-copyright'>
              © 아이앤아이드림 All rights reserved
              <div className='credits'>
                Designed by <a href='https://www.inidream.net'>INI DREAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
