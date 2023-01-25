import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faUser, faHouse, faBlender, faCampground, faDog, faRandom } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({iconColor,iconSize,textColor,textSize,containerHeight}) => {
    return(
        <ul className={`w-full ${containerHeight} flex flex-col items-center justify-between lg:h-[10vh] lg:flex-row lg:px-6`}>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto lg:flex-shrink">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faHeadphones}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/Tech'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    Tech
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faUser}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/Health&Wellnes'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    health & wellnes
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faBlender}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/Appliances'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    Appliances
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faHouse}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/HouseEssentials'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    house essentials + decor
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faCampground}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/Outdoor'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    Outdoor
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faDog}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/Pets'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    pets
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faRandom}
                        size={`${iconSize}`}
                        color={`${iconColor}`}
                    />
                </div>
                <Link
                    href={'/Categories/Other'}
                    className={`font-sans-serif font-bold ${textSize} ${textColor} capitalize lg:text-lg`}
                >
                    other
                </Link>
            </li>
        </ul>
    )
}

export default NavLink