import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 bg-opacity-80 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PlantID
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:text-green-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-green-300">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
