import SiteInApp from "@/components/homePage/siteInApp/SiteInApp";
import HeroBlock from "../../components/homePage/HeroBlock";
import Projects from "@/components/homePage/Projects";
import Facts from "@/components/homePage/Facts";
import Clients from "@/components/homePage/Clinets";

function HomePage() {
    return (
        <>
            <HeroBlock />

            <div className="py-[92rem] w-full flex justify-center">
                <svg className="w-[60rem] h-[60rem]" width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30.019" r="30" fill="#F6F7F9"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8356 22.3796C15.2106 22.0047 15.7192 21.794 16.2496 21.794C16.7799 21.794 17.2885 22.0047 17.6636 22.3796L30.2496 34.9656L42.8356 22.3796C43.0201 22.1886 43.2408 22.0362 43.4848 21.9314C43.7288 21.8266 43.9912 21.7714 44.2568 21.7691C44.5223 21.7668 44.7857 21.8174 45.0315 21.918C45.2773 22.0185 45.5006 22.167 45.6884 22.3548C45.8761 22.5426 46.0247 22.7659 46.1252 23.0117C46.2258 23.2575 46.2764 23.5209 46.2741 23.7864C46.2718 24.052 46.2166 24.3144 46.1118 24.5584C46.007 24.8024 45.8546 25.0231 45.6636 25.2076L33.0776 37.7936C32.3275 38.5435 31.3102 38.9648 30.2496 38.9648C29.1889 38.9648 28.1717 38.5435 27.4216 37.7936L14.8356 25.2076C14.4606 24.8326 14.25 24.3239 14.25 23.7936C14.25 23.2633 14.4606 22.7547 14.8356 22.3796Z" fill="#313131"/>
                </svg>
            </div>

            <SiteInApp />

            <Projects />

            <Facts />

            <Clients />
        </>
    );
}

export default HomePage;