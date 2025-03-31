import { Router } from "express"
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { CidadesController } from "../controllers"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: "Api is running",
  })
})
router.post("/cidades", CidadesController.create)

export { router }
