import React from 'react'

export const Layout = (props: any) => {
    return (
        <div className="w-full h-screen">
            {props.children}
        </div>
    )
}
