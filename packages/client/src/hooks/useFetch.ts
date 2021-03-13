import useSWR from 'swr';
import api from '../services/api';

export function useFetch<Data = any, Error = any>(url: string) {
  console.log('aqqq');
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    console.log(response);

    return response.data;
  });

  return { data, error, mutate };
}
