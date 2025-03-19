import Image from "next/image";
import Button from "../common/button";

const arrayProjects: string[] = [
    "Название",
    "Название",
    "Название",
    "Название"
]

function Projects() {
    return (
        <div className="py-[72rem] px-[76rem] bg-gray">
            <div className="px-[78rem] py-[81rem] flex flex-col gap-[76rem]">
                <div className="flex gap-[76rem]">
                    {
                        arrayProjects.map((el, index) => {
                            return (
                                <div key={index} className="w-full px-[36rem] pb-[23rem] pt-[36rem] h-[453rem] flex flex-col justify-between items-center rounded-[16rem]
                                    shadow-[0px_2px_4px_0px_#0403071A]
                                    shadow-[0px_8px_8px_0px_#04030717]">
                                    <Image 
                                        src='/projectsImg.png'
                                        alt="name"
                                        width={264}
                                        height={315}
                                        className="w-[264rem] h-[315rem]"
                                    />
                                    <p className="text-[40rem] text-center text-primary-text">{el}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full center">
                    <Button>Подробнее</Button>
                </div>
            </div>
        </div>
    );
}

export default Projects;