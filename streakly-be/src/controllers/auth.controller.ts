import { Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export class AuthController {
  public async signup(req: any, res: Response) {
    res.status(200).send("");
  }
}
