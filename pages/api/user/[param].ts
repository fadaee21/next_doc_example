import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../users";
export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { param },
    method,
  } = req;

  console.log(users)
  const user = users.find((user) => user.id === parseInt(param as string));

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ param, name: `User ${user.name}` });
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ param, name: `User ${param}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
