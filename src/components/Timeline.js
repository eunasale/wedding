import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Information = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="timeline">
          <h2 className="title">커플 타임라인</h2>
          <div className="outer">
            <div className="card">
              <div className="info">
                <h3 className="day">2013년 3월</h3>
                <p>대학교 새내기끼리 어색했던 첫 만남</p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h3 className="day">2018년 5월</h3>
                <p>대학교 동기들과 함께한 여수 여행<br />처음 함께 보낸 여수에서의 시간</p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h3 className="day">2019년 5월</h3>
                <p>50살까지 결혼 안했으면<br /> 우리 둘이 결혼하자는 말로 시작된 인연</p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h3 className="day">2021년 5월</h3>
                <p>서울에서 여수로 내려와 함께하는 새출발<br />같은 직업으로 같은 시간을 보내고<br /> 같은 생각을 하며 보내기 시작한 일상</p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h3 className="day">2023년 5월</h3>
                <p>6년은 친구로서, 4년은 연인으로서<br />함께한 10년의 시간<br />이제 남은 인생은 배우자로서 함께합니다!</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Information;
