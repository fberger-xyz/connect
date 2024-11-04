import React, { SVGProps } from 'react'

export default function ZapperSVG(props: SVGProps<SVGSVGElement>) {
    return (
        <svg className={props.className} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240C186.274 240 240 186.274 240 120Z"
                fill="#784FFE"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.0809 90.1769L158.689 89.7598L138.432 120.288L186.239 120.056L165.979 150.073L80.8219 150.618L101.398 120.304L53.7586 120.285L74.0809 90.1769Z"
                fill="white"
            />
        </svg>
    )
}
