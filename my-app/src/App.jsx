import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RedButton from './redButton.jsx'

function App() {
  const [count, setCount] = useState(0)
  const isLoading = false;
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <>
      <div class="flex">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hallo Test </h1>
      <div>{isLoading ? <p>Loading...</p> : <h2>Fertig geladen</h2>}</div>
      <div>
          <RedButton />
      </div>
        <p>{user.name}</p>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
    </>
  )
}

export default App
