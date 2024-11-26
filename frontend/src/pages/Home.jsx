// Router
import { Outlet } from 'react-router-dom'
// Imagens e ícones
import Logo from '../assets/images/logo-white.png'
import MinimizeIcon from '../assets/icons/minimizar.svg'
import CloseIcon from '../assets/icons/fechar.svg'

export default function Home(){
  return(
    <div className="home">
      <div className="home-titlebar flex items-center justify-end w-full fixed draggable bg-[transparent] z-3 left-0 top-0 right-0">
        <div className='home-titlebar-controls flex no-draggable'>
          <button className='flex items-center justify-center w-[32px] h-[30px] hover:bg-[rgba(255,255,255,0.1)] cursor-default' onClick={() => window.electron.minimizeWindow()}><img src={MinimizeIcon}/></button>
          <button className='flex items-center justify-center w-[32px] h-[30px] hover:bg-red-500 cursor-default' onClick={() => window.electron.closeWindow()}><img src={CloseIcon}/></button>
        </div>
      </div>

      <div id='container' className='flex w-[100vw] h-[100vh]'>
        <div id='container-content' className='flex items-center justify-center w-[50%] h-[100%] p-10'>
          <Outlet/>
        </div>

        <div id='container-overlay' className='flex flex-col w-[50%] h-[100%] justify-center items-center bg-gradient'>
          <img src={Logo} width={120} alt="" />
        </div>
      </div>
    </div>
  )
}