import React from 'react'

export const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 27C0 41.9117 12.0883 54 27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27ZM27 53C41.3594 53 53 41.3594 53 27C53 12.6406 41.3594 1 27 1C12.6406 1 1 12.6406 1 27C1 41.3594 12.6406 53 27 53ZM33 27L23 35V19L33 27Z"
                fill="white"
            />
        </svg>
    )
}
