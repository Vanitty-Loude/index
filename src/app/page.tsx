import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full p-px">
      <div className="flex m-0-auto">
        <header className='flex flex-col justify-start items-center text-center w-full h-screen relative '>
          <div className='flex justify-around m-10 items-center w-6/12'>
              <nav className='flex text-center justify-center mt-2 m-bottom-15 w-full h-full items-center'>
                  <ul className='flex justify-around top-20 bg-slate-600 rounded-lg w-full h-9 justify-center items-center'>
                      <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Início</a></li>
                      <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Planos</a></li>
                      <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Sobre Nós</a></li>
                      <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Faq</a></li>
                      <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Contate-nos</a></li>
                      <li className='flex-row justify-center text-center uppercase text-white'>
                        <Image 
                          src="/150.jfif" 
                          alt="Profile Image"
                          width={32}
                          height={32}
                          className='flex items-center m-2 rounded-2xl justify-center'
                          id='profile' 
                        />
                      </li>
                  </ul>
              </nav>
              <div id='nav-login' className='w-2/12 h-40 absolute top-24 right-64 rounded-lg'>
                  <nav className='flex w-full h-full p-2 justify-center items-center'>
                      <ul className='w-full h-full justify-around  flex flex-col'>
                          <li><button type="button" className="btn-green w-9/12 h-full text-white uppercase m-px rounded-lg">Minha Conta</button></li>
                          <li><button type="button" className="btn-green w-9/12 h-full text-white uppercase m-px rounded-lg">Painel</button></li>
                          <li><button type="button" className="btn-green w-9/12 h-full text-white uppercase m-px rounded-lg">Configurações</button></li>
                          <li><button type="button" className="w-9/12 h-full text-white uppercase m-px bg-red-500 rounded-lg">Sair da Conta</button></li>
                      </ul>
                  </nav>
              </div>
          </div>
          <div className="flex justify-around items-center mt-px w-full h-full">
              <div className="flex m-6 justify-center items-center">
                  <div className='text-start justify-center p-4'>
                      <h1 className='text-white uppercase m-4 text-2xl font-bold'>Vanitty Cloud</h1>
                      <p className='text-white uppercase text-base m-4 font-bold'>
                          A <span>Vanitty Cloud</span> oferece um serviço de nuvem para que os clientes possam usufruir de um super computador em nuvem,
                          podendo assim qualquer pessoa jogar seu jogo favorito através de nossos servidores super poderosos.
                      </p>
                      <p className='text-white uppercase text-xs m-4'>
                          Adquira já um de nossos planos!
                      </p>
                      <div className='flex items-center items-start mt-4 font-bold gap-12 m-4 mt-8 h-11'>
                          <button id="btn-nossos-planos" className='btn-green-flex text-white uppercase w-1/4 h-full rounded-lg' type="button">Nossos Planos</button>
                          <button id="btn-contate-nos" className='btn-green-flex text-white uppercase w-1/4 h-full rounded-lg' type="button">Contate-nos</button>
                      </div>
                  </div>
              </div>
              <div className="w-11/12 h-700 border-white border rounded-lg m-7 justify-center items-center">
                  <div>
                      <Image 
                        src="/Vanitty_Cloud.png" 
                        alt="Computer Image"
                        width={800}
                        height={700}
                        className='rounded-lg'
                      />
                  </div>
              </div>
          </div>
        </header>
      </div>
      <div className='flex w-full h-screen justify-center items-center'>
        <section className='w-full h-screen flex justify-center items-center text-white relative'>
          <div className='flex w-full h-screen items-center flex-col text-center flex-wrap'>
            <div className='flex justify-around m-10 items-center w-6/12'>
                <nav className='flex text-center justify-center mt-2 mb-15 w-full h-full items-center'>
                    <ul className='flex justify-around top-20 bg-slate-600 rounded-lg w-full h-9 justify-center items-center'>
                        <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Início</a></li>
                        <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Planos</a></li>
                        <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Sobre Nós</a></li>
                        <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Faq</a></li>
                        <li className='flex-row justify-center text-center uppercase text-white'><a href="#">Contate-nos</a></li>
                        <li className='flex-row justify-center text-center uppercase text-white'>
                          <Image 
                            src="/150.jfif" 
                            alt="Profile Image"
                            width={32}
                            height={32}
                            className='flex items-center m-2 rounded-2xl justify-center' 
                          />
                        </li>
                    </ul>
                </nav>
                <div className='w-2/12 h-40 bg-neutral-900 absolute top-24 right-64 rounded-lg'>
                    <nav className='flex w-full h-full p-2 justify-center items-center'>
                        <ul className='w-full h-full justify-around  flex flex-col'>
                            <li><button type="button" className="btn-green w-9/12 h-full text-white uppercase m-px bg-black rounded-lg">Minha Conta</button></li>
                            <li><button type="button" className="btn-green w-9/12 h-full text-white uppercase m-px bg-black rounded-lg">Painel</button></li>
                            <li><button type="button" className="btn-green w-9/12 h-full text-white uppercase m-px bg-black rounded-lg">Configurações</button></li>
                            <li><button type="button" className="w-9/12 h-full text-white uppercase m-px bg-red-500 rounded-lg">Sair da Conta</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start mt-4 mb-20'>
              <h2 className='w-full h-full uppercase font-bold text-lg mb-4'>Nossos planos</h2>
              <p className='w-full h-full w-3/5 flex justify-center items-center'>Escolha um plano e adquira agora mesmo, desfrutando de uma alta jogabilidade em jogo através dos nossos servidores</p>
            </div>
            <div className='flex justify-center items-center max-w-full flex-wrap m-px'>
              <div className='font-bold bg-green bg-lime-600 w-72 h-30 f0ex mx-10 my-4 rounded-lg items-center'>
                <button className='flex flex-row justify-around items-center' >
                  <div className='flex flex-col justify-center items-center m-6'>
                    <h3 className='uppercase'>Nvidia Tesla T4</h3>
                    <p className='font-normal'>R$ 10,00/Diário</p>
                  </div>
                  <img src="" alt="Logo" />
                </button>
              </div>
              <div className='font-bold bg-green bg-lime-600 m-2 w-72 h-30 flex mx-10 my-4 rounded-lg items-center'>
                <button className='flex flex-row justify-around items-center'>
                  <div className='flex flex-col justify-center items-center m-6'>
                    <h3 className='uppercase'>Nvidia Tesla T4</h3>
                    <p className='font-normal'>R$ 49,90/Semanal</p>
                  </div>
                  <img src="" alt="Logo" />
                </button>
              </div>
              <div className='font-bold bg-green bg-lime-600 m-2 w-72 h-30 flex mx-10 my-4 rounded-lg items-center'>
                <button className='flex flex-row justify-around items-center'>
                  <div className='flex flex-col justify-center items-center m-6'>
                    <h3 className='uppercase'>Nvidia Tesla T4</h3>
                    <p className='font-normal'>R$ 89,90/Mensal</p>
                  </div>
                  <img src="" alt="Logo" />
                </button>
              </div>
            </div>
            <div className='flex justify-center items-center max-w-full flex-wrap m-px'>
            <div className='font-bold bg-green bg-lime-600 m-2 w-72 h-30 flex mx-10 my-4 rounded-lg items-center'>
                <button className='flex flex-row justify-around items-center'>
                  <div className='flex flex-col justify-center items-center m-6'>
                    <h3 className='uppercase'>Nvidia Tesla T4</h3>
                    <p className='font-normal'>R$ 25,00/Diário</p>
                  </div>
                  <img src="/aws.webp" alt="Logo" className='flex justify-center w-16 h-16 items-center ml-3'/>
                </button>
              </div>
              <div className='font-bold bg-green bg-lime-600 m-2 w-72 h-30 flex mx-10 my-4 rounded-lg items-center'>
                <button className='flex flex-row justify-around items-center'>
                  <div className='flex flex-col justify-center items-center m-6'>
                    <h3 className='uppercase'>Nvidia Tesla T4</h3>
                    <p className='font-normal'>R$ 79,90/Semanal</p>
                  </div>
                  <img src="/aws.webp" alt="Logo" className='flex justify-center w-16 h-16 items-center ml-3'/>
                </button>
              </div>
              <div className='font-bold bg-green bg-lime-600 m-2 w-72 h-30 flex mx-10 my-4 rounded-lg items-center'>
                <button className='flex flex-row justify-around items-center'>
                  <div className='flex flex-col justify-center items-center m-6'>
                    <h3 className='uppercase'>Nvidia Tesla T4</h3>
                    <p className='font-normal'>R$ 139,90/Mensal</p>
                  </div>
                  <img src="/aws.webp" alt="Logo" className='flex justify-center w-16 h-16 items-center ml-3'/>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
