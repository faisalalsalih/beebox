import { useState } from "react";
import Button from "./Button";

const images = [
  "https://picsum.photos/id/1005/800/800",
  "https://picsum.photos/id/1011/800/800",
  "https://picsum.photos/id/1027/800/800",
  "https://picsum.photos/id/1035/800/800",
];

const BlackCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-black text-white rounded-2xl">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-16">
        {/* Left: Product Info */}
        <div className="flex flex-col justify-center gap-12">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            Nightfall <br /> Oversized Hoodie
          </h1>

          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-xl">
            A heavyweight, ultra-soft hoodie designed for comfort and style.
            Featuring a relaxed fit, subtle embroidered detailing, and a
            faded wash for that perfect worn-in look. Street-ready and built
            to stand out.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-neutral-500 line-through text-lg">
              $89.99
            </span>
            <span className="text-2xl font-semibold">$64.99</span>
          </div>

          <Button title="Shop Now" width={50}/>

        </div>

        {/* Right: Image Gallery */}
        <div className="flex flex-col gap-4">

          {/* Big active image */}
          <div className="relative w-full aspect-square h-130 rounded-xl overflow-hidden bg-neutral-900">
            <img
              src={images[activeIndex]}
              alt="Nightfall Oversized Hoodie"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            {images.map((img, index) => (
              <button
                key={img}
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-square rounded-2xl w-full h-30 overflow-hidden border-2 transition-colors cursor-pointer ${
                  activeIndex === index
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default BlackCarousel;