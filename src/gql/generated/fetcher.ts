import {baseInstance} from '~/gql/generated/baseInstance';

export const axiosFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
): (() => Promise<TData>) => {
  return async () => {
    return await baseInstance
      .post('/', {
        query: query,
        variables: variables,
      })
      .then(res => {
        return res.data.data;
      });
  };
};
