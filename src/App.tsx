import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-slate-900 text-white">
      <div className="flex gap-8 justify-center">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-4">Vite + React</h1>
      <div className="p-8">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-slate-700 hover:border-violet-500 focus:outline focus:ring-4 focus:ring-violet-500/50 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-slate-400">
          Edit <code className="bg-slate-800 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-slate-500">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
