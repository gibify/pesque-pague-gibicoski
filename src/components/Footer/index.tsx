import Image from 'next/image';
import React from 'react';
import { MapSpotButton } from '../MapSpotButton';
import { PhoneCallButton } from '../PhoneCallButton';
import { WhatsAppButton } from '../WhatsAppButton';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <p>(49) 3433-6749</p>
        <PhoneCallButton />
      </div>

      <div>
        <p>Xanxerê - SC</p>
        <MapSpotButton />
      </div>

      <div>
      <p>(48) 99846-3847</p>
        <WhatsAppButton />
      </div>
    </footer>
  )
}