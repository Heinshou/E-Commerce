//Routes
import { Route, Routes, useParams } from "react-router-dom"
import HomeScreen from './Components/Home/HomeScreen'
import LoginScreen from "./Components/Login/LoginScreen"
import CartScreen from "./Components/Cart/CartScreen"
import ProtectedRoutes from "./Components/ProtectedRoutes"
import PurchasesScreen from "./Components/Purchases/PurchasesScreen"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {getAllProducts} from "./store/slices/producs.slice"

//Styles
import './App.css'
import HeaderScreen from "./Components/Shared/HeaderScreen"
import ProductScreen from "./Components/Products/ProductScreen"
import axios from "axios"

function App() {

  useEffect(() => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  
      const newUser = {
        firstName: "Mike",
        lastName: "Chavez",
        email: "maike@gmail.com",
        password: "pass1234",
        phone: "1234567891",
        role: "admin"
      }
  
    
    axios.post(URL, newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }, [])
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  
    const {id} = useParams()

  return (
    <div className="App">
    <HeaderScreen></HeaderScreen>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/purchases' element={<PurchasesScreen/>}/>
          </Route>
          <Route path='/product/:id' element={<ProductScreen/>}></Route>
        </Routes>
    </div>
  )
}

export default App
