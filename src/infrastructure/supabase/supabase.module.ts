import { Global, Module } from "@nestjs/common";
import { SupabaseClientService } from "./supabase.client";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_CLIENT } from "./supabase.tokens";

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    SupabaseClientService,
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService): SupabaseClient => {
        const url = configService.get<string>("SUPABASE_URL");
        const key = configService.get<string>("SUPABASE_PUBLISHABLE_KEY");
        if (!url || !key) throw new Error("Supabase configuration is missing");
        return createClient(url, key);
      },
      inject: [ConfigService]
    }
  ],
  exports: [SupabaseClientService, SUPABASE_CLIENT]
})
export class SupabaseModule {}
