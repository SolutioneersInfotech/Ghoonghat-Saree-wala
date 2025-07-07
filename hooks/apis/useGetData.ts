import { useQuery } from '@tanstack/react-query';

interface UseMedusaDataOptions<T> {
  endpoint: string; // Example: "/store/products"
  queryParams?: Record<string, any>;
  enabled?: boolean;
}

export function useMedusaData<T>({
  endpoint,
  queryParams = {},
  enabled = true,
}: UseMedusaDataOptions<T>) {
  const queryKey = [endpoint, queryParams];

  const medusa_base_url = "http://localhost:9000" 
  const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
  const apiKey = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;

 const fetchData = async (): Promise<T> => {
  const query = new URLSearchParams(queryParams).toString();
  const url = `${medusa_base_url}${endpoint}?${query}`;

  const apiKey = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;

  if (!apiKey) {
    throw new Error("Publishable API key is missing.");
  }

  const res = await fetch(url, {
    headers: {
      "x-publishable-api-key": apiKey,
      "Accept": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
};


  const { data, error, isLoading, isError, refetch } = useQuery<T>({
    queryKey,
    queryFn: fetchData,
    enabled,
    staleTime: 1000 * 60, // 1 minute cache
  });

  return { data, error, isLoading, isError, refetch };
}
