import tailwindConfig from 'tailwind.config.cjs'
import resolveConfig from 'tailwindcss/resolveConfig'

const twConfig = resolveConfig(tailwindConfig)

function App() {
  return <div>{JSON.stringify(twConfig)}</div>
}

export default App
