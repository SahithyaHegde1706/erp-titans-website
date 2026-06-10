import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center ${className ?? ""}`}>
      <div className="rounded-xl transition-all duration-300 ">
        <Image
          src="/images/logo.png"
          alt="ERP Titans"
          width={220}
          height={80}
          priority
          className="h-11 w-auto object-contain sm:h-12 md:h-14"
        />
      </div>
    </Link>
  );
}
