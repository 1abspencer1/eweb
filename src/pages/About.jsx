import Button from "../componects/Btn/Button";
import Hero from "../componects/functions/Hero";
import { motion } from "framer-motion";
motion;

const About = () => {
  const team = [
    {
      id: 1,
      name: "Habeeb Durowoju",
      role: "Founder & CEO",
      image: "/team1.jpg",
    },
    {
      id: 2,
      name: "Janet Smith",
      role: "Creative Director",
      image: "/team2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Head of Marketing",
      image: "/team3.jpg",
    },
  ];

  return (
    <>
      {/* Reusable Hero */}
      <Hero
        title="About Our Brand"
        subtitle="Crafting timeless luxury and building trust with every piece."
        bgImage="/aimg.avif"
        primaryBtn={null}
        secondaryBtn={null}
      />

      {/* About Content */}
      <section className="py-20 bg-black text-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              Who We Are
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              At <span className="font-semibold text-yellow-400">AURUM</span>,
              we believe luxury is more than an accessory — it’s a lifestyle.
              Our journey began with a passion for timeless designs, blending
              craftsmanship, quality, and modern style.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              From watches to chains, rings, and sunglasses, each piece is
              carefully selected to reflect elegance and durability. We’re not
              just selling jewelry — we’re helping you tell your story through
              what you wear.
            </p>
            <Button label="Learn More" variant="primary" />
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-side.jpg"
              alt="About AURUM"
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Our Mission",
              text: "To inspire confidence and elegance by delivering premium accessories that stand the test of time.",
            },
            {
              title: "Our Vision",
              text: "To become a global leader in luxury fashion accessories while staying true to craftsmanship and authenticity.",
            },
            {
              title: "Our Values",
              text: "Integrity, quality, and customer satisfaction — these guide every product we create and every relationship we build.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg bg-gray-900"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-yellow-400 mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl shadow-lg p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md border-2 border-yellow-400"
                />
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
