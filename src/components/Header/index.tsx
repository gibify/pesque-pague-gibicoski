import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <Image src='/logo_header.svg' alt='logo' width='1080' height='200' />
    </header>
  )
}