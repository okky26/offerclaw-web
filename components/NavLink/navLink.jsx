import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faUser, faHouse, faBlender, faCampground, faDog, faRandom } from "@fortawesome/free-solid-svg-icons";

const NavLink = () => {
    return(
        <ul className="w-full h-[75vh] flex flex-col items-center justify-between lg:h-[15vh] lg:flex-row lg:px-6">
            <li className="w-3/5 h-full flex items-center justify-center gap-x-3 lg:w-auto lg:flex-shrink">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faHeadphones}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/Tech'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-xl'
                >
                    Tech
                </Link>
            </li>
            <li className="w-3/4 h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faUser}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/Health&Wellnes'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-lg'
                >
                    health & wellnes
                </Link>
            </li>
            <li className="w-3/5 h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faBlender}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/Appliances'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-xl'
                >
                    Appliances
                </Link>
            </li>
            <li className="w-full h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faHouse}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/HouseEssentials'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-lg'
                >
                    house essentials + decor
                </Link>
            </li>
            <li className="w-3/5 h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faCampground}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/Outdoor'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-xl'
                >
                    Outdoor
                </Link>
            </li>
            <li className="w-3/5 h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faDog}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/Pets'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-xl'
                >
                    pets
                </Link>
            </li>
            <li className="w-3/5 h-full flex items-center justify-center gap-x-3 lg:w-auto">
                <div className="w-10 h-10 flex items-center justify-center lg:w-5 lg:h-5">
                    <FontAwesomeIcon
                        icon={faRandom}
                        size='xl'
                        color="black"
                    />
                </div>
                <Link
                    href={'/Categories/Other'}
                    className='font-sans-serif font-bold text-2xl text-neutral-800 capitalize lg:text-xl'
                >
                    other
                </Link>
            </li>
        </ul>
    )
}

export default NavLink