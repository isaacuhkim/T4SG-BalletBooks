import Link from 'next/link';
import Image from 'next/image'
import styles from './styles/NavbarStyles.css';
import logo from '../assets/logo.png.webp'

const Navbar = () => {
  return (
      <ul className='items-center justify-between w-full flex px-24'>
        <Link href="/">
            <img src={logo.src} className='w-auto h-auto max-h-7 max-w-px items-center'/>
        </Link>
        <li>
            <Link href="/curriculum">Curriculum</Link>
        </li>
        <li>
            <Link href="/calendar">Students</Link>
        </li>
        <li>
            <Link href="/documents">Training</Link>
        </li>
        <li>
            <Link href="/documents">Documents</Link>
        </li>
        <li>
            <Link href="/account">Calendar</Link>
        </li>
        
    </ul>
  );
};

export default Navbar;