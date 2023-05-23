import './css/App.css'
import {
  createBrowserRouter,
  Routes,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       {/* <Route index element={<Home />} />
//       <Route path='sudoku' element={<Sudoku />} /> */}
//     </Route>
//   )
// )

function App() {
  return (
    <Home />
    // <RouterProvider router={router} />
  )
}

export default App
