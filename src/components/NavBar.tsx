import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">User Management</h1>
        <div className="space-x-4">
          <Link href="/register">
            <a className="hover:underline">Register</a>
          </Link>
          <Link href="/users">
            <a className="hover:underline">Users</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
