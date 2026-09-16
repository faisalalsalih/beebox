const OurStory = () => {
  return (
    <section className="w-full bg-black text-white">
      {/* Hero */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://picsum.photos/id/1074/1600/900"
          alt="Nightfall brand hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Our Story
          </h1>
          <p className="text-neutral-300 max-w-xl text-sm md:text-base">
            Built in the dark, worn in the light. This is where Nightfall began.
          </p>
        </div>
      </div>

      {/* Origin */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-20 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            The Beginning
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-5">
            Started in a small room, not a boardroom.
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Nightfall didn't start with a business plan. It started with a
            handful of hoodies, a sewing machine, and a frustration with
            streetwear that looked loud but felt cheap. We wanted something
            heavyweight, something that softened with every wash instead of
            falling apart. What began as pieces made for friends slowly
            became a label people actually asked about on the street.
          </p>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <img
            src="https://picsum.photos/id/1080/900/700"
            alt="Early design process"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Craftsmanship */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-20 items-center">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden md:order-1 order-2">
          <img
            src="https://picsum.photos/id/1060/900/700"
            alt="Fabric and stitching detail"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:order-2 order-1">
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            The Craft
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-5">
            Heavyweight fabric. Zero shortcuts.
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Every piece goes through the same obsessive checks — fabric
            weight, stitch density, the fade on the wash. We test samples on
            ourselves for weeks before anything gets a release date. If it
            doesn't feel worn-in on day one, it doesn't go out the door.
          </p>
        </div>
      </div>

      {/* Values grid */}
      <div className="px-6 md:px-16 py-20 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          What we stand for
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
              <img
                src="https://picsum.photos/id/1025/500/500"
                alt="Quality materials"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-2">Real Materials</h3>
            <p className="text-neutral-500 text-sm">
              No blends that pill after two washes. Just fabric built to last.
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
              <img
                src="https://picsum.photos/id/1041/500/500"
                alt="Small batch production"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-2">Small Batches</h3>
            <p className="text-neutral-500 text-sm">
              We drop in limited runs, not warehouses full of the same thing.
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
              <img
                src="https://picsum.photos/id/1050/500/500"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-2">Built With You</h3>
            <p className="text-neutral-500 text-sm">
              Half our pieces exist because someone in our DMs asked for them.
            </p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="px-6 md:px-16 py-24 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Still writing the story.
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-8">
          Every collection is another chapter. Thanks for being part of it
          from the beginning.
        </p>
        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors">
          Shop the Collection
        </button>
      </div>
    </section>
  );
};

export default OurStory;