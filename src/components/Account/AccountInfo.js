import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Accordion from './Accordion';

function AccountInfo({ data }) {
    let [isActive, setActive] = useState(false);

    function toggleGroomActive() {
        setActive(!isActive);
    }

    function AccordionBox({ info }) {
        return (
            <div className={isActive ? 'accordionBox plus' : 'accordionBox minus'}>
                {info.map((accountInfo, idx) => {
                    return <Accordion data={accountInfo} key={'AccordionBox' + idx} />;
                })}
            </div>
        );
    }

    return (
        <div className="accountBox">
            <div>
                <motion.button
                    initial={false}
                    className="button arrow"
                    animate={{ boxShadow: isActive ? 'inset 0 1px 1px #eee' : '0 3px 3px #ddd' }}
                    onClick={toggleGroomActive}
                >
                    {data.type}측 계좌번호
                    <div className="iconDiv">
                        <motion.div
                            className="icon"
                            initial={false}
                            animate={{ rotate: isActive ? 0 : 180 }}
                        ></motion.div>
                    </div>
                </motion.button>
            </div>
            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        {' '}
                        <AccordionBox info={data.info} />
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AccountInfo;
