import Hero from "@/components/shared/Hero"
import NewDrop from "@/components/shared/NewDrop"


const Home = () => {

  return (
    <>
      <section className="w-full h-full flex flex-col gap-20 max-w-width items-center py-4 overflow-hidden px-2">
        <Hero />
        <NewDrop />
      </section>
    </>
  )
}

export default Home
