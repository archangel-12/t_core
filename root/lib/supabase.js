import { createBrowserClient } from '@supabase/ssr'
import { getToken } from '@clerk/nextjs'

export const createSupabaseClient = async () => {
  const token = await getToken({ template: 'supabase' });

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
};