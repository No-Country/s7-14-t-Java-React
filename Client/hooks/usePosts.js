import useSWR from 'swr'

export const usePosts = (id, fetcher) => {

    const { data, error, isLoading } = useSWR(`https://sleek-pen-production-f98d.up.railway.app/posts/${id}`, fetcher);
  
    return {
      post: data,
      isError: error,
      isLoading,
    };
  };