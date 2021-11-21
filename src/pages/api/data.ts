// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = [
    {
      id: uuidv4(),
      title: 'pesquepaguegibicoski',
      icon: '/icons/instagram-icon.svg',
      url: 'https://www.instagram.com/pesquepaguegibicoski'
    },
    {
      id: uuidv4(),
      title: 'pesquepaguegibicoski',
      icon: '/icons/facebook-icon.svg',
      url: 'https://www.facebook.com/pesquepaguegibicoski',
    },
    {
      id: uuidv4(),
      title: '49 9 9180 9737',
      icon: '/icons/whatsapp-icon.svg',
      url: 'https://api.whatsapp.com/send?phone=+5549991809737'
    },
    {
      id: uuidv4(),
      title: '49 3433 6749',
      icon: '/icons/phone-icon.svg',
      url: 'tel:+55-49-3433-6749'
    },
    {
      id: uuidv4(),
      title: 'Xanxerê - SC',
      icon: '/icons/map-icon.svg',
      url: 'https://www.google.com.br/maps/place/Pesque+Pague+Gibicoski/@-26.8615709,-52.4272246,18z/data=!4m5!3m4!1s0x94e4c3571804c567:0x2fd1422294e3c22c!8m2!3d-26.861669!4d-52.4261651?hl=en&authuser=0'
    },
  ];
  
  res.status(200).json(data)
}
