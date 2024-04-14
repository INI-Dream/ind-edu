import React from 'react'
import '../styles/Main.scss'

const InfoSection = () => {
  return (
    <section
      className='section-padding parallax bg-image-2 section wow fadeIn delay-08s'
      id='cta-2'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='cta-txt'>
              <h3>현재 모든 온라인 서비스는 리뉴얼 중입니다.</h3>
              <p>
                아이앤아이드림은 에듀테크뿐만 아니라 각종 심리검사와
                문화·여가생활 서비스 플랫폼을 제공합니다.
              </p>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <a
              href='https://www.youtube.com/channel/UCuSrAzhKXuf-YyIbVOj__GA'
              className='btn btn-submit'
            >
              구독하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
