import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main className="flex flex-col items-center justify-center py-2 w-full max-w-width">
                <Layout />
            </main>
            <Footer />
        </>
    )
}

export default Layout
