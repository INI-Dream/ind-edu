import React from 'react'

// Define an array for portfolio items to make the code cleaner and more maintainable
const portfolioItems = [
  {
    id: 'KFreeTest',
    link: 'https://play.google.com/store/apps/details?id=com.knowledgeware.modelexecutor80.KFreeTest_2855582783',
    image: 'img/port01.jpg',
  },
  {
    id: 'EFreeTest',
    link: 'https://play.google.com/store/apps/details?id=com.knowledgeware.modelexecutor80.EFreeTest_3488644536',
    image: 'img/port02.jpg',
  },
  {
    id: 'quiz',
    link: 'https://play.google.com/store/apps/details?id=com.knowledgeware.modelexecutor80.quiz_739274788',
    image: 'img/port03.jpg',
  },
  {
    id: 'port04',
    link: '',
    image: 'img/port04.jpg',
  },
  {
    id: 'port05',
    link: '',
    image: 'img/port05.jpg',
  },
  {
    id: 'port06',
    link: '',
    image: 'img/port06.jpg',
  },
]

const PortfolioSection = () => {
  return (
    <section id='portfolio' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-12'>
            <div className='section-title'>
              <h2 className='head-title'>I&I APP Service</h2>
              <hr className='botm-line' />
              <p className='sec-para'>
                I&I APP SERVICE는 Mind Check 서비스와 대상 맞춤형 Storytelling
                심리검사 개발을 통해 사용자 맞춤형 여가 서비스를 제공하는
                플랫폼입니다. <br />
                생방송 사연나눔 이벤트와 도서추천부터 여행패키지까지 다양한
                서비스를 맘껏 누리세요. <br />
                이유있는 선택! 합리적인 가격! 친절한 개인맞춤 서비스! <br />
                (현재는 테스트버전이며 모두 무료로 이용하실 수 있습니다.)
              </p>
            </div>
          </div>
          <div className='col-md-9 col-sm-12'>
            {portfolioItems.map(item => (
              <div
                className='col-md-4 col-sm-6 padding-right-zero'
                key={item.id}
              >
                <div className='portfolio-box design'>
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <img src={item.image} alt='' className='img-responsive' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
