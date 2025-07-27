import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={272}
      height={146}
      className="w-auto h-auto max-w-full"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
