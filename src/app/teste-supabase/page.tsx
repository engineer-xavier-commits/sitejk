import { supabase } from "@/lib/supabase";

export default async function TesteSupabase() {
  if (!supabase) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Teste Supabase
        </h1>
        <p className="mt-6 text-red-600">
          Variáveis do Supabase não configuradas no ambiente do deploy.
        </p>
      </main>
    );
  }

  const { data, error } = await supabase
    .from("guests")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Teste Supabase
      </h1>

      {error && (
        <pre className="mt-6 text-red-600">
          {JSON.stringify(error, null, 2)}
        </pre>
      )}

      {data && (
        <pre className="mt-6">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </main>
  );
}