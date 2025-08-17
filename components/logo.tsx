import Image from "next/image";

interface LogoProps {
  variant?: 'default' | 'white' | 'green-black';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const filterClass = variant === 'white' ? 'brightness-0 invert' : '';
  const logoSrc = variant === 'green-black' ? '/logo-android-green-and-black.png' : '/logo.png';

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={272}
      height={146}
      className={`w-auto h-auto max-w-full ${filterClass} ${className}`}
      style={{
        height: 'auto',
      }}
    />
  )
}
