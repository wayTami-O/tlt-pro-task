import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

function Button({children}: ButtonProps) {
    return (
        <button className="w-fit px-[32rem] py-[16rem] rounded-[16rem] bg-blue text-white text-[20rem] jost center cursor-pointer">
            {children}
        </button>
    );
}

export default Button;