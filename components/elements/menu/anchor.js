import React from 'react';
import Link from "next/link";

export default function Anchor(props)
{
    const {to} = props;
    return (
        <Link
            href={to}
            className="font-medium text-gray-500 hover:text-gray-900">
            { props.children }
        </Link>
    )
}
