import Button from "./Button"


const SecondHero = () => {
    return (
        <>
            <section className="relative w-full max-w-width h-screen bg-black rounded-4xl overflow-hidden">

                <img src="https://images.unsplash.com/photo-1614252368727-99517bc90d7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute w-full h-full object-cover" />


                <div className="absolute w-full h-full object-cover bg-gradient-to-t from-black/80 via-black/30 to-white/20 pt-5 pb-20 pl-6 pr-2 flex items-end justify-start text-white">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl sm:text-7xl font-bold mb-2 max-w-sm">Join the Movement. Wear the Future.</h1>
                        <p className="mb-4 text-sm sm:text-md text-muted-foreground max-w-xl">Streetwear designed for those who break the mold. Limited drops, bold designs, and premium quality—don’t miss out.</p>
                        <Button title="Shop Now" width={35} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default SecondHero
