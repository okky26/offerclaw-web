import Button from "@/components/Button/button"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

const NavHead = ({handler}) => {
    return(
        <section className="w-full h-[20vh] flex items-center px-6 py-8 sm:hidden">
            <Button
                type={'button'}
                style={'w-6 h-6 flex items-center justify-center'}
                content={
                    <FontAwesomeIcon
                        icon={faClose}
                        size='3x'
                        color="black"
                    />
                }
                handler={handler}
            />
            <Link
                href={'/'}
                className={`mx-auto font-sans-serif text-3xl font-bold text-neutral-900`}
            >
                OFFERCLAW
            </Link>
        </section>
    )
}

export default NavHead