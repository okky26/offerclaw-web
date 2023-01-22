import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ViewTextBox = ({path}) => {
    return(
        <div className="w-fit flex items-center justify-end gap-x-3 lg:p-2 lg:bg-white lg:shadow-xl lg:rounded-xl lg:border-[1px] lg:border-primary-post-cat ">
            <Link
                href={path}
                className='flex items-center justify-center font-sans-serif font-normal text-lg text-neutral-800 capitalize lg:text-2xl'
            >
                view all
            </Link>
            <div className="h-full flex items-center justify-center lg:hidden">
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size='lg'
                    color='black'
                />
            </div>
            <div className="h-full hidden items-center justify-center lg:flex">
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size='xl'
                    color='black'
                />
            </div>
        </div>
    )
}

export default ViewTextBox 