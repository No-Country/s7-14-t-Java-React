import useSWR from 'swr'

export const useComments = (id, fetcher) => {
    const { data, error, isLoading } = useSWR(`https://sleek-pen-production-f98d.up.railway.app/comments/${id}`, fetcher);
    return {
      comment: data,
      isError: error,
      isLoading,
    };
  };