import React from 'react';

export default function Container(props)
{
    const className = "container mx-auto " + props.className;
    //Return JSX
    return (
        <div className={className} >
            { props.children }
        </div>
    );
}
