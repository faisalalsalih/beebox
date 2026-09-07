import Hero from "@/components/shared/Hero"
import NewDrop from "@/components/shared/NewDrop"
import Solutions from "@/components/shared/Solutions"


const Home = () => {

  return (
    <>
      <section className="w-full h-full flex flex-col gap-20 max-w-width items-center py-4 overflow-hidden px-2">
        <Hero />
        <NewDrop />
        <Solutions />
      </section>
    </>
  )
}

export default Home
