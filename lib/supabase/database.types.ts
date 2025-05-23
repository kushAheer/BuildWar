export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      violation_categories: {
        Row: {
          id: number
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      violations: {
        Row: {
          id: string
          user_id: string
          category_id: number
          location_lat: number
          location_lng: number
          location_address: string | null
          violation_date: string
          description: string | null
          status: string
          plate_number: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category_id: number
          location_lat: number
          location_lng: number
          location_address?: string | null
          violation_date: string
          description?: string | null
          status?: string
          plate_number?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category_id?: number
          location_lat?: number
          location_lng?: number
          location_address?: string | null
          violation_date?: string
          description?: string | null
          status?: string
          plate_number?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      violation_media: {
        Row: {
          id: string
          violation_id: string
          media_url: string
          media_type: string
          created_at: string
        }
        Insert: {
          id?: string
          violation_id: string
          media_url: string
          media_type: string
          created_at?: string
        }
        Update: {
          id?: string
          violation_id?: string
          media_url?: string
          media_type?: string
          created_at?: string
        }
      }
      violation_status_updates: {
        Row: {
          id: number
          violation_id: string
          previous_status: string | null
          new_status: string
          comment: string | null
          updated_by: string | null
          created_at: string
        }
        Insert: {
          id?: number
          violation_id: string
          previous_status?: string | null
          new_status: string
          comment?: string | null
          updated_by?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          violation_id?: string
          previous_status?: string | null
          new_status?: string
          comment?: string | null
          updated_by?: string | null
          created_at?: string
        }
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
  }
}

