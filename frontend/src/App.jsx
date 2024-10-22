// Página
import Home from './pages/Home'
import System from './pages/System'
// Componentes
import Introduction from './components/home/Introduction'
import Register from './components/home/Register'
import Login from './components/home/Login'
// Hash Router
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'

export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path='/home/*' element={<Home/>}>
          <Route index element={<Navigate to='/introducao'/>}/>
          
          <Route path='introducao/*' element={<Introduction/>}/>

          <Route path='criar-conta' element={<Register/>}/>
          <Route path='entrar' element={<Login/>}/>
        </Route>

        <Route path='/sistema/*' element={<System/>}>
          <Route index element={<h1>Pagina do sistema</h1>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}