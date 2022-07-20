import { Logo } from "../components/Logo";
import codeMockupImg from  '../assets/code-mockup.png'
import { useState, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()
    const navigate = useNavigate()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()
        await createSubscriber({
            variables: {
                name,
                email
            }
        })
        navigate('/event')
    }

    return (
        /* bg-cover para que cubra toda a tela */
        <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center lg:px-28 px-10'>
            <div className='flex flex-col lg:mt-20 mt-10 lg:gap-52 gap-10 lg:flex-row '>
                <div>
                    <Logo />
                    <h1 className='text-[40px] max-w-[624px] font-semibold lg:mt-4 mt-8'>
                        Construa uma <span className='text-blue-500'> aplicação completa </span>, do zero, com <span className='text-blue-500'>React JS</span> 
                    </h1>
                    <p className='mt-4'>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <form onSubmit={handleSubscribe} className='p-8 border border-gray-500 bg-gray-700 rounded-md mb-8 mb-0'>
                    <h3 className='font-bold text-2xl mb-6'>
                        Inscreva-se gratuitamente
                    </h3>
                    
                    <input 
                        type='text' 
                        className='w-full bg-gray-900 py-5 pl-5 rounded-md' 
                        placeholder="Seu nome completo"
                        onChange={event => setName(event.target.value)}
                        
                    />
                    
                    <input 
                        type='text' 
                        className='w-full mt-2 bg-gray-900 py-5 pl-5 rounded-md' 
                        placeholder="Digite seu email" 
                        onChange={event => setEmail(event.target.value)}
                        />

                    <button 
                        type='submit' 
                        className='uppercase w-full bg-green-500 py-4 mt-6 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50'
                        disabled={loading}
                        >
                            
                            Garantir minha vaga                            
                    
                    </button>
                </form>
            </div>
            <img src={codeMockupImg} className='hidden lg:block'/>
        </div>
    )
}