'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Packer', href: '/dashboard/packer' },
  { name: 'Terraform', href: '/dashboard/terraform' },
  { name: 'Ansible', href: '/dashboard/ansible' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-64 bg-gray-800 text-white p-4 border-r border-gray-700">
      <div className="text-xl font-bold mb-8 p-2 text-blue-300">Deployment Dashboard</div>
      <nav className="flex flex-col gap-2">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 rounded-lg ${
              pathname === item.href
                ? 'bg-blue-700 text-white shadow-lg'
                : 'hover:bg-gray-700 text-gray-300 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}