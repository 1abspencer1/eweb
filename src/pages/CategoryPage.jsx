import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../componects/functions/data";

const CategoryPage = () => {
  const { name } = useParams();
  const decoded = decodeURIComponent(name);

  // show products matching category (placeholder behavior)
  const items = products.filter((p) => p.category === decoded);

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">{decoded}</h1>

        {items.length === 0 ? (
          <p className="text-gray-300">No items found for this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {items.map((p) => (
              <div key={p.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-yellow-400 font-semibold">{p.title}</h3>
                  <p className="text-gray-300">₦{p.price}</p>
                  <Link to={`/product/${p.id}`} className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black rounded">View</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
