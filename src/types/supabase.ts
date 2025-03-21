export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      chapters: {
        Row: {
          course_id: string
          created_at: string
          id: string
          local_id: string | null
          number: number
          page_number_start: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          local_id?: string | null
          number: number
          page_number_start: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          local_id?: string | null
          number?: number
          page_number_start?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapters_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          local_id: string | null
          page_number: number
          subsection_id: string
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          local_id?: string | null
          page_number: number
          subsection_id: string
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          local_id?: string | null
          page_number?: number
          subsection_id?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collections_subsection_id_fkey"
            columns: ["subsection_id"]
            isOneToOne: false
            referencedRelation: "subsections"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          cover_image: string | null
          created_at: string | null
          description: string | null
          id: string
          local_id: string | null
          title: string
        }
        Insert: {
          cover_image?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          local_id?: string | null
          title?: string
        }
        Update: {
          cover_image?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          local_id?: string | null
          title?: string
        }
        Relationships: []
      }
      etudes: {
        Row: {
          audio_url: string | null
          collection_id: string
          created_at: string | null
          description: string | null
          difficulty: number | null
          id: string
          local_id: string | null
          notation: string | null
          number: number
          page_number: number
          title: string | null
        }
        Insert: {
          audio_url?: string | null
          collection_id?: string
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          id?: string
          local_id?: string | null
          notation?: string | null
          number: number
          page_number: number
          title?: string | null
        }
        Update: {
          audio_url?: string | null
          collection_id?: string
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          id?: string
          local_id?: string | null
          notation?: string | null
          number?: number
          page_number?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "etudes_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          audio_url: string | null
          collection_id: string
          created_at: string | null
          description: string | null
          difficulty: number | null
          id: string
          local_id: string | null
          notation: string | null
          number: number
          title: string | null
        }
        Insert: {
          audio_url?: string | null
          collection_id?: string
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          id?: string
          local_id?: string | null
          notation?: string | null
          number: number
          title?: string | null
        }
        Update: {
          audio_url?: string | null
          collection_id?: string
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          id?: string
          local_id?: string | null
          notation?: string | null
          number?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercises_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      instructions: {
        Row: {
          content: string | null
          created_at: string | null
          entry_id: string
          entry_type: string
          id: string
          local_id: string | null
          order: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          entry_id?: string
          entry_type: string
          id?: string
          local_id?: string | null
          order?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          entry_id?: string
          entry_type?: string
          id?: string
          local_id?: string | null
          order?: number | null
        }
        Relationships: []
      }
      metronome_levels: {
        Row: {
          advanced_note_value: string | null
          advanced_tempo: number | null
          beginner_note_value: string | null
          beginner_tempo: number | null
          created_at: string | null
          id: string
          intermediate_note_value: string | null
          intermediate_tempo: number | null
          label: string | null
          local_id: string | null
          section_id: string
        }
        Insert: {
          advanced_note_value?: string | null
          advanced_tempo?: number | null
          beginner_note_value?: string | null
          beginner_tempo?: number | null
          created_at?: string | null
          id?: string
          intermediate_note_value?: string | null
          intermediate_tempo?: number | null
          label?: string | null
          local_id?: string | null
          section_id?: string
        }
        Update: {
          advanced_note_value?: string | null
          advanced_tempo?: number | null
          beginner_note_value?: string | null
          beginner_tempo?: number | null
          created_at?: string | null
          id?: string
          intermediate_note_value?: string | null
          intermediate_tempo?: number | null
          label?: string | null
          local_id?: string | null
          section_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "metronomeLevels_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
      references: {
        Row: {
          created_at: string | null
          description: string | null
          entry_id: string
          entry_type: string
          id: string
          local_id: string | null
          page: number
          reference_id: string
          reference_type: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          entry_id?: string
          entry_type: string
          id?: string
          local_id?: string | null
          page: number
          reference_id: string
          reference_type: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          entry_id?: string
          entry_type?: string
          id?: string
          local_id?: string | null
          page?: number
          reference_id?: string
          reference_type?: string
        }
        Relationships: []
      }
      related_exercises: {
        Row: {
          created_at: string | null
          etude_id: string
          exercise_id: string
          id: string
          local_id: string | null
        }
        Insert: {
          created_at?: string | null
          etude_id?: string
          exercise_id?: string
          id?: string
          local_id?: string | null
        }
        Update: {
          created_at?: string | null
          etude_id?: string
          exercise_id?: string
          id?: string
          local_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "relatedExercises_etude_id_fkey"
            columns: ["etude_id"]
            isOneToOne: false
            referencedRelation: "etudes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relatedExercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      sections: {
        Row: {
          chapter_id: string
          created_at: string
          description: string | null
          explanation_text: string | null
          has_subsections: boolean
          id: string
          local_id: string | null
          number: string
          page_number: number
          quote: string | null
          staff_key: string | null
          title: string
        }
        Insert: {
          chapter_id?: string
          created_at?: string
          description?: string | null
          explanation_text?: string | null
          has_subsections: boolean
          id?: string
          local_id?: string | null
          number: string
          page_number: number
          quote?: string | null
          staff_key?: string | null
          title: string
        }
        Update: {
          chapter_id?: string
          created_at?: string
          description?: string | null
          explanation_text?: string | null
          has_subsections?: boolean
          id?: string
          local_id?: string | null
          number?: string
          page_number?: number
          quote?: string | null
          staff_key?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "sections_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      subsections: {
        Row: {
          created_at: string
          description: string | null
          id: string
          local_id: string | null
          page_number: number
          section_id: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          local_id?: string | null
          page_number: number
          section_id?: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          local_id?: string | null
          page_number?: number
          section_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "subsections_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
