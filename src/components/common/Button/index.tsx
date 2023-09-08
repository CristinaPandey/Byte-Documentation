import React from 'react';

type TButton = {
    color: 'primary' | 'secondary';
    icon?: React.ReactNode;
    children?: React.ReactNode;
};

const Button: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & TButton
> = ({ color, icon, children, ...props }) => {
    if (color === 'primary') {
    return (
        <button
        {...props}
        className="flex gap-3 w-fit h-12 items-center justify-center bg-[#1E3A8A] text-[#ffffff] py-2 px-6 rounded"
        >
        {children}
        {icon && <>{icon}</>}
        </button>
    );
    }

    return (
    <button
        {...props}
        className="flex w-fit h-12 items-center justify-center  text-[#242731] py-2 px-6 rounded border border-[#BBBFC1]"
    >
        {children}
        {icon && <>{icon}</>}
    </button>
    );
};

export default Button;
