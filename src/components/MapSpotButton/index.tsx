import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';


export function MapSpotButton() {
  const router = useRouter();

  function goToMaps() {
    router.push('https://www.google.com.br/maps/place/Pesque+Pague+Gibicoski/@-26.8615709,-52.4272246,18z/data=!4m5!3m4!1s0x94e4c3571804c567:0x2fd1422294e3c22c!8m2!3d-26.861669!4d-52.4261651?hl=en&authuser=0')
  }
  return (
    <button 
    onClick={goToMaps}
    className={styles.container}
    >
      <Image src='/maps_icon.svg' alt='maps icon' width='48px' height='48px' />
    </button>
  )
}