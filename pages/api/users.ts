import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../interfaces";

// Fake users data
export const users: User[] = [
  { id: 1, name: "akbar" },
  { id: 2, name: "Asghar" },
  { id: 3, name: "parham  " },
];

// const userName = users.find(item=>item.id===id)

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database

  console.log(_req.query)

  res.status(200).json(users);
}
