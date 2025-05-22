import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { Youtube } from "lucide-react";

const Showcases = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
  };

  return (
    <section id="showcases" className="py-20 section-gradient-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-1 bg-zerion-purple mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {siteConfig.showcases.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {siteConfig.showcases.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.showcases.videos.map((video) => (
            <motion.div
              key={video.id}
              variants={item}
              className="showcase-card bg-zerion-black-light rounded-xl overflow-hidden shadow-xl border border-zerion-purple/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:border-zerion-purple/50"
            >
              <div className="aspect-video relative group">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Youtube className="w-16 h-16 text-white/70" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Showcases;