// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    const contactData = JSON.parse(req.body)
    console.log(req.body)

    // const savedContact = await prisma.users.create({
    //   data: contactData
    // })

    // res.json(savedContact)
  }
}
