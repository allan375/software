import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingSpinner from "../LoadingSpinner"

export default function Register(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return(
    <>
      {loading ? <LoadingSpinner/> : <RegisterContent/>}
    </>
  )
}

function RegisterContent(){
  return(
    <div className="sessao w-full h-full flex justify-center items-center font-nunito">
      <div className="sessao-container w-full flex flex-col items-center justify-center gap-1 rounded-2xl">
        <h1 className='text-[18px] mb-[10px] font-extrabold bg-gradient-to-br from-[#3626c9] to-[#da41cf] bg-clip-text text-transparent'>Crie uma conta</h1>
        <form action="" method="post" id='register-form' className='w-full flex flex-col items-center gap-1'>
          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Nome:</label>
            <input type="text" placeholder='Digite seu nome' className='w-full py-2 px-4 text-[14.3px] rounded-lg bg-[#f1f1f1]' />
          </div>

          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Email:</label>
            <input type="email" placeholder='Digite seu email' className='w-full py-2 px-4 text-[14.3px] rounded-lg bg-[#f1f1f1]' />
          </div>
          
          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Senha:</label>
            <input type="password" placeholder='Digite sua senha' className='w-full py-2 px-4 text-[14.3px] rounded-lg bg-[#f1f1f1]' />
          </div>
          
          <button className='text-[14.5px] mt-[14px] font-semibold bg-gradient-to-br from-[#3626c9] to-[#da41cf] text-white rounded-lg w-full px-7 py-2'>Cadastrar &raquo;</button>
        </form>

        <p className="text-[14px] text-gray-600 mt-3">Já tem uma conta? <Link to="/home/entrar" className="underline text-purple-500">Entrar</Link></p>
      </div>
    </div>
  )
}