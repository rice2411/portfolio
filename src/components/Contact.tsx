"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+84776750418"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +84 (0) 77 675 0418<span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:john@doe.com"
                className="text-xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                minhrice.dev@gmail.com<span className="text-gray-500">↗</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Office</p>
              <address className="text-xl not-italic leading-relaxed">
                Rikkeisoft Huế, 62 Tố Hữu
                <br />
                Thành phố Huế
                <br />
                Việt Nam
              </address>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.248392999804!2d107.6043112759273!3d16.462955528775737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a18c768a34bb%3A0x740caa339caf3e01!2sRikkeisoft%20Hu%E1%BA%BF!5e0!3m2!1svi!2s!4v1731319772762!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
