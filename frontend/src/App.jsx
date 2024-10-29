import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import { ShowBook } from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Home />} />
     <Route path='/books/create' element={<CreateBooks />} />
     <Route path='/books/details/:id' element={<ShowBook />} />
     <Route path='/books/edit/:id' element={<EditBook />} />
     <Route path='/books/delete/:id' element={<DeleteBook />} />
    </>
  )
)
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App