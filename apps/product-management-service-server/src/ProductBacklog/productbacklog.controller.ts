import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductBacklogService } from "./productbacklog.service";
import { CreateBacklogItemInput } from "../productBacklog/CreateBacklogItemInput";
import { CreateFolderInput } from "../productBacklog/CreateFolderInput";
import { UpdateBacklogItemInput } from "../productBacklog/UpdateBacklogItemInput";
import { UpdateFolderInput } from "../productBacklog/UpdateFolderInput";

@swagger.ApiTags("productBacklogs")
@common.Controller("productBacklogs")
export class ProductBacklogController {
  constructor(protected readonly service: ProductBacklogService) {}

  @common.Post("/backlog-items")
  @swagger.ApiOkResponse({
    type: CreateBacklogItemInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddBacklogItem(
    @common.Body()
    body: string
  ): Promise<CreateBacklogItemInput> {
        return this.service.AddBacklogItem(body);
      }

  @common.Post("/folders")
  @swagger.ApiOkResponse({
    type: CreateFolderInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddFolder(
    @common.Body()
    body: string
  ): Promise<CreateFolderInput> {
        return this.service.AddFolder(body);
      }

  @common.Get("/:id/create-backlog-item")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateBacklogItem(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateBacklogItem(body);
      }

  @common.Get("/:id/create-folder")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateFolder(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateFolder(body);
      }

  @common.Delete("/backlog-items/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteBacklogItem(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteBacklogItem(body);
      }

  @common.Delete("/folders/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteFolder(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteFolder(body);
      }

  @common.Put("/backlog-items/:id")
  @swagger.ApiOkResponse({
    type: UpdateBacklogItemInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EditBacklogItem(
    @common.Body()
    body: string
  ): Promise<UpdateBacklogItemInput> {
        return this.service.EditBacklogItem(body);
      }

  @common.Put("/folders/:id")
  @swagger.ApiOkResponse({
    type: UpdateFolderInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EditFolder(
    @common.Body()
    body: string
  ): Promise<UpdateFolderInput> {
        return this.service.EditFolder(body);
      }

  @common.Delete("/backlog-items/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RemoveBacklogItem(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RemoveBacklogItem(body);
      }

  @common.Delete("/folders/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RemoveFolder(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RemoveFolder(body);
      }

  @common.Get("/:id/update-backlog-item")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateBacklogItem(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateBacklogItem(body);
      }

  @common.Get("/:id/update-folder")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateFolder(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateFolder(body);
      }
}
