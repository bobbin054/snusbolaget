export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Products: {
        Row: {
          contentWeight: string | null
          contentWeightUnit: string | null
          created_at: string | null
          description: string | null
          id: string
          imageUrl: string | null
          name: string | null
          nicotineAmount: string | null
          nicotineLevel: string | null
          price: number | null
          producer: string | null
          starRating: number | null
          taste: string | null
          type: string | null
        }
        Insert: {
          contentWeight?: string | null
          contentWeightUnit?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          imageUrl?: string | null
          name?: string | null
          nicotineAmount?: string | null
          nicotineLevel?: string | null
          price?: number | null
          producer?: string | null
          starRating?: number | null
          taste?: string | null
          type?: string | null
        }
        Update: {
          contentWeight?: string | null
          contentWeightUnit?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          imageUrl?: string | null
          name?: string | null
          nicotineAmount?: string | null
          nicotineLevel?: string | null
          price?: number | null
          producer?: string | null
          starRating?: number | null
          taste?: string | null
          type?: string | null
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
