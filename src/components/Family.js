import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const Family = () => {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    return (
        <div className="content family">
            <div>
                <div>
                    <div>
                        <div {...animatedItem[1]}>
                            <div className="quote"></div>
                            <div className="cursive">
                                <i>
                                    이 세상에 나와 닮은
                                    <br />
                                    쌍둥이가 있다는 것을 알게 되었습니다. <br /><br />
                                    같은 생각, 같은 느낌. <br />
                                    그런 사람이 나를 믿어주고 <br />
                                    내 편이 되어준다는 것이 참 좋습니다. <br />
                                </i>
                            </div>
                            <div className="quote back"></div>
                        </div>
                        <div {...animatedItem[2]} className="love">
                            오셔서 자리를 빛내주시면 <br />
                            더없는 축복으로 간직하겠습니다.
                        </div>
                    </div>
                </div>
                <div {...animatedItem[3]} className="intro">
                    <div>
                        <span className="parent">
                            양정용
                            <span className="dot">·</span>
                            임영남
                        </span>
                        <span className="relation">의 장남</span>
                        <span className="name">세일</span>
                    </div>
                    <div>
                        <span className="parent">
                            고석철
                            <span className="dot">·</span>
                            유옥심
                        </span>
                        <span className="relation">의 장녀</span>
                        <span className="name">은아</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;
