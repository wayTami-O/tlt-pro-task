import Image from "next/image";

function Form() {
    return (
        <div className="pt-[134rem] pb-[227rem] px-[76rem]">
            <div className="bg-[#F6F7F9] rounded-[16rem] py-[56rem] px-[48rem] flex gap-[61rem]">
                <Image
                    src={'/order.png'}
                    width={671}
                    height={775}
                    alt="ww"
                    className="w-[671rem] h-[775rem]"/>
                    <div className="flex flex-col gap-[20rem] w-[882rem]">
                        <h1 className="mons font-bold text-[64rem] text-primary-text">ЖДЕМ ВАШИХ <span className="text-blue">ЗАКАЗОВ!</span></h1>
                        <form className="flex flex-col gap-[12rem] h-full">
                            <fieldset className="flex flex-col">
                                <h2 className="jost text-[24rem] text-primary-text"><span className="text-[#BA0003] pr-[8rem]">*</span>Имя</h2>
                                <input type="text" className="border-[3rem] border-[#C5DEFA] rounded-[16rem] h-[52rem] p-[8rem] text-[24rem]" />
                            </fieldset>
                            <fieldset className="flex flex-col">
                                <h2 className="jost text-[24rem] text-primary-text"><span className="text-[#BA0003] pr-[8rem]">*</span>Email</h2>
                                <input type="text" className="border-[3rem] border-[#C5DEFA] rounded-[16rem] h-[52rem] p-[8rem] text-[24rem]" />
                            </fieldset>
                            <fieldset className="flex flex-col">
                                <h2 className="jost text-[24rem] text-primary-text"><span className="text-[#BA0003] pr-[8rem]">*</span>Телефон (по желанию)</h2>
                                <input type="text" className="border-[3rem] border-[#C5DEFA] rounded-[16rem] h-[52rem] p-[8rem] text-[24rem]" />
                            </fieldset>
                            <fieldset className="flex flex-col">
                                <h2 className="jost text-[24rem] text-primary-text"><span className="text-[#BA0003] pr-[8rem]">*</span>Ваша задача</h2>
                                <textarea className="border-[3rem] border-[#C5DEFA] rounded-[16rem] h-[52rem] p-[8rem] text-[24rem]" />
                            </fieldset>
                            <button className="mt-auto rounded-[16rem] bg-blue ml-auto py-[12rem] px-[75rem] text-white text-[20rem] jost">Отправить</button>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default Form;