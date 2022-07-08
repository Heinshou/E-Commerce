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
import HeaderScreen from "./Components/Shared/HeaderScreen"
import ProductScreen from "./Components/Products/ProductScreen"
import FooterScreen from "./Components/Shared/FooterScreen"


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  
    const {id} = useParams()

  return (
    <div className="App">
    <HeaderScreen/>
    <main>
      <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/purchases' element={<PurchasesScreen/>}/>
          </Route>
          <Route path='/product/:id' element={<ProductScreen/>}></Route>
        </Routes>
    </main>
    <FooterScreen/>
        
    </div>
  )
}

export default App
