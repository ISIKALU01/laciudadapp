import Link from 'next/link';
import Image from 'next/image'


export default function LogoLink() {
  return (
    <div className="relative mb-0 p-0">
      <Link href="/">
        <Image
            src="/Laciudadcropped.png"
            alt="Your Brand Logo"
            width={120}
            height={120}
        />
      </Link>
    </div>
  );
}