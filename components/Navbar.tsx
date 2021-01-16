import Link from "next/link";

const Footer = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
    </nav>
  );
};

export default Footer;
