import { Link } from "react-router-dom"

function Entrar(){
  return(
    <div className="sessao w-full h-full flex justify-center items-center font-nunito">
      <div className="sessao-container w-full flex flex-col items-center justify-center gap-1 border py-6 px-6 rounded-2xl">
        <h1 className='text-[18px] mb-[10px] font-bold bg-gradient-to-br from-[#3626c9] to-[#da41cf] bg-clip-text text-transparent'>Crie uma conta</h1>
        <form action="" method="post" id='register-form' className='w-full flex flex-col items-center'>
          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Email:</label>
            <input type="email" placeholder='Digite seu email' className='w-full py-1 px-3 text-[14.3px] rounded-lg border' />
          </div>
          
          <div className="input-container w-full">
            <label htmlFor="nome" className='text-[15px] text-gray-700'>Senha:</label>
            <input type="password" placeholder='Digite sua senha' className='w-full py-1 px-3 text-[14.3px] rounded-lg border' />
          </div>
          
          <button className='text-[14.5px] mt-[14px] font-semibold bg-gradient-to-br from-[#3626c9] to-[#da41cf] text-white rounded-lg px-[18px] py-[5px]'>Cadastrar &raquo;</button>
        </form>

        <p>Não tem uma conta? <Link to="/criar-conta">Cadastre-se</Link></p>
      </div>
    </div>
  )
}
export default Entrar