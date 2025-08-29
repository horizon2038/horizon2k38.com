import React from 'react';
import {twMerge} from 'tailwind-merge';

interface LogoProps {
    className?: string;
}

export default function Logo({className}: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="horizon-logo_svg___\u30EC\u30A4\u30E4\u30FC_2"
            data-name="\u30EC\u30A4\u30E4\u30FC 2"
            viewBox="0 0 15.22 28.02"
            width="36"
            height="36"
            className={twMerge(className)}
        >
            <g id="horizon-logo_svg__horizon_main">
                <g id="horizon-logo_svg__Logo">
                    <path
                        d="M13.92 13.92 2.97 24.87c-1.05 1.05-2.85.31-2.85-1.18V1.8C.12.31 1.92-.43 2.97.62l10.95 10.94c.65.65.65 1.71 0 2.36ZM15.1 14.88v12.83L8.68 21.3z"
                    />
                </g>
            </g>
        </svg>

    )
}
