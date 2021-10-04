import Image from 'next/image';
import { useRouter  } from 'next/router';
import styles from './styles.module.scss';

export function WhatsAppButton() {
  const router = useRouter();

  function goToWhatsApp() { 
   router.push('https://api.whatsapp.com/send?phone=554898463847')
  }
  return (
    <button 
    onClick={goToWhatsApp}
    className={styles.container}
    >
      <Image src='/whatsapp_icon.svg' alt='whatsapp icon' width='48' height='48' />
    </button>
  )
}