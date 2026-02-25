import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PrimaryHeader from "./components/layout/PrimaryHeader";
import PrimaryFooter from "./components/layout/PrimaryFooter";
import LoadingScreen from "./components/layout/LoadingScreen";

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
          <main className="flex-1 px-4 py-12">
            <section className="max-w-6xl mx-auto">
              <div className="bg-primary-gradient-subtle border border-border rounded-xl p-8 text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Welcome</h1>
                <p className="text-secondary max-w-xl mx-auto">
                  Dark theme with primary <span className="text-primary">#21D5ED</span>, secondary{" "}
                  <span className="text-secondary">#7b899d</span>, and white.
                </p>
                <button
                  type="button"
                  className="mt-6 px-6 py-3 rounded-lg bg-primary-gradient text-white font-medium shadow-lg hover:opacity-90 transition-opacity"
                >
                  Primary gradient button
                </button>
              </div>
            </section>
          </main>
          <PrimaryFooter />
        </div>
      )}
    </>
  );
}
