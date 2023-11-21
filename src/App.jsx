import Home from './views/HomePage'
// import DetailPage from './views/DetailPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
export default App
