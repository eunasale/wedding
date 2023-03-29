import React, { useEffect, useState } from 'react';
import home from '../assets/img/home.jpeg';
import heart from '../assets/img/heart.png';
import { motion } from 'framer-motion';

const WEDDING_DATE = "2023-05-06T12:30:00";
function Home() {
    const [dayText, setDayText] = useState(null);
    useEffect(() => {
        const dday = new Date(WEDDING_DATE);
        const current = new Date();
        const gap = Math.ceil((dday.getTime() - current.getTime()) / (1000 * 60 * 60 * 24));
        
        if (gap >= 0){
            setDayText(`의 결혼식 ${gap}일 전`);
        } else {
            setDayText(` 결혼한 지 ${-(gap+1)}일 째`);
        }
    }, []);

    const variants = {
        hidden: {
            rotate: 15
        },
        visible: {
            opacity: 1,
            rotate: -15,
            transition: {
                delay: 0.2,
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };
    return (
        <div className="content home">
            {/*<div className="name">
                <div className="heart">
                    <div className="tag">
                        <p>양세일</p>
                    </div>
                    <div className="icon">
                        <motion.div initial="hidden" animate="visible" variants={variants} className="small">
                            <img src={heart} />
                        </motion.div>
                    </div>
                    <div className="tag">
                        <p>고은아</p>
                    </div>
                </div>
            </div>*/}
            <div className="title">
                <img src={home} />
            </div>
            <div className="bride">
                <div>
                    신랑
                </div>
                <div>
                    신부
                </div>
            </div>
            <div className="name">
                <div>
                    양  세  일
                </div>
                <div>
                    고  은  아
                </div>
            </div>
            <div className="location">
                <p>
                    2023. 05. 06 SAT PM 12:30 <br />
                    소노캄 여수 1F 그랜드볼룸
                </p>
            </div>
            <div className="month">
                <ul>
                    <li>23년 5월</li>
                </ul>
            </div>
            <ul className="weekdays">
                <li>일</li>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li>토</li>
            </ul>
            <ul className="days">
                <li></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li><span className="active">6</span></li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li></li>
                <li></li>
                <li></li>
                <div className="day">
                - 양세일
                    <motion.div initial="hidden" animate="visible" variants={variants} className="small">
                        <img className="heartIcon" src={heart} /> 
                    </motion.div>
                고은아{dayText} -
            </div>
            </ul>
            
        </div>
    );
}

export default Home;
