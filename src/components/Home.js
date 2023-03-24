import React, { useEffect, useState } from 'react';
import main from '../assets/img/main_new.jpeg';
import heart from '../assets/img/heart.png';
import { motion } from 'framer-motion';

function Home() {
    const [dayText, setDayText] = useState(null);
    useEffect(() => {
        const dday = new Date("2023-05-06T03:30:00Z");
        const current = new Date();
        const gap = Math.ceil((dday.getTime() - current.getTime()) / (1000 * 60 * 60 * 24));
        
        if (gap >= 0){
            setDayText(`결혼식까지 ${gap}일 남았습니다.`);
        } else {
            setDayText(`결혼한 지 ${-gap}일 지났습니다.`);
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
            <div className="name">
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
            </div>
            <div className="title">
                <img src={main} />
            </div>
            <div className="location">
                <p>
                    2023. 05. 16. 토요일 낮 12:30 <br />
                    소노캄 여수
                </p>
            </div>
            <div className="day">
                <p> {dayText} </p>
            </div>
        </div>
    );
}

export default Home;
