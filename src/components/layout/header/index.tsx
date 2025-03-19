import { links, linksType } from "@/common/constants";
import Link from "next/link";

interface navButtonInt {
    link: string,
    title: string
}

function Header() {

    const arrayLink: navButtonInt[] =  [
        {
            link: links.index,
            title: 'Главная'
        },
        {
            link: links.business,
            title: 'Бизнес-домены',
        },
        {
            link: links.ytp,
            title: 'Технологии',
        },
        {
            link: links.portfolio,
            title: 'Портфолио',
        },
        {
            link: links.team,
            title: 'Наша команда'
        },
        {
            link: links.process,
            title: 'Разработка'
        },
        {
            link: links.clients,
            title: 'Клиенты'
        }
    ]

    return (
        <div className="px-[76rem] w-full pt-[49rem]">
            <header className="w-full h-[69rem] px-[54rem] bg-gray rounded-[12rem] flex justify-between">
                <nav className="flex items-center h-full">
                    <ul className="flex items-center gap-[80rem] h-full">
                        {
                            arrayLink.map((el, index) => {
                                return <Link key={index} href={el.link} className="jost text-[20rem]">{el.title}</Link>
                            })
                        }
                        
                    </ul>
                </nav>
                <Link 
                    href={links.order}
                    className="center w-[149rem] h-full bg-blue text-white jost text-[28rem]">
                    Заказать
                </Link>
            </header>
        </div>
    );
}

export default Header;