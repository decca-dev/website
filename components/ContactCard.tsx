interface Contact {
  platform: string;
  adress: string;
  href: string;
}

const ContactCard = ({ platform, adress, href }: Contact) => {
  return (
    <div
      className="w-96 h-24 border-4 border-gray-400 rounded-3xl mt-8 cursor-pointer"
      onClick={() => (window.location.href = href)}
    >
      <div className="flex flex-row items-center">
        <img
          src={
            platform === "Email"
              ? "/assets/Email.svg"
              : platform === "Discord"
              ? "/assets/Discord.svg"
              : ""
          }
          width={70}
          height={70}
          className="py-3 ml-4"
        />
        <div className="ml-5">
          <h1 className="font-bold text-white text-lg">{platform}</h1>
          <h2 className="text-gray-300">{adress}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
