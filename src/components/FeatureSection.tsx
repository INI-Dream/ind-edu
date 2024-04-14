import React from 'react'

const FeatureSection = () => {
  return (
    <section id='feature' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 wow fadeInLeft delay-05s'>
            <div className='section-title'>
              <h2 className='head-title'>I&I EDU</h2>
              <hr className='botm-line' />
              <p className='sec-para'>
                교육그룹 아이앤아이드림의 교육 콘텐츠는 최신기술과 변화하는
                교육제도를 반영하였습니다. 현재 홈페이지는 리뉴얼 중이므로 문의
                전화를 통해 보다 자세한 상담을 권장합니다.
                <br />
                학교에 맞는 교육 상담과 컨설팅! <br />
                서울 경기 부산 울산 어디든 찾아가는 교육! <br />
                자체 제작한 교재와 콘텐츠로 새로운 교육을 선사합니다.
                <br />
                비대면 교육도 준비되어 있습니다.
              </p>
            </div>
          </div>
          <div className='col-md-9'>
            {[
              {
                iconClass: 'fa fa-paint-brush',
                title: '나를 더 나답게 "자기이해"',
                description:
                  '가장 중요한건 자신을 알아가는 것이 아닐까요?\nSelf-Leadership을 기반으로 실습과 활동이 많은 프로그램들로 구성되어 있습니다.',
              },
              {
                iconClass: 'fa fa-cogs',
                title: '진로는 역시 "진로패키지"',
                description:
                  '지루한 진로교육은 잊어라!\n진로탐색-진로설계-진로실천까지 모두 아우르는 진로패키지. 지금 바로 신청하세요!',
              },
              {
                iconClass: 'fa fa-mobile',
                title: '공부의 기본 "학습(學習)"',
                description:
                  '자기주도학습은 선택이 아니라 필수입니다.\n학습의 3대요소 동기·시간목표관리·학습방법을 강연과 실습을 통해 학습(學習)합니다.',
              },
              {
                iconClass: 'fa fa-desktop',
                title: '대입 바로잡기 "진학HADA"',
                description:
                  '변화하는 대입전형부터 모의면접 코스까지 한 번에! 미래의 눈높이가 달라지다. 정확하고 체계적인 진학HADA.',
              },
              {
                iconClass: 'fa fa-lightbulb-o',
                title: '혁신의 필수 "기업가 정신"',
                description:
                  '아이들은 지금 Free Agent시대에 살고 있다고 해도 과언이 아닙니다. 강의와 실습을 통하여 새로운 가치를 창조하는 생각과 힘을 기릅니다.',
              },
              {
                iconClass: 'fa fa-clock-o',
                title: '변화하는 "직업의 세계"',
                description:
                  '포스트코로나와 4차산업혁명시대의 정점!\n변화하는 직업들을 알아보고 직업들을 직접 체험해보세요.',
              },
            ].map((item, index) => (
              <div className='col-md-6 wow fadeInRight delay-0{2*(index+1)}s'>
                <div className='icon'>
                  <i className={item.iconClass}></i>
                </div>
                <div className='icon-text'>
                  <h3 className='txt-tl'>
                    <b>{item.title}</b>
                  </h3>
                  <p className='txt-para'>
                    {item.description.split('\n').map(line => (
                      <>
                        <br />
                        {line}
                      </>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
