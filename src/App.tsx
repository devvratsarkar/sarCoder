import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
      {!loading && (
        <div className="min-h-screen flex flex-col">
          <PrimaryHeader />
          {/* <main> */}
            <HomePage />
          {/* </main> */}
          <PrimaryFooter />
        </div>
      )}
    </>
  );
}
