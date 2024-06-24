import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BacklogItemService } from "./backlogItem.service";
import { BacklogItemControllerBase } from "./base/backlogItem.controller.base";

@swagger.ApiTags("backlogItems")
@common.Controller("backlogItems")
export class BacklogItemController extends BacklogItemControllerBase {
  constructor(
    protected readonly service: BacklogItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
