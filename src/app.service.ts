import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_CLIENT } from "./infrastructure/supabase/supabase.tokens";

@Injectable()
export class AppService {
  constructor(
    @Inject(SUPABASE_CLIENT) private readonly client: SupabaseClient
  ) {}

  async getHello() {
    const { data, error } = await this.client.from("roles").select("*");

    if (error) throw new Error(error.message);

    return data;
  }
}
