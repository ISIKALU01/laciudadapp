import Link from 'next/link';
import Image from 'next/image'

export default function LogoLink() {
  return (
    <div className="mb-4 flex items-center sm:mb-0">
      <Link href="/">
        <Image
            src="/logo.png"
            alt="Your Brand Logo"
            width="120"
            height="30"
        />
      </Link>
      <span className="text-white font-bold text-lg">Lacuidad</span>
    </div>
  );
}