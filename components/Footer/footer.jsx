import WebTitle from "../WebTitle/webTitle";
import NavLink from "../NavLink/navLink";
import Link from "next/link";
import TechIcon from "public/WhiteIcon/tech-white.svg";
import HealthIcon from "public/WhiteIcon/personal-white.svg";
import ApplianceIcon from "public/WhiteIcon/appliances-white.svg";
import OutdoorIcon from "public/WhiteIcon/outdoor-white.svg";
import PetsIcon from "public/WhiteIcon/pets-white.svg";
import OtherIcon from "public/WhiteIcon/other-white.svg";
import HouseIcon from "public/WhiteIcon/house-white.svg";


const Footer = () => {
    return(
        <section className="w-full h-screen bg-footer bg-cover bg-right lg:bg-center flex flex-col items-center justify-around lg:justify-center lg:pt-3 lg:gap-y-12 lg:h-[540px]">
            <WebTitle
                btnStyle={'hidden'}
                fontWeight={'font-normal'}
            />
            <p className="w-3/4 text-neutral-50 font-mulish font-medium capitalize text-xl text-center lg:text-2xl lg:w-1/2">
                we may earn a commission for purchase made through our links.
            </p>
            <div className="w-full lg:px-[145px]">
                <NavLink
                    textColor={'text-neutral-50'}
                    textSize={'text-lg'}
                    containerHeight={'h-[50vh]'}
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
            </div>
            <div className="w-full flex items-center justify-evenly lg:justify-end lg:gap-x-10 lg:pr-8">
                <Link
                    href={'/'}
                    className={'text-xl text-neutral-50 font-sans-serif'}
                >
                    Terms & Conditions
                </Link>
                <Link
                    href={'/'}
                    className={'text-xl text-neutral-50 font-sans-serif'}
                >
                    Privacy Policy
                </Link>
            </div>
        </section>
    )
}

export default Footer