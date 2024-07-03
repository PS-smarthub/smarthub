// src/queryClient.js

import { QueryClient } from "@tanstack/react-query";

const fetcher = async ({ queryKey, ...rest }) => {
  const [url, options] = queryKey;
  const token = localStorage.getItem("token"); // ou de onde você estiver armazenando o token

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetcher,
      // Adicione outras opções padrão, se necessário
    },
  },
});

export default queryClient;
