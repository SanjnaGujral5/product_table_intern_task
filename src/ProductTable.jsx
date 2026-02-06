import { useEffect, useState, useRef } from "react";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
      const data = await res.json();

      setProducts(prev => [...prev, ...data.products]);

      if (data.products.length < 10) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setSkip(prev => prev + 10);
      }
    });

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore]);

  const handleEdit = (index, newTitle) => {
    const updated = [...products];
    updated[index].title = newTitle;
    setProducts(updated);
  };

  return (
    <div style={{ height: "80vh", overflowY: "auto" }}>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>

<tbody>
  {products.map((product, index) => (
    <tr key={`${product.id}-${index}`}>
      <td>
        <input
          value={product.title}
          onChange={(e) => handleEdit(index, e.target.value)}
          style={{ width: "100%", border: "none", background: "transparent" }}
        />
      </td>
      <td>{product.brand}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>{product.rating}</td>
    </tr>
  ))}
</tbody>

      </table>

      {hasMore && (
        <div ref={observerRef} style={{ textAlign: "center", padding: "10px" }}>
          Loading more...
        </div>
      )}
    </div>
  );
}

export default ProductTable;


