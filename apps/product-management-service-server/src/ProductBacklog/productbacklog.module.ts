import { Module } from "@nestjs/common";
import { ProductBacklogService } from "./productbacklog.service";
import { ProductBacklogController } from "./productbacklog.controller";
import { ProductBacklogResolver } from "./productbacklog.resolver";

@Module({
  controllers: [ProductBacklogController],
  providers: [ProductBacklogService, ProductBacklogResolver],
  exports: [ProductBacklogService],
})
export class ProductBacklogModule {}
