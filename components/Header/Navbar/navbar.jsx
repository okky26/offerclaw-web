import NavHead from "./NavHead/navHead";
import NavLink from "@/components/NavLink/navLink";
import TechIcon from "public/BlackIcon/tech-black.svg";
import HealthIcon from "public/BlackIcon/personal-black.svg";
import ApplianceIcon from "public/BlackIcon/appliances-black.svg";
import OutdoorIcon from "public/BlackIcon/outdoor-black.svg";
import PetsIcon from "public/BlackIcon/pets-black.svg";
import OtherIcon from "public/BlackIcon/other-black.svg";
import HouseIcon from "public/BlackIcon/house-black.svg";

const Navbar = ({handler,conditionalStyle}) => {
    return(
        <nav className={`absolute w-full h-screen z-10 top-0 bg-primary/50 backdrop-blur-lg flex flex-col items-center justify-start ${conditionalStyle} transition-transform duration-500 lg:relative lg:bg-nav lg:flex-row lg:translate-x-0 lg:h-[80px] lg:shadow-md lg:px-[150px]`}>
            <NavHead
                handler={handler}
            />
            <NavLink
                iconColor={'black'}
                textColor={'text-neutral-800'}
                iconSize={'sm'}
                textSize={'text-2xl'}
                containerHeight={'h-[75vh]'}
                icon={{
                    tech : TechIcon,
                    health : HealthIcon,
                    appliances : ApplianceIcon,
                    outdoor : OutdoorIcon,
                    pets : PetsIcon,
                    other : OtherIcon,
                    home : HouseIcon
                }}
            />
        </nav>
    )
}

export default Navbar