import { StackMobile } from "./ModernTech";

function Card({title, logo, li}: StackMobile) {
    return (
        <div className="w-[277rem] h-[222rem] rounded-[16rem] 
            shadow-[0px_2px_4px_0px_#0403071A]
            shadow-[0px_8px_8px_0px_#04030717]
            pt-[20rem] pl-[16rem] flex flex-col gap-[24rem]">
            <div className="flex items-center gap-[8rem] w-[192rem]">
                {logo}
                <p className="text-[24rem] mons font-bold text-primary-text">{title}</p>
            </div>
            <ul className="list-disc list-outside pl-[30rem] w-[221rem]">
                {
                    li.map((el, index) => {
                        return <li key={index} className="jost text-primary-text text-[20rem]">{el}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Card;