'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <Image onClick={()=>router.push('/')} className='hidden md:block cursor-pointer' alt="Logo" height="50" width="50" src="/images/logo.svg" />
     );
}

export default Logo;
