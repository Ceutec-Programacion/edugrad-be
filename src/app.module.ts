import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SupabaseModule } from "./infrastructure/supabase/supabase.module";
import { ConfigModule } from "@nestjs/config";
import { env } from "./config/env.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [env]
    }),
    SupabaseModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
