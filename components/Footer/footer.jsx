import WebTitle from "../WebTitle/webTitle";
import NavLink from "../NavLink/navLink";
import Link from "next/link";

const Footer = () => {
    return(
        <section className="w-full h-screen bg-footer bg-cover bg-right lg:bg-center flex flex-col items-center justify-around lg:justify-center lg:gap-y-10 lg:h-[540px]">
            <WebTitle
                btnStyle={'hidden'}
            />
            <p className="w-3/4 text-neutral-50 font-sans-serif font-medium text-md text-center lg:text-3xl lg:w-1/2">
                You may earn a commission for purchase made through our links.
            </p>
            <NavLink
                iconColor={'white'}
                textColor={'text-neutral-50'}
                iconSize={'xs'}
                textSize={'text-lg'}
                containerHeight={'h-[50vh]'}
            />
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