import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">/home</Link>
        <Link href="/about" className="hover:underline">/about</Link>
      </nav>
    </header>
  );
};

export default Header;
