import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = ({children}) => {
    return(
        <>
            <header>
                <Header/>
            </header>
            <main className="bg-primary">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout