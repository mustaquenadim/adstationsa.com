import Image from "next/image";

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const filterClass = variant === 'white' ? 'brightness-0 invert' : '';

  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={272}
      height={146}
      className={`w-auto h-auto max-w-full ${className} ${filterClass}`}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
