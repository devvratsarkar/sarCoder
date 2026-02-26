import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import PrimaryHeader from "./components/layout/PrimaryHeader";
import PrimaryFooter from "./components/layout/PrimaryFooter";
import LoadingScreen from "./components/layout/LoadingScreen";
import HomePage from "./pages/home/HomePage";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main"
            className="min-h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PrimaryHeader />
            <HomePage />
            <PrimaryFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
