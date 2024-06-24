import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BacklogItemServiceBase } from "./base/backlogItem.service.base";

@Injectable()
export class BacklogItemService extends BacklogItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
