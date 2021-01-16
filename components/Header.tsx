import Head from "next/head";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{`Kaan Yilmaz | ${title}`}</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
    </Head>
  );
};

export default Header;
