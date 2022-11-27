import { NextApiRequest, NextApiResponse } from "next";
import { people } from "../../../data";
import { Person } from "../../../interfaces";

type ResponseError = {
  message: string;
  hello:string
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Person | ResponseError>
) {
  const {
    query: { apiParam },
  } = req;
  
  //!next doc method
  const filtered = people.filter((p) => p.id === apiParam);
  
  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${apiParam} not found.`,hello:"whatcha gonna do" });
  //!below method is not correct 
  //!if person on browser address bar enter /person/15
  //!you can not handle the error
//   const finder = people.find((p) => p.id === apiParam);
//   return res.status(200).json(finder)
}
