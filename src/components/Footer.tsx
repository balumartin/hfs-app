import Image from "next/image";

export default function Footer() {

  return (
    <footer className="relative max-sm:flex-col flexCenter max-sm:gap-4 gap-10 w-full h-20 py-4 text-center text-sm text-gray-500 bg-gray-100">
      <span>© {new Date().getFullYear()} balumartin</span>
      <div className="relative flexCenter">
        <p className="w-full">powered by{" "}</p>
        <a target="_about" href="https://mome.hu/" className="w-full">
          <Image
            src="/mome-logo.svg"
            alt="mome-logo"
            width={88}
            height={22}
            className="object-cover bg-white invert p-1"
          />
        </a>
      </div>
    </footer>
  );
}
