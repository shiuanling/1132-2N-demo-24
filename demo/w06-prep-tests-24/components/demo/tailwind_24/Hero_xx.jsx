import heroImg from '../assets/hero.svg';
import { FaGithub, FaSquareXTwitter, FaFacebook } from 'react-icons/fa6';


const Hero_xx = () => {
  return (
    <section className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-6xl font-bold tracking-wider'>I'm Shiuan</h1>
          <p className='text-3xl mt-4 text-slate-700 capitalize tracking-wide'>full-stack developer</p>
          <p className='mt-2 text-slate-700 capitalize tracking-wide text-lg'>turning ideas into interactive reality</p>
          <div className='flex gap-x-4 mt-4'>
            <a href='#'>
              <FaGithub className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaSquareXTwitter className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaFacebook className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80' alt='' />
        </article>
      </div>
    </section>
  );
};
export default Hero_xx;
