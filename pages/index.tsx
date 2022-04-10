import type { NextPage } from "next";
import Layout from "../components/Layout";
import ActivityCard from "../components/ActivityCard";

interface Activity {
  name: string;
  details?: string;
}

interface Props {
  activities: Activity[];
}

const Home: NextPage<Props> = ({ activities }) => {
  return (
    <Layout
      active="home"
      title="Home"
      description="Full stack developer with weird projects"
      href="/"
    >
      <div className="container">
        <div>
          <h1 className="font-bold text-5xl">
            Hey, I'm <span className="h-text">decc00n</span>
          </h1>
          <h2 className="font-semibold mt-5 w-72 text-3xl">
            Full stack developer with weird projects and a student from
            <span className="morocco font-bold"> Morocco</span>.
          </h2>
        </div>
        {activities
          .filter((activity) => activity.name !== "Custom Status")
          .map((activity, i) => {
            return (
              <ActivityCard
                name={activity.name}
                details={activity?.details}
                key={i}
              />
            );
          })}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/589044704708919316"
  );

  const data = await res.json();

  return {
    props: {
      activities: data.data.activities,
    },
  };
};

export default Home;
