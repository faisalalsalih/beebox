import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main className="flex flex-col items-center justify-center py-2 w-full">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
