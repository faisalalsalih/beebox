import image1 from "@/assets/images/arrive1.jpg"
import image2 from "@/assets/images/arrive2.jpg"
import image3 from "@/assets/images/arrive3.jpg"

const PRODUCTS = [
  {
    id: 1,
    name: "Shadow Drip",
    description: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: 86,
    originalPrice: 120,
    image: image1,
  },
  {
    id: 2,
    name: "Neon Pulse",
    description: "Heavyweight cotton tee featuring high-density neon graphics designed for nocturnal city exploration.",
    price: 64,
    originalPrice: 85,
    image: image2, // replace with image2
  },
  {
    id: 3,
    name: "Urban Shell",
    description: "Water-resistant windbreaker engineered with tactical utility pockets and a relaxed silhouette.",
    price: 140,
    originalPrice: 180,
    image: image3, // replace with image3
  },
];

const NewDrop = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-5 flex flex-col gap-8">

      {/* Heading */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">New Drops</h1>
        <p className="text-sm md:text-base font-light text-muted-foreground">
          Stand out with our latest collection — bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {PRODUCTS.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 group">

            {/* Image Container */}
            <div className="w-full aspect-[4/5] rounded-2xl relative overflow-hidden bg-muted">
              <img 
                src={product.image} 
                className="absolute inset-0 h-full w-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" 
                alt={product.name} 
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-xl font-bold uppercase tracking-wide">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              
              <div className="flex gap-3 items-center mt-1">
                <span className="text-base font-semibold">${product.price}</span>
                <span className="text-base font-medium line-through text-muted-foreground">${product.originalPrice}</span>
              </div>
            </div>

          </div>
        ))}
        
      </div>

    </section>
  )
}

export default NewDrop