import Image from 'next/image';
import styles from './styles.module.scss';

export function PhoneCallButton() {
  return (
    <a 
    href="tel:+55-49-3433-6749"
    className={styles.container}
    >
      <Image src='/phone_icon.svg' alt='phone icon' width='48px' height='48px' />
    </a>
  )
}

// callto:1234567
// tel:1234567