// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = [
    {
      id: uuidv4(),
      title: 'Filé de Tilápia',
    },
    {
      id: uuidv4(),
      title: 'Bebidas',
    },
    {
      id: uuidv4(),
      title: 'Porções',
    },
    {
      id: uuidv4(),
      title: 'Vinhos',
    },
    {
      id: uuidv4(),
      title: 'Cachaça',
    },
    {
      id: uuidv4(),
      title: 'Salames',
    },
  ];
  
  res.status(200).json(data)
}
