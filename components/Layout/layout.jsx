import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = ({children}) => {
    return(
        <>
            <header>
                <Header/>
            </header>
            <main className="bg-primary px-6 lg:px-0 lg:flex lg:flex-col lg:gap-y-[44px]">
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout