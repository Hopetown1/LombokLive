import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-[#008080]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row text-[#FFF9EE]">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2024 LombokLive. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer