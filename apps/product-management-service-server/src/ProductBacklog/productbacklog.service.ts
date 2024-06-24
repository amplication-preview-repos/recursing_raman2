import { Injectable } from "@nestjs/common";
import { CreateBacklogItemInput } from "../productBacklog/CreateBacklogItemInput";
import { CreateFolderInput } from "../productBacklog/CreateFolderInput";
import { UpdateBacklogItemInput } from "../productBacklog/UpdateBacklogItemInput";
import { UpdateFolderInput } from "../productBacklog/UpdateFolderInput";

@Injectable()
export class ProductBacklogService {
  constructor() {}
  async AddBacklogItem(args: CreateBacklogItemInput): Promise<CreateBacklogItemInput> {
    throw new Error("Not implemented");
  }
  async AddFolder(args: CreateFolderInput): Promise<CreateFolderInput> {
    throw new Error("Not implemented");
  }
  async CreateBacklogItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateFolder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteBacklogItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteFolder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EditBacklogItem(args: UpdateBacklogItemInput): Promise<UpdateBacklogItemInput> {
    throw new Error("Not implemented");
  }
  async EditFolder(args: UpdateFolderInput): Promise<UpdateFolderInput> {
    throw new Error("Not implemented");
  }
  async RemoveBacklogItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RemoveFolder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateBacklogItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateFolder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
