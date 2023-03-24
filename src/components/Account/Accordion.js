import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion, useAnimationControls } from 'framer-motion';
import kakaopay from '../../assets/img/icon-kakaopay.png';

function Accordion({ data }) {
    let [isCopied, setCopied] = useState(false);
    const controls = useAnimationControls();
    const copy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    useEffect(() => {
        if (isCopied) {
            controls.start({ scale: 1.3 });
        }
    }, [controls, isCopied]);

    return (
        <motion.div className="accordion">
            <div className="accordionInfo">
                <div className="accountInfo">
                    <span className="bank">{data.account_bank}</span>
                    <span>{data.account_number}</span>
                </div>
                <span>{data.name}</span>
            </div>
            <div className="buttonWrap">
                {isCopied ? (
                    <div className="complete">
                        <motion.span animate={controls}>복사완료</motion.span>
                    </div>
                ) : (
                    <CopyToClipboard text={data.account_number} onCopy={copy}>
                        <button>복사하기</button>
                    </CopyToClipboard>
                )}
                {data.kakaopay !== '' ? (
                    <button
                        className="kakao"
                        onClick={() => {
                            window.location.href = data.kakaopay;
                        }}
                    >
                        <img src={kakaopay} />
                    </button>
                ) : null}
            </div>
        </motion.div>
    );
}

export default Accordion;
