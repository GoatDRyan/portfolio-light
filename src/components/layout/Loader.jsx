import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-border border-t-primary" />
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-text-muted"
        >
          Ryan Mumbata
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;
