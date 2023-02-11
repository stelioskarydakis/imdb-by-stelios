import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link
        href={address}
        className="hover:text-amber-600 transition ease-in-out duration-300"
      >
        <Icon className="text-2xl sm:hidden " />
        <span className="hidden sm:inline my-2 text-sm">{title}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
