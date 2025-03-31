import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"

interface ICidade {
  nome: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const { nome }: ICidade = req.body
  console.log(nome)
  res.status(StatusCodes.CREATED).json({
    message: `Cidade criada com sucesso, ${nome}`,
  })
}
