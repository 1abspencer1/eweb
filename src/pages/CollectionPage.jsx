// src/pages/CollectionPage.jsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
motion;

const collections = [
  {
    id: "1",
    slug: "watches",
    title: "Luxury Watches",
    tagline: "Timepieces, refined.",
    description:
      "A curated selection of mechanical and quartz timepieces — engineered for precision, finished for presence.",
    image: "/lw.avif",
    pieces: 24,
  },
  {
    id: "2",
    slug: "chains",
    title: "Gold Chains",
    tagline: "Weight you can feel.",
    description:
      "Solid gold links in classic and contemporary cuts — Cuban, rope, box, and franco — finished by hand.",
    image: "/gc.avif",
    pieces: 18,
  },
  {
    id: "3",
    slug: "rings",
    title: "Diamond Rings",
    tagline: "Brilliance, set in stone.",
    description:
      "Ethically sourced diamonds in solitaire, halo, and bespoke settings — designed to last generations.",
    image: "/dr.avif",
    pieces: 16,
  },
  {
    id: "4",
    slug: "custom",
    title: "Custom Pieces",
    tagline: "Made for you, only.",
    description:
      "A private commission process. Share your vision; we sketch, refine, and craft a one-of-one piece.",
    image: "/cs.avif",
    pieces: 9,
  },
];

// Sample sub-items per collection. Replace with backend data later.
const collectionItems = {
  watches: [
    { id: "w1", name: "Chronograph Noir", price: 1850000, image: "/lw.avif", tag: "Mechanical" },
    { id: "w2", name: "Heritage Gold 39", price: 2200000, image: "/lw.avif", tag: "Automatic" },
    { id: "w3", name: "Diver Pro 300m", price: 1450000, image: "/lw.avif", tag: "Sport" },
    { id: "w4", name: "Skeleton Tourbillon", price: 4600000, image: "/lw.avif", tag: "Limited" },
    { id: "w5", name: "Minimal Dress 36", price: 980000, image: "/lw.avif", tag: "Quartz" },
    { id: "w6", name: "Pilot GMT", price: 1720000, image: "/lw.avif", tag: "Automatic" },
  ],
  chains: [
    { id: "c1", name: "Cuban Link 10mm", price: 1250000, image: "/gc.avif", tag: "Cuban" },
    { id: "c2", name: "Rope Chain 6mm", price: 720000, image: "/gc.avif", tag: "Rope" },
    { id: "c3", name: "Franco Heavy", price: 1480000, image: "/gc.avif", tag: "Franco" },
    { id: "c4", name: "Box Chain 4mm", price: 540000, image: "/gc.avif", tag: "Box" },
    { id: "c5", name: "Figaro Classic", price: 890000, image: "/gc.avif", tag: "Figaro" },
    { id: "c6", name: "Iced Cuban", price: 2100000, image: "/gc.avif", tag: "Iced" },
  ],
  rings: [
    { id: "r1", name: "Solitaire 1.2ct", price: 1950000, image: "/dr.avif", tag: "Solitaire" },
    { id: "r2", name: "Halo Brilliant", price: 2350000, image: "/dr.avif", tag: "Halo" },
    { id: "r3", name: "Eternity Band", price: 1280000, image: "/dr.avif", tag: "Band" },
    { id: "r4", name: "Three Stone", price: 2780000, image: "/dr.avif", tag: "Trilogy" },
    { id: "r5", name: "Signet Gold", price: 860000, image: "/dr.avif", tag: "Signet" },
    { id: "r6", name: "Pavé Cushion", price: 2480000, image: "/dr.avif", tag: "Pavé" },
  ],
  custom: [
    { id: "x1", name: "Bespoke Pendant", price: 0, image: "/cs.avif", tag: "Commission" },
    { id: "x2", name: "Engraved Ring", price: 0, image: "/cs.avif", tag: "Commission" },
    { id: "x3", name: "Custom Chain", price: 0, image: "/cs.avif", tag: "Commission" },
    { id: "x4", name: "Heirloom Restyle", price: 0, image: "/cs.avif", tag: "Restyle" },
  ],
};

const formatNGN = (n) =>
  new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(n);

