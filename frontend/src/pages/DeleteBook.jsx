import { useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate,useParams } from "react-router-dom"

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  const hanleDeleteBook = () => {
    setLoading(true)
    axios.delete(`http://localhost:8000/books/${id}`)
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch((error) => {
      setLoading(false)
      alert('error')
      console.log(error)
    })
  }
  return (
    <div className="p-4">
     <BackButton />
     <h1>Delete Book</h1>
     {loading ? <Spinner /> : ''}
     <div className="flex flex-col items-start border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
       <h3>Are You sure you want to delete this book</h3>
       <button className="p-4 bg-red-600 text-white mt-8 w-full" onClick={hanleDeleteBook}>Yes Delete</button>
     </div>
    </div>
  )
}

export default DeleteBook