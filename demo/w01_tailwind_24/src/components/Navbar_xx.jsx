import { links } from '../data';

const Navbar_xx = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element  py-8 flex flex-col sm:flex-row
       sm:items-center sm:gap-x-16 sm:py-6'>
        <h2 className='text-3xl'>Web<span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const {id, href, text} = link;
            return (
              <a key={id} href={href} className='capitalize text-[19px] hover:text-emerald-600 tracking-wide duration-300'>
                {text}
              </a>
            );
          })}
      </div>
      </div>
    </nav>
  );
};
export default Navbar_xx;
