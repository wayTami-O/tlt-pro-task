import Image from "next/image";

function Deadlines() {
    return (
        <>
            <div className="py-[160rem] px-[76rem]">
                <div className="bg-[#F6F7F9] rounded-[16rem] p-[44rem] h-[679rem] flex flex-col gap-[147rem] relative">
                    <p className="w-[1538rem] mons text-primary-text font-bold text-[52rem]">СОБЛЮДАЕМ СРОКИ, УКЛАДЫВАЕМСЯ В БЮДЖЕТ — ВАШ ПРОЕКТ <span className="text-blue">В НАДЕЖНЫХ</span> РУКАХ!</p>
                    <div className="flex flex-col gap-[52rem] ">
                        <button className="px-[108rem] py-[8rem] rounded-full text-white jost text-[36rem] bg-blue w-fit cursor-pointer">от 50 000 руб.</button>
                        <button className="px-[108rem] py-[8rem] rounded-full text-white jost text-[36rem] bg-blue w-fit cursor-pointer">от 20 до 50 дней</button>
                    </div>
                    <Image
                        src={'/deadlines.png'}
                        width={445}
                        height={473}
                        alt="photo"
                        className="w-[445rem] h-[473rem] absolute top-[139rem] right-[57rem]" />
                </div>
            </div>
        </>
    );
}

export default Deadlines;