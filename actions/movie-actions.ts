"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

export const getMovies = async () => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("movies").select("*");
  console.log(data);
  if (error) {
    console.error("Error getting movies:", error);
    return [];
  }
  return data;
};
