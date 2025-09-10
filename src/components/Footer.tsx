export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 bg-gray-100">
      © {new Date().getFullYear()} balumartin
    </footer>
  );
}
