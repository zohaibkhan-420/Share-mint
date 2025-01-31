import Image from "next/image";
import logo from '@/public/logo.png'

export default function Home() {
  return (
    <div className="grid place-items-center w-full min-h-screen">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="Picture of mint" width={100} height={100}/>
        <h1 className="text-6xl">Share mint</h1>
      </div>
    </div>
  );
}
