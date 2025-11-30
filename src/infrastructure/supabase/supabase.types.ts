export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      assessment_panel: {
        Row: {
          classroom: string;
          created_at: string;
          evaluation_at: string;
          final_note: number | null;
          id: number;
          methodological_note: number | null;
          name: string;
          observations: string | null;
          status_id: number;
        };
        Insert: {
          classroom: string;
          created_at?: string;
          evaluation_at: string;
          final_note?: number | null;
          id?: number;
          methodological_note?: number | null;
          name: string;
          observations?: string | null;
          status_id: number;
        };
        Update: {
          classroom?: string;
          created_at?: string;
          evaluation_at?: string;
          final_note?: number | null;
          id?: number;
          methodological_note?: number | null;
          name?: string;
          observations?: string | null;
          status_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "assessment_panel_status_id_fkey";
            columns: ["status_id"];
            isOneToOne: false;
            referencedRelation: "assessment_panel_statuses";
            referencedColumns: ["id"];
          }
        ];
      };
      assessment_panel_assets: {
        Row: {
          assessment_panel_id: number;
          created_at: string;
          id: number;
          uploaded_by: string;
          url: string;
        };
        Insert: {
          assessment_panel_id: number;
          created_at?: string;
          id?: number;
          uploaded_by: string;
          url: string;
        };
        Update: {
          assessment_panel_id?: number;
          created_at?: string;
          id?: number;
          uploaded_by?: string;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "assessment_panel_assets_assessment_panel_id_fkey";
            columns: ["assessment_panel_id"];
            isOneToOne: false;
            referencedRelation: "assessment_panel";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "assessment_panel_assets_uploaded_by_fkey";
            columns: ["uploaded_by"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      assessment_panel_members: {
        Row: {
          assessment_panel_id: number;
          created_at: string;
          id: number;
          profile_id: string;
        };
        Insert: {
          assessment_panel_id: number;
          created_at?: string;
          id?: number;
          profile_id: string;
        };
        Update: {
          assessment_panel_id?: number;
          created_at?: string;
          id?: number;
          profile_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "assessment_panel_members_assessment_panel_id_fkey";
            columns: ["assessment_panel_id"];
            isOneToOne: false;
            referencedRelation: "assessment_panel";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "assessment_panel_members_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      assessment_panel_statuses: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      evaluation_criteria: {
        Row: {
          created_at: string;
          description: string;
          id: number;
          is_active: boolean;
          score: number;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: number;
          is_active: boolean;
          score: number;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: number;
          is_active?: boolean;
          score?: number;
        };
        Relationships: [];
      };
      evaluation_scores: {
        Row: {
          created_at: string;
          evaluation_criteria_id: number;
          evaluation_id: number;
          id: number;
          score: number;
        };
        Insert: {
          created_at?: string;
          evaluation_criteria_id: number;
          evaluation_id: number;
          id?: number;
          score: number;
        };
        Update: {
          created_at?: string;
          evaluation_criteria_id?: number;
          evaluation_id?: number;
          id?: number;
          score?: number;
        };
        Relationships: [
          {
            foreignKeyName: "evaluation_scores_evaluation_criteria_id_fkey";
            columns: ["evaluation_criteria_id"];
            isOneToOne: false;
            referencedRelation: "evaluation_criteria";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "evaluation_scores_evaluation_id_fkey";
            columns: ["evaluation_id"];
            isOneToOne: false;
            referencedRelation: "evaluations";
            referencedColumns: ["id"];
          }
        ];
      };
      evaluations: {
        Row: {
          assessment_panel_id: number;
          created_at: string;
          evaluator_id: string;
          id: number;
        };
        Insert: {
          assessment_panel_id: number;
          created_at?: string;
          evaluator_id: string;
          id?: number;
        };
        Update: {
          assessment_panel_id?: number;
          created_at?: string;
          evaluator_id?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "evaluations_assessment_panel_id_fkey";
            columns: ["assessment_panel_id"];
            isOneToOne: false;
            referencedRelation: "assessment_panel";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "evaluations_evaluator_id_fkey";
            columns: ["evaluator_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      permissions: {
        Row: {
          created_at: string;
          id: number;
          key: string;
          label: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          key: string;
          label: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          key?: string;
          label?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          name: string;
          role_id: number;
        };
        Insert: {
          created_at?: string;
          email: string;
          id: string;
          name: string;
          role_id: number;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          name?: string;
          role_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          }
        ];
      };
      roles: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      roles_permissions: {
        Row: {
          created_at: string;
          id: number;
          permission_id: number;
          role_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          permission_id: number;
          role_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          permission_id?: number;
          role_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "roles_permissions_permission_id_fkey";
            columns: ["permission_id"];
            isOneToOne: false;
            referencedRelation: "permissions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "roles_permissions_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      assessment_panel_rubric_statuses: "draft" | "sent";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {}
  },
  public: {
    Enums: {
      assessment_panel_rubric_statuses: ["draft", "sent"]
    }
  }
} as const;
