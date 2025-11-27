import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/blocks/mmdkids-logo.svg"
        alt="logo"
        width={260}
        height={100}
        style={{ width: '300px', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src="/blocks/mmdkids-logo.svg"
        alt="logo"
        width={260}
        height={100}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
