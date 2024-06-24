/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  BacklogItem as PrismaBacklogItem,
  Folder as PrismaFolder,
} from "@prisma/client";

export class BacklogItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BacklogItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.backlogItem.count(args);
  }

  async backlogItems(
    args: Prisma.BacklogItemFindManyArgs
  ): Promise<PrismaBacklogItem[]> {
    return this.prisma.backlogItem.findMany(args);
  }
  async backlogItem(
    args: Prisma.BacklogItemFindUniqueArgs
  ): Promise<PrismaBacklogItem | null> {
    return this.prisma.backlogItem.findUnique(args);
  }
  async createBacklogItem(
    args: Prisma.BacklogItemCreateArgs
  ): Promise<PrismaBacklogItem> {
    return this.prisma.backlogItem.create(args);
  }
  async updateBacklogItem(
    args: Prisma.BacklogItemUpdateArgs
  ): Promise<PrismaBacklogItem> {
    return this.prisma.backlogItem.update(args);
  }
  async deleteBacklogItem(
    args: Prisma.BacklogItemDeleteArgs
  ): Promise<PrismaBacklogItem> {
    return this.prisma.backlogItem.delete(args);
  }

  async getFolder(parentId: string): Promise<PrismaFolder | null> {
    return this.prisma.backlogItem
      .findUnique({
        where: { id: parentId },
      })
      .folder();
  }
}
