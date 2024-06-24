import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BacklogItemResolverBase } from "./base/backlogItem.resolver.base";
import { BacklogItem } from "./base/BacklogItem";
import { BacklogItemService } from "./backlogItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BacklogItem)
export class BacklogItemResolver extends BacklogItemResolverBase {
  constructor(
    protected readonly service: BacklogItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
