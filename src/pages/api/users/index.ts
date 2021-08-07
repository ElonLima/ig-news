import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "diego" },
    { id: 2, name: "dani" },
    { id: 3, name: "rafa" },
  ];

  return response.json(users);
};