const CollectionPage = () => {
  const { id } = useParams();
  const item = collections.find((c) => c.id === id);
  const [imgLoaded, setImgLoaded] = useState(false);

  const items = useMemo(
    () => (item ? collectionItems[item.slug] || [] : []),
    [item]
  );

  if (!item) {
    return (
      <section className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-300/80 mb-4">
            404 — Not Found
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif mb-4">
            Collection not found
          </h1>
          <p className="text-neutral-400 mb-8">
            The collection you're looking for has moved or no longer exists.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 text-[11px] uppercase tracking-[0.25em] border border-neutral-700 hover:border-amber-300/60 hover:text-amber-300 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950 text-neutral-100 min-h-screen"
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8">
        <nav className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          <Link to="/" className="hover:text-amber-300 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-neutral-700">/</span>
          <Link to="/shop" className="hover:text-amber-300 transition-colors">
            Collections
          </Link>
          <span className="mx-2 text-neutral-700">/</span>
          <span className="text-neutral-300">{item.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-stretch">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-sm overflow-hidden bg-neutral-900 group"
          >
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] max-h-[62vh]">
              {!imgLoaded && (
                <div className="absolute inset-0 animate-pulse bg-neutral-900" />
              )}
              <img
                src={item.image}
                alt={item.title}
                onLoad={() => setImgLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.25em] bg-neutral-950/70 backdrop-blur border border-neutral-700/60">
                Collection
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between bg-neutral-900/60 border border-neutral-800/80 rounded-sm p-6 sm:p-8"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-amber-300/80 mb-3">
                The House Collection
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mb-3">
                {item.title}
              </h1>
              <p className="text-neutral-400 italic mb-6">{item.tagline}</p>

              <div className="h-px w-12 bg-amber-300/60 mb-6" />

              <p className="text-neutral-300 leading-relaxed text-[15px] mb-8">
                {item.description}
              </p>

              <dl className="grid grid-cols-3 gap-4 text-center mb-8">
                <div className="border border-neutral-800 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Pieces
                  </dt>
                  <dd className="text-base mt-1">{item.pieces}</dd>
                </div>
                <div className="border border-neutral-800 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Origin
                  </dt>
                  <dd className="text-base mt-1">In-house</dd>
                </div>
                <div className="border border-neutral-800 py-3">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Edition
                  </dt>
                  <dd className="text-base mt-1">Limited</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="flex-1 text-center px-6 py-3 text-[11px] uppercase tracking-[0.25em] bg-amber-300 text-neutral-950 hover:bg-amber-200 transition-colors"
              >
                Browse Shop
              </Link>
              <Link
                to="/contact"
                className="flex-1 text-center px-6 py-3 text-[11px] uppercase tracking-[0.25em] border border-neutral-700 text-neutral-300 hover:border-amber-300/60 hover:text-amber-300 transition-colors"
              >
                Private Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Items grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-300/80 mb-2">
              Featured
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl">
              From the {item.title} edit
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 hidden sm:block">
            {items.length} pieces
          </span>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 border border-neutral-800 rounded-sm">
            <p className="text-neutral-400">No pieces available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {items.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden bg-neutral-900 aspect-[4/5] rounded-sm">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/0 to-transparent opacity-90" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] bg-neutral-950/70 backdrop-blur border border-neutral-700/60">
                    {p.tag}
                  </div>
                </div>

                <div className="pt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[15px] text-neutral-100 line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="text-sm text-amber-300/90 mt-1">
                      {p.price > 0 ? `₦${formatNGN(p.price)}` : "On request"}
                    </p>
                  </div>
                  <Link
                    to="/shop"
                    className="shrink-0 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-neutral-300 border border-neutral-700 hover:border-amber-300/50 hover:text-amber-300 transition-colors duration-300"
                  >
                    View
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-16 border-t border-neutral-800 pt-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-300/80 mb-3">
            Looking for something else?
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl mb-6">
            Explore the full house
          </h3>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 text-[11px] uppercase tracking-[0.25em] bg-amber-300 text-neutral-950 hover:bg-amber-200 transition-colors"
          >
            Browse all collections
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CollectionPage;
