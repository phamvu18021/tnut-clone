const token = process.env.TOKEN;
export const fetchAuth = ({
  url,
  method,
  revalidate
}: {
  url: string;
  method?: "PUT" | "PATH";
  revalidate?: number;
}) => {
  return fetch(url, {
    method: method || "GET",
    headers: {
      Authorization: `Bearer ${token}`
    },
    next: { revalidate }
  });
};

export const fetchGraphQL = async ({
  query,
  variables = {}
}: {
  query: string;
  variables?: any;
}) => {
  const res = await fetch("/api/graphql-api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "GraphQL request failed");
  }

  const result = await res.json();
  return result.data; // Trả về kết quả `data` từ GraphQL.
};
