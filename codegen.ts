import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://loamore-api-6fmu.vercel.app/graphql',
  documents: 'src/gql/**/*.graphql',
  hooks: {afterAllFileWrite: ['prettier --write']},
  config: {
    typesPrefix: 'I',
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase',
    },
  },
  generates: {
    'src/gql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        addInfiniteQuery: true,
        skipTypename: true,
        fetcher: './fetcher#axiosFetcher',
      },
    },
  },
};

export default config;
