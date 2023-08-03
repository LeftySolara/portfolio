import Link from "next/link";

const ResumeLink = () => {
  return (
    <a
      href="/"
      className="no-underline bg-orange-300 rounded px-2 py-1 font-semibold"
    >
      Resume
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="hidden lg:flex justify-between align-middle">
      <div className="flex flex-col justify-center align-middle">
        <Link href="/" className="font-bold">
          Julianne Adams
        </Link>
      </div>
      <div className="flex justify-center">
        <ResumeLink />
      </div>
    </div>
  );
};

export default Navbar;
