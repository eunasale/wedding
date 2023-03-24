import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Information = () => {
    const copy = () => {
        alert('청첩장 주소가 복사됐습니다');
    };
    const WEDDING_INVITATION_URL = 'https://eunasale.github.io/wedding';
    return (
        <div className="content footer">
            <div className="shared">
                <CopyToClipboard text={WEDDING_INVITATION_URL} onCopy={copy}>
                    <button>청첩장 주소 복사하기</button>
                </CopyToClipboard>
            </div>
            <div className="copyright">
                Copyright 2023. <span>eunasale</span>. All rights reserved.
            </div>
        </div>
    );
};

export default Information;
