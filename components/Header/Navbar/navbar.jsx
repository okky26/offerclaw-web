import NavHead from "./NavHead/navHead"
import NavLink from "@/components/NavLink/navLink"

const Navbar = ({handler,conditionalStyle}) => {
    return(
        <nav className={`absolute w-full h-screen z-10 top-0 bg-primary/50 backdrop-blur-lg flex flex-col items-center justify-start ${conditionalStyle} transition-transform duration-500 lg:relative lg:bg-neomorphilg lg:flex-row lg:translate-x-0 lg:h-[80px] lg:shadow-md`}>
            <NavHead
                handler={handler}
            />
            <NavLink
                iconColor={'black'}
                textColor={'text-neutral-800'}
                iconSize={'sm'}
                textSize={'text-2xl'}
                containerHeight={'h-[75vh]'}
            />
        </nav>
    )
}

export default Navbar