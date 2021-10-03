import Image from 'next/image';
import styles from './styles.module.scss';

export function WhatsAppButton() {
  return (
    <button className={styles.container}>
      <Image src='/whatsapp_icon.svg' alt='whatsapp icon' width='48' height='48' />
    </button>
  )
}