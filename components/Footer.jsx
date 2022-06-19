import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from './Button';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-1 dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div />
    </footer>
  );
};

export default Footer;
