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
            <Link href="/TrainingScreen">Training</Link>
        </li>
        <li>
            <Link href="/">Curriculum</Link>
        </li>
        <li>
            <Link href="/">Calendar</Link>
        </li>
        <li>
            <Link href="/">Documents</Link>
        </li>
        <li>
            <Link href="/">Account</Link>
        </li>
        <li>
            <Link href="/RegistrationFormScreen">Registration Form</Link>
        </li>
    </ul>
  );
};

export default Navbar;