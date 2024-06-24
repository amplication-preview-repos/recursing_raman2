/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BacklogItemService } from "../backlogItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BacklogItemCreateInput } from "./BacklogItemCreateInput";
import { BacklogItem } from "./BacklogItem";
import { BacklogItemFindManyArgs } from "./BacklogItemFindManyArgs";
import { BacklogItemWhereUniqueInput } from "./BacklogItemWhereUniqueInput";
import { BacklogItemUpdateInput } from "./BacklogItemUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BacklogItemControllerBase {
  constructor(
    protected readonly service: BacklogItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BacklogItem })
  @nestAccessControl.UseRoles({
    resource: "BacklogItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBacklogItem(
    @common.Body() data: BacklogItemCreateInput
  ): Promise<BacklogItem> {
    return await this.service.createBacklogItem({
      data: {
        ...data,

        folder: data.folder
          ? {
              connect: data.folder,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,

        folder: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [BacklogItem] })
  @ApiNestedQuery(BacklogItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BacklogItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async backlogItems(@common.Req() request: Request): Promise<BacklogItem[]> {
    const args = plainToClass(BacklogItemFindManyArgs, request.query);
    return this.service.backlogItems({
      ...args,
      select: {
        createdAt: true,
        description: true,

        folder: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BacklogItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BacklogItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async backlogItem(
    @common.Param() params: BacklogItemWhereUniqueInput
  ): Promise<BacklogItem | null> {
    const result = await this.service.backlogItem({
      where: params,
      select: {
        createdAt: true,
        description: true,

        folder: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BacklogItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BacklogItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBacklogItem(
    @common.Param() params: BacklogItemWhereUniqueInput,
    @common.Body() data: BacklogItemUpdateInput
  ): Promise<BacklogItem | null> {
    try {
      return await this.service.updateBacklogItem({
        where: params,
        data: {
          ...data,

          folder: data.folder
            ? {
                connect: data.folder,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,

          folder: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BacklogItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BacklogItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBacklogItem(
    @common.Param() params: BacklogItemWhereUniqueInput
  ): Promise<BacklogItem | null> {
    try {
      return await this.service.deleteBacklogItem({
        where: params,
        select: {
          createdAt: true,
          description: true,

          folder: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
