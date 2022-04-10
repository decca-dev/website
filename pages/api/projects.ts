import dbConnect from "../../lib/helpers/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import Project from "../../lib/models/Project";
import { Document, Types } from "mongoose";
import { ProjectInterface } from "../../lib/types";

interface Data {
  success: boolean;
  data?: Array<
    Document<unknown, any, ProjectInterface> &
      ProjectInterface & {
        _id: Types.ObjectId;
      }
  >;
}

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method;

  switch (method) {
    case "GET":
      try {
        const projects = await Project.find();
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
