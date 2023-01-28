import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = ({children}) => {
    return(
        <>
            <header>
                <Header/>
            </header>
            <main className="bg-primary flex flex-col gap-y-8 px-6 py-6 lg:pb-10 lg:px-0 lg:pt-0 lg:flex lg:flex-col lg:gap-y-[44px]">
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout