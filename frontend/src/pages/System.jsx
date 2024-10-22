import Logo from '../assets/images/titlebar.png'
import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MinimizeIcon, MaximizeIcon, CloseIcon} from '../assets/icons/icons'
import menuData from '../data/menu'

export default function System(){
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const index = menuData.findIndex(item => item.route === location.pathname);
    setActiveItem(index);
  }, [location.pathname]);

  function handleClick(i){
    if(activeItem === i){
      setActiveItem(null)
    } else{
      setActiveItem(i)
    }
  }
  return(
    <div id="sistema" className="flex flex-col w-[100vw] h-[100vh]">
      <div id="titlebar" className="flex items-center justify-between w-full h-[35px] pl-4 draggable bg-purple-500">
        <div id='titlebar-esquerda' className='flex h-full gap-6 items-center justify-center'>
          <div className='flex items-center gap-4'>
            <i className='fa-solid fa-bars text-white'></i>
            <img src={Logo} alt="Logo" width="80"/>
          </div>

          <div className='h-[16px] ml-[11px] bg-[rgba(255,255,255,.35)] w-[1px] rounded-full'></div>

          <div className='flex h-full items-center no-draggable font-nunito'>
            <a href="#" className="h-full px-[11px] flex items-center text-white hover:bg-[rgba(255,255,255,.7)] hover:text-black text-[13.3px] font-[500]">App</a>
            <a href="#" className="h-full px-[11px] flex items-center text-white hover:bg-[rgba(255,255,255,.7)] hover:text-black text-[13.3px] font-[500]">Tema</a>
            <a href="#" className="h-full px-[11px] flex items-center text-white hover:bg-[rgba(255,255,255,.7)] hover:text-black text-[13.3px] font-[500]">Layout</a>
            <a href="#" className="h-full px-[11px] flex items-center text-white hover:bg-[rgba(255,255,255,.7)] hover:text-black text-[13.3px] font-[500]">Definições</a>
          </div>
        </div>

        

        

        <div id='titlebar-direita' className='flex items-center gap-6'>
          <div className='flex text-white text-[20px] gap-3'>
            <i class="fa-regular fa-circle-user"></i>
            <i class="fa-regular fa-moon"></i>
          </div>
          <form action="" className='flex items-center relative'>
            <i className='fa-solid fa-search text-gray-400 absolute left-[10px] z-3 text-[13px]'></i>
            <input type="text" placeholder='Pesquisar' className='rounded-full px-[28px] py-[2px] text-[14px]'/>
          </form>
          <div className='h-[16px] ml-[11px] bg-[rgba(255,255,255,.35)] w-[1px] rounded-full'></div>

          <div id="titlebar-controls" className='flex no-draggable'>
            <button className='flex items-center justify-center w-[32px] h-[30px] hover:bg-[rgba(255,255,255,0.1)] cursor-default' onClick={() => window.electron.minimizeWindow()}><img src={MinimizeIcon}/></button>
            <button className='flex items-center justify-center w-[32px] h-[30px] hover:bg-red-500 cursor-default' onClick={() => window.electron.closeWindow()}><img src={MaximizeIcon}/></button>
            <button className='flex items-center justify-center w-[32px] h-[30px] hover:bg-red-500 cursor-default' onClick={() => window.electron.closeWindow()}><img src={CloseIcon}/></button>
          </div>
        </div>
      </div>

      <div id='container' className='flex w-full h-[calc(100vh-38px)]'>
        <div id="sidebar" className="flex w-[280px] h-[fit-content] min-h-[100vh] bg-[#202947]">
          <ul className='w-full text-white font-nunito text-[15px]'>
            {menuData.map((item, index) => (
              <>
                {item.category && <li className='pt-[20px] pb-[6px] px-[28px] uppercase text-[10px] font-[500] tracking-[.5px] text-[rgba(255,255,255,0.5)]'>{item.category}</li>}
              
                <li key={index}>
                  <Link to={item.route} onClick={() => handleClick(index)} className={`flex relative w-full px-7 py-[10px] my-[4px] gap-[13px] items-center ${item.route == location.pathname && 'bg-[rgba(255,255,255,.05)]'}`}>
                    <i className={`w-[12px] ${item.icon} ${item.route == location.pathname ? 'text-white' : 'text-[#b2b8c7]'}`}></i>
                    <span className={`font-medium ${item.route == location.pathname ? 'text-white' : 'text-[#b2b8c7]'}`}>{item.title}</span>
                    {item.subitems && <i className={`fa-solid fa-angle-right text-[12px] absolute right-[28px] ${item.route == location.pathname ? 'text-white' : 'text-[#b2b8c7]'}`}></i>}
                  </Link>

                  {item.subitems && (
                    <ul className={`${activeItem === index ? 'flex' : 'hidden'} pl-[calc(28px+28px)] mb-[12px] flex-col w-full`}>
                      {item.subitems.map((subitem, index) => (
                        <li key={index}>
                          <Link to={subitem.route} className={`py-[10px] text-[#b2b8c7] hover:text-white w-full flex items-center gap-[8px]`}>
                            <i className='fa-solid fa-circle text-[3px]'></i>
                            <span className='text-[14px]'>{subitem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
  
        <div id='content'>
          a
        </div>
      </div>
    </div>
  )
}