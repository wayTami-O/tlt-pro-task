import Image from "next/image";

function TeamBlock() {
    return (
        <div className="pt-[167rem] px-[76rem]">
            <div className="flex flex-col gap-[52rem] justify-end">
                <h1 className="text-[64rem] text-primary-text font-bold uppercase">Мы готовы изменить мир с помощью <span className="text-blue">технологий!</span></h1>
                <div className="ml-auto w-[1370rem] h-[1148rem] flex gap-[58rem]">
                    <div className="w-[418rem] flex flex-col gap-[48rem]">
                        <div className="relative w-full h-[737rem] bg-[#C5DEFA] rounded-[32rem] center">
                            <Image
                                src='/team.png'
                                width={88}
                                height={88}
                                alt="photo" />
                            <div className="absolute top-[87rem] left-[0] w-[286rem] px-[18rem] py-[13rem] bg-white rounded-tr-[16rem] rounded-br-[16rem]
                                shadow-[0px_2px_4px_0px_#0403071A]
                                shadow-[0px_8px_8px_0px_#04030717]">
                                <h3 className="text-[24rem] mons font-bold text-primary-text">Имя фамилия</h3>
                                <p className="text-[24rem] jost text-primary-text/50">Должность</p>
                            </div>
                        </div>
                        <div className="w-full h-[363rem] bg-[#F6F7F9] rounded-[32rem] px-[30rem]
                            shadow-[0px_2px_4px_0px_#0403071A]
                            shadow-[0px_8px_8px_0px_#04030717] center">
                                <p className="text-[32rem] mons font-bold text-primary-text uppercase">2/3 бэкенд-разработчиков — <span className="text-blue">senior</span> </p>
                        </div>
                    </div>
                    <div className="w-[418rem] flex flex-col gap-[48rem]">
                        <div className="w-full h-[541rem] bg-[#F6F7F9] rounded-[32rem] px-[30rem]
                            shadow-[0px_2px_4px_0px_#0403071A]
                            shadow-[0px_8px_8px_0px_#04030717] center">
                                <p className="text-[32rem] mons font-bold text-primary-text uppercase">60% руководителей имеют сертификаты <span className="text-blue">pme</span></p>
                        </div>
                        <div className="relative w-full h-[559rem] bg-[#C5DEFA] rounded-[32rem] center">
                            <Image
                                src='/team.png'
                                width={88}
                                height={88}
                                alt="photo" />
                            <div className="absolute top-[87rem] right-[0] w-[286rem] px-[18rem] py-[13rem] bg-white rounded-tl-[16rem] rounded-bl-[16rem]
                                shadow-[0px_2px_4px_0px_#0403071A]
                                shadow-[0px_8px_8px_0px_#04030717]">
                                <h3 className="text-[24rem] mons font-bold text-primary-text text-end">Имя фамилия</h3>
                                <p className="text-[24rem] jost text-primary-text/50 text-end">Должность</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-[418rem] flex flex-col gap-[48rem]">
                        <div className="relative w-full h-[363rem] bg-[#C5DEFA] rounded-[32rem] center">
                            <Image
                                src='/team.png'
                                width={88}
                                height={88}
                                alt="photo" />
                            <div className="absolute top-[87rem] left-[0] w-[286rem] px-[18rem] py-[13rem] bg-white rounded-tr-[16rem] rounded-br-[16rem]
                                shadow-[0px_2px_4px_0px_#0403071A]
                                shadow-[0px_8px_8px_0px_#04030717]">
                                <h3 className="text-[24rem] mons font-bold text-primary-text">Имя фамилия</h3>
                                <p className="text-[24rem] jost text-primary-text/50">Должность</p>
                            </div>
                        </div>
                        <div className="w-full h-[737rem] bg-[#F6F7F9] rounded-[32rem] px-[30rem]
                            shadow-[0px_2px_4px_0px_#0403071A]
                            shadow-[0px_8px_8px_0px_#04030717] center">
                                <p className="text-[32rem] mons font-bold text-primary-text uppercase">1/2 мобильных разработчиков c сертификатом <span className="text-blue">google</span></p>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    );
}

export default TeamBlock;