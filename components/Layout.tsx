import Navbar from "./Navbar";
import { ReactNode, FC } from "react";
import Head from "next/head";

interface LayoutOptions {
  title: string;
  description: string;
  href: string;
  children: ReactNode;
  active: "home" | "about" | "projects" | "contact" | "social";
}

const Layout: FC<LayoutOptions> = ({
  title,
  description,
  href,
  children,
  active,
}: LayoutOptions) => {
  return (
    <>
      <Head>
        <title>{title} | decc00n </title>
        <link rel="shortcut icon" href="/assets/logo.svg" type="image/png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={href} />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/758364493985611797/963122900779556904/logo.png"
        />
        <meta content="#A12C6B" data-react-helmet="true" name="theme-color" />
      </Head>
      <Navbar active={active} />
      {children}
    </>
  );
};

export default Layout;
