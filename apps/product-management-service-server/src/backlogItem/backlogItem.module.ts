import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BacklogItemModuleBase } from "./base/backlogItem.module.base";
import { BacklogItemService } from "./backlogItem.service";
import { BacklogItemController } from "./backlogItem.controller";
import { BacklogItemResolver } from "./backlogItem.resolver";

@Module({
  imports: [BacklogItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [BacklogItemController],
  providers: [BacklogItemService, BacklogItemResolver],
  exports: [BacklogItemService],
})
export class BacklogItemModule {}
