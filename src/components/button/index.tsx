import { string } from 'prop-types';
import React from 'react'

type ButtonPropsTypes = {
    type?: 'primary'| 'dashed' | 'link' | 'text',
    size?: 'large' | 'middle' | 'small',
    icon?: React.ReactNode,
    color?: string,
    children?: React.ReactNode
}

const Button = ({
    type, size, icon, color, children
}: ButtonPropsTypes) => {
    const className = `type-${type} size-${size}`

    return (
        <button
            className={`btn-type-${type}`}
            style={{color: color}}
            >
            {icon && <> {icon} </>}
            {children}
        </button>
    )
}

export default Button;