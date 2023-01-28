import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faHeadphones, faUser, faHouse, faBlender, faCampground, faDog, faRandom } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({icon,textColor,textSize,containerHeight}) => {
    
    return(
        <ul className={`w-full ${containerHeight} flex flex-col items-center justify-between lg:h-[10vh] lg:flex-row lg:px-6`}>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto lg:flex-shrink">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.tech.src}
                        alt={'tech-icon'}
                    />
                </div>
                <Link
                    href={'/Categories/Tech'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    Tech
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.health.src}
                        alt={'tech-icon'}
                    />
                </div>
                <Link
                    href={'/Categories/Health&Wellnes'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    health & wellnes
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.appliances.src}
                        alt={'tech-icon'}
                    />
                </div>
                <Link
                    href={'/Categories/Appliances'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    Appliances
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.home.src}
                        alt={'icon'}
                    />
                </div>
                <Link
                    href={'/Categories/HouseEssentials'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    house essentials + decor
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.outdoor.src}
                        alt={'tech-icon'}
                    />
                </div>
                <Link
                    href={'/Categories/Outdoor'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    Outdoor
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.pets.src}
                        alt={'tech-icon'}
                    />
                </div>
                <Link
                    href={'/Categories/Pets'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    pets
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <Image
                        width={20}
                        height={20}
                        src={icon.other.src}
                        alt={'tech-icon'}
                    />
                </div>
                <Link
                    href={'/Categories/Other'}
                    className={`font-poppins font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    other
                </Link>
            </li>
        </ul>
    )
}

export default NavLink