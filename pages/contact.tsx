import type { NextPage } from "next";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";

const contacts = [
  {
    platform: "Discord",
    adress: "decc00n#6684",
    href: "https://discord.com/users/589044704708919316",
  },
  {
    platform: "Email",
    adress: "decc00ndev@gmail.com",
    href: "mailto:decc00ndev@gmail.com",
  },
];

const Contact: NextPage = () => {
  return (
    <Layout
      active="contact"
      title="Contact"
      description="Find out where to contact me!"
      href="/contact"
    >
      <div className="container">
        <h1 className="font-bold text-5xl">
          Contact <span className="h-text"> Me</span>
        </h1>
        {contacts.map((contact, i) => {
          return (
            <ContactCard
              platform={contact.platform}
              adress={contact.adress}
              href={contact.href}
              key={i}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Contact;
