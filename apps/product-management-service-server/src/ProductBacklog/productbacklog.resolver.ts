import * as graphql from "@nestjs/graphql";
import { CreateBacklogItemInput } from "../productBacklog/CreateBacklogItemInput";
import { CreateFolderInput } from "../productBacklog/CreateFolderInput";
import { UpdateBacklogItemInput } from "../productBacklog/UpdateBacklogItemInput";
import { UpdateFolderInput } from "../productBacklog/UpdateFolderInput";
import { ProductBacklogService } from "./productbacklog.service";

export class ProductBacklogResolver {
  constructor(protected readonly service: ProductBacklogService) {}

  @graphql.Mutation(() => CreateBacklogItemInput)
  async AddBacklogItem(
    @graphql.Args()
    args: CreateBacklogItemInput
  ): Promise<CreateBacklogItemInput> {
    return this.service.AddBacklogItem(args);
  }

  @graphql.Mutation(() => CreateFolderInput)
  async AddFolder(
    @graphql.Args()
    args: CreateFolderInput
  ): Promise<CreateFolderInput> {
    return this.service.AddFolder(args);
  }

  @graphql.Query(() => String)
  async CreateBacklogItem(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateBacklogItem(args);
  }

  @graphql.Query(() => String)
  async CreateFolder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateFolder(args);
  }

  @graphql.Mutation(() => String)
  async DeleteBacklogItem(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteBacklogItem(args);
  }

  @graphql.Mutation(() => String)
  async DeleteFolder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteFolder(args);
  }

  @graphql.Mutation(() => UpdateBacklogItemInput)
  async EditBacklogItem(
    @graphql.Args()
    args: UpdateBacklogItemInput
  ): Promise<UpdateBacklogItemInput> {
    return this.service.EditBacklogItem(args);
  }

  @graphql.Mutation(() => UpdateFolderInput)
  async EditFolder(
    @graphql.Args()
    args: UpdateFolderInput
  ): Promise<UpdateFolderInput> {
    return this.service.EditFolder(args);
  }

  @graphql.Mutation(() => String)
  async RemoveBacklogItem(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RemoveBacklogItem(args);
  }

  @graphql.Mutation(() => String)
  async RemoveFolder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RemoveFolder(args);
  }

  @graphql.Query(() => String)
  async UpdateBacklogItem(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateBacklogItem(args);
  }

  @graphql.Query(() => String)
  async UpdateFolder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateFolder(args);
  }
}
