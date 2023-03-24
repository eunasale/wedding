import React from 'react';
import AccountInfo from './Account/AccountInfo';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const ACCOUNT_INFO = [
    {
        type: '신랑',
        info: [
            { name: '양정용', account_bank: '국민은행', account_number: '785225-01-008035', kakaopay: '' },
            { name: '임영남', account_bank: '농협', account_number: '613083-52-112229', kakaopay: '' },
            {
                name: '양세일',
                account_bank: '농협',
                account_number: '352-1495-5097-33',
                kakaopay: 'https://qr.kakaopay.com/Ej8Wsj23f'
            }
        ]
    },
    {
        type: '신부',
        info: [
            { name: '고석철', account_bank: '하나은행', account_number: '371-910476-25107', kakaopay: '' },
            { name: '유옥심', account_bank: 'SC제일은행', account_number: '187-20-262333', kakaopay: '' },
            {
                name: '고은아',
                account_bank: '하나은행',
                account_number: '137-910467-93907',
                kakaopay: 'https://qr.kakaopay.com/Ej7km6r8i'
            }
        ]
    }
];

const Account = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content account">
            <h2 className="title">마음 전하실 곳</h2>
            {ACCOUNT_INFO.map((account, idx) => {
                return <AccountInfo data={account} key={'AccountInfo' + idx} />;
            })}
        </div>
    );
};

export default Account;
