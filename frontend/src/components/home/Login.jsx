import { Link } from "react-router-dom"

function Entrar(){
  return(
    <div className="sessao w-full h-full flex justify-center items-center font-nunito">
      <div className="sessao-container w-full flex flex-col items-center justify-center gap-1 rounded-2xl">
        <h1 className='text-[18px] mb-[10px] font-extrabold bg-gradient-to-br from-[#3626c9] to-[#da41cf] bg-clip-text text-transparent'>Fazer login</h1>
        <form action="" method="post" id='register-form' className='w-full flex flex-col items-center gap-1'>
          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Email:</label>
            <input type="email" placeholder='Digite seu email' className='w-full py-2 px-4 text-[14.3px] rounded-lg border' />
          </div>
          
          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Senha:</label>
            <input type="password" placeholder='Digite sua senha' className='w-full py-2 px-4 text-[14.3px] rounded-lg border' />
          </div>
          
          <button className='text-[14.5px] mt-[14px] font-semibold bg-gradient-to-br from-[#3626c9] to-[#da41cf] text-white rounded-lg w-full px-7 py-2'>Entrar &raquo;</button>
        </form>

        <p className="text-[14px] text-gray-600 mt-3">Não tem uma conta? <Link to="/home/criar-conta" className="underline text-purple-500">Cadastre-se</Link></p>
      </div>
    </div>
  )
}
export default Entrar