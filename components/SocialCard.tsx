interface Social {
  platform: string;
  name: string;
  href: string;
}

const SocialCard = ({ platform, name, href }: Social) => {
  return (
    <div
      className="w-96 h-24 border-4 border-gray-400 rounded-3xl mt-8 cursor-pointer"
      onClick={() => (window.location.href = href)}
    >
      <div className="flex flex-row items-center">
        <img
          src={
            platform === "Github"
              ? "/assets/Github.svg"
              : platform === "Youtube"
              ? "/assets/Youtube.svg"
              : ""
          }
          width={70}
          height={70}
          className="py-3 ml-4"
        />
        <div className="ml-5">
          <h1 className="font-bold text-white text-lg">{name}</h1>
          <h2 className="text-gray-300">{platform}</h2>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
