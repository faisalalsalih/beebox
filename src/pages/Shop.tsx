import React, { useState, useEffect, useMemo } from "react";

const PRODUCTS_PER_PAGE = 12;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Pagination States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        
        const data = await response.json();

        // Map directly over `data` (an array from FakeStore API)
        const formattedProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          image: item.image, // FakeStore uses item.image
          price: item.price,
          // Calculate a simulated 20% original price discount comparison
          originalPrice: (item.price * 1.2).toFixed(2),
          category: item.category,
        }));

        setProducts(formattedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["all", ...unique];
  }, [products]);

  // Filter products by search term and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // Calculate pagination details
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset pagination when search or filter changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-lg font-medium text-muted-foreground animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-lg font-medium text-destructive">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8">
      {/* Header */}
      <h2 className="text-3xl font-extrabold uppercase tracking-wide">
        This is Our Shop
      </h2>

      {/* Controls: Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full sm:w-80 px-4 py-2 border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full sm:w-56 px-4 py-2 border rounded-xl bg-background capitalize focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="capitalize">
              {cat === "all" ? "All Categories" : cat.replace("-", " ")}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="card-anim flex flex-col gap-3 group">
              {/* Image Container */}
              <div className="w-full aspect-[4/5] rounded-2xl relative overflow-hidden bg-muted">
                <img
                  src={
                    typeof product.image === "string"
                      ? product.image
                      : product.image.src
                  }
                  className="absolute inset-0 h-full w-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  alt={product.name}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-xl font-bold uppercase tracking-wide line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                <div className="flex gap-3 items-center mt-1">
                  <span className="text-base font-semibold">
                    ${product.price}
                  </span>
                  <span className="text-base font-medium line-through text-muted-foreground">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          No products match your criteria.
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors"
          >
            Previous
          </button>

          <span className="px-4 py-2 text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;