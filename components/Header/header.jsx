import WebTitle from "../WebTitle/webTitle"
import SearchBar from "./SearchBar/searchBar"
import Navbar from "./Navbar/navbar"
import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <section className="w-full h-[20vh] bg-header bg-cover bg-center px-6 py-8 flex flex-col items-center justify-center gap-y-4 lg:h-[366px] lg:gap-y-14">
                <WebTitle
                    handler={toggleHandler}
                    fontWeight={'font-bold'}
                />
                <SearchBar/>
            </section>
            <Navbar
                handler={toggleHandler}
                conditionalStyle={!isOpen ? "-translate-x-full" : "translate-x-0"}
            />
        </>
    )
}

export default Header