import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img 
            src={logo} 
            alt="Sumz_logo" 
            />
            <div>
            <button
            type='button'
            onClick={()=> window.open('https://github.com/R254/learn-git')}
            className='black_btn'
            >
                GitHub
            </button>
            <button
            type='button'
            onClick={()=> window.open('https://superlative-alpaca-a0ddca.netlify.app/')}
            className='black_btn m-3'
            >
                ViewLive
            </button>
            </div>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max:hidden md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero