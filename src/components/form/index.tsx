import React from 'react'

type FormPropsTypes = {
    type?: 'primary'| 'dashed' | 'link' | 'text',
    size?: 'large' | 'middle' | 'small',
    icon?: React.ReactNode,
    color?: string,
    children?: React.ReactNode
}

const Form = ({
    type, size, icon, color, children
}: FormPropsTypes) => {
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

export default Form;