import { AppStack } from "./SiteInApp";

function Card({ title, logo }: AppStack) {
    return (
        <div className="w-full h-[249rem] rounded-[16rem] bg-blue center">
            <div className="flex flex-col gap-[8rem]">
                {logo}
                <p className="text-[24rem] jost text-gray text-center">{title}</p>
            </div>
        </div>
    );
}

export default Card;