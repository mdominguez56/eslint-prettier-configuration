import reactLogo from './assets/react.svg'
import eslintLogo from "./assets/eslint.svg"
import prettierLogo from "./assets/prettier.svg"
import huskyLogo from "./assets/husky.svg"
import './App.css'

function App() {

  return (
    <div className="App">
        <h1>Vite + React</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <a href="https://eslint.org/" target="_blank">
          <img src={eslintLogo} className="logo" alt="ESlint logo" />
        </a>
        <a href="https://prettier.io/" target="_blank">
          <img src={prettierLogo} className="logo" alt="Prettier logo" />
        </a>
        <a href="https://typicode.github.io/husky/#/" target="_blank">
          <img src={huskyLogo} className="logo" alt="Husky logo" />
        </a>
      </div>
       <h1>Eslint + Prettier + Husky</h1>
    </div>
  )
}

export default App
