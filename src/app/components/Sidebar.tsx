import Link from "next/link";

export const Sidebar = () => {
  return (
    <nav className="">
      <ul className="gap-y-6 flex flex-col text-[#1B2528] text-lg">
        <li>
          <Link
            href="#"
            className="block text-[#3A6C7B] rounded-full bg-[#38677629] px-4 py-1"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="#" className="block px-4 py-1">
            Transactions
          </Link>
        </li>
        <li>
          <Link href="#" className="block px-4 py-1">
            Report
          </Link>
        </li>
        <li>
          <Link href="#" className="block px-4 py-1">
            Setting
          </Link>
        </li>
      </ul>
    </nav>
  );
};
