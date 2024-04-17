"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

export const getMovies = async ({ search }) => {
  const supabase = await createServerSupabaseClient();
  let query = supabase.from("movies").select("*");

  if (search) {
    query = query.filter("title", "ilike", `%${search}%`);
  }
  query = query.order("popularity", { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error("Error getting movies:", error);
    return [];
  }
  return data;
};
