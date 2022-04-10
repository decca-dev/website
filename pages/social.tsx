import type { NextPage } from "next";
import Layout from "../components/Layout";
import SocialCard from "../components/SocialCard";

const socials = [
  {
    platform: "Github",
    name: "@decca-dev",
    href: "https://github.com/decca-dev",
  },
  {
    platform: "Youtube",
    name: "decc00n",
    href: "https://www.youtube.com/channel/UCf3Qojc-sQYIQ-6R1PUmitg",
  },
];

const Social: NextPage = () => {
  return (
    <Layout
      active="social"
      title="Social"
      description="Checkout my socials!"
      href="/social"
    >
      <div className="container">
        <h1 className="font-bold text-5xl">
          My <span className="h-text"> Socials</span>
        </h1>
        {socials.map((social, i) => {
          return (
            <SocialCard
              platform={social.platform}
              name={social.name}
              href={social.href}
              key={i}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Social;
