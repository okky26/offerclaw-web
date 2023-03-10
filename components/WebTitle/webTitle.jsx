import Link from "next/link"
import Button from "../Button/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const WebTitle = ({handler,btnStyle,fontWeight}) => {
    return(
        <section className="w-full flex items-center sm:h-auto">
            <Button
                type={'button'}
                style={`w-4 h-4 flex ${btnStyle} items-center justify-center sm:hidden`}
                handler={handler}
                content={
                    <FontAwesomeIcon
                    icon={faBars}
                    size='2xl'
                    color='white'
                />
                }
            />
            <Link
            href={'/'}
            className={`mx-auto font-sans-serif text-3xl ${fontWeight} text-primary lg:text-[64px]`}
            >
                OFFERCLAW
            </Link>

        </section>
    )
}

export default WebTitle