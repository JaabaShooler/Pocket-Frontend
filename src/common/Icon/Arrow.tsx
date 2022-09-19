import * as React from "react"
import {FC} from 'react';

interface IconProps {
    color?: string;
    transformValue?: number;
}

export const IconArrow: FC<IconProps> = ({color = "#b2b2b2", transformValue = 0}) => (
    <svg width="12" height="12" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"
         transform={`rotate(${transformValue})`} style={{transition: 'all .3s ease-in-out'}}>
        <path
            d="M8.21973 6.03027L4.99998 2.81052L1.78023 6.03027L0.719727 4.96977L4.99998 0.689524L9.28023 4.96977L8.21973 6.03027Z"
            fill={color}
        />
    </svg>
)
