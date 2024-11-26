import {Link, Routes, Route, useLocation, Navigate} from 'react-router-dom'
import introductionData from '../../data/introduction.json'

export default function Introduction(){
  const location = useLocation()
  
  return(
    <div className="introducao flex flex-col items-center pb-5">
      <Routes>
        <Route index element={<Navigate to='boas-vindas'/>}/>

        {introductionData.map((page, index) => (
          <Route path={page.route} key={index} element={
            <div className='introducao-content flex flex-col items-center text-center font-nunito'>
              <img src={page.image_location} width={230} alt="" className='mb-[4px]' />
              <img src="./components/home/ilustrativo-3.png" alt="" width={230} className='mb-[4px]'/>
              <h1 className='text-[14px] mb-[10px] font-black uppercase bg-gradient-to-br from-[#3626c9] to-[#da41cf] bg-clip-text text-transparent'>{page.title}</h1>
              <p className='text-[13.5px] mb-[15px] font-extrabold text-[rgba(0,0,0,.45)]'>{page.description}</p>
              <Link className='btn-home' to={page.next_route}>{page.btn_text}</Link>
            </div>
          }/>
        ))}
      </Routes>

      <div className="circles flex gap-[4px] absolute bottom-[32px]">
        {introductionData.map((item, index) => (
          <div className={`circle w-[8px] h-[8px] rounded-full ${location.pathname == `/home/introducao/${item.route}` ? 'bg-[#8626c9]' : 'bg-[#d9d9d9]'}`} key={index}></div>
        ))}
      </div>
    </div>
  )
}