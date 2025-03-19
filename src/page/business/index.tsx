import Finance from "@/components/businessPage/Finance";
import HoreCa from "@/components/businessPage/HoReCa";
import Logick from "@/components/businessPage/Logick";
import Tourizm from "@/components/businessPage/Tourizm";

function BusinessPage() {
    return (
        <>
            <HoreCa />
            <Tourizm />
            <Logick />
            <Finance />
        </>
    );
}

export default BusinessPage;