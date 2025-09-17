import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Next.js Blog
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}