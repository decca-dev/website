interface Activity {
  name: string;
  details?: string;
}

const ActivityCard = ({ name, details }: Activity) => {
  return (
    <div className="w-96 h-24 border-4 border-gray-400 rounded-3xl mt-8">
      <div className="flex flex-row items-center">
        <img
          src={
            name === "Visual Studio Code"
              ? "/assets/Dev.svg"
              : "/assets/Any.svg"
          }
          width={70}
          height={70}
          className="py-3 ml-4"
        />
        <div className="ml-5 font-semibold">
          <h1>{name}</h1>
          <h2>
            {name === "Visual Studio Code"
              ? "Editing " + details
              : details || ""}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
