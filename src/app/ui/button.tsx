import { Link } from "@/i18n/navigation";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export default function Button({ href, children, variant = "solid" }: ButtonProps) {
  const base = "mt-4 rounded w-32 text-center text-md py-2 px-4 transition";
  const styles =
    variant === "solid"
      ? "bg-slate-600 text-white hover:bg-slate-500 active:bg-slate-400"
      : "border border-slate-600 bg-transparent text-slate-600 hover:bg-slate-100 active:bg-slate-200";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}