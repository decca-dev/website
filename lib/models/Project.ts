import mongo, { Model } from "mongoose";
import { ProjectInterface } from "../types";

const ProjectSchema = new mongo.Schema<ProjectInterface>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: { type: String, default: "/assets/Gear.svg" },
  href: { type: String, default: "https://github.com/decca-dev" },
  status: { type: String, default: "WIP" },
});

let Project: Model<ProjectInterface, {}, {}, {}>;

try {
  Project = mongo.model("Project", ProjectSchema);
} catch (e) {
  Project = mongo.model("Project");
}

export default Project;
