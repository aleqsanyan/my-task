import React from 'react'

const Field = React.forwardRef(({label, type}, ref) => {
    return (
        <div>
            <label className="label" >{label}</label>
            <input ref={ref} type={type} className="input"/>
        </div>
    )
})

export default Field