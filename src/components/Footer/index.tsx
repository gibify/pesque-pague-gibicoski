import Image from 'next/image';
import React from 'react';
import { WhatsAppButton } from '../WhatsAppButton';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        {/* <h1>contato</h1> */}
        <p>(49) 3433-6749</p>
      </div>

      <div>
        {/* <h1>endereço</h1> */}
        <p>Pesqueiro do Meio,<br /> Xanxerê - SC</p>
      </div>

      <div>
        {/* <h1>whatsapp</h1> */}
        <WhatsAppButton />
      </div>
    </footer>
  )
}