import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <Link href='/' passHref>
              <a>
                <Image
                  src='/qrypt-logo.svg'
                  alt='Qryptic Logo'
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
          <div className='navbar-menu'>
            <ul>
              <li>
                <Link href='/about'>
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
