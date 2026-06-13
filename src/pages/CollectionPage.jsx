import React from "react";
import { useParams, Link } from "react-router-dom";

const collections = [
  { id: "1", title: "Luxury Watches", image: "/lw.avif" },
  { id: "2", title: "Gold Chains", image: "/gc.avif" },
  { id: "3", title: "Diamond Rings", image: "/dr.avif" },
  { id: "4", title: "Custom Pieces", image: "/cs.avif" },
];

const CollectionPage = () => {
  const { id } = useParams();
  const item = collections.find((c) => c.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Collection not found
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">{item.title}</h1>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
          <div className="p-6">
            <p className="text-gray-300 mb-4">A preview of the collection. Items will be loaded from the backend in the final integration.</p>
            <Link to="/shop" className="inline-block px-4 py-2 bg-yellow-400 text-black rounded">Browse Shop</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
