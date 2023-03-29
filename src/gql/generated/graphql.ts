import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import {axiosFetcher} from './fetcher';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
};

export type ICharacterCount = {
  character_accessory: Scalars['Int'];
  character_gear: Scalars['Int'];
  character_gem: Scalars['Int'];
};

export type IGemCount = {
  character_gem: Scalars['Int'];
};

export type IMutation = {
  /** character 가져오기 */
  upsert: Scalars['Boolean'];
};

export type IMutationUpsertArgs = {
  name: Scalars['String'];
};

export type IQuery = {
  /** character 조회 */
  findCharacter: ICharacter;
};

export type IQueryFindCharacterArgs = {
  name: Scalars['String'];
};

export type ICharacter = {
  _count: ICharacterCount;
  attack_power: Scalars['Int'];
  character_accessory?: Maybe<Array<ICharacterAccessory>>;
  character_gear?: Maybe<Array<ICharacterGear>>;
  character_gem?: Maybe<Array<ICharacterGem>>;
  charisma: Scalars['Int'];
  class: Scalars['String'];
  courage: Scalars['Int'];
  critical: Scalars['Int'];
  domination: Scalars['Int'];
  endurance: Scalars['Int'];
  engraving: Scalars['String'];
  expertise: Scalars['Int'];
  guild_name?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  ins_date: Scalars['DateTime'];
  item_level: Scalars['Float'];
  kindness: Scalars['Int'];
  level: Scalars['Int'];
  max_health: Scalars['Int'];
  name: Scalars['String'];
  server_name: Scalars['String'];
  specialization: Scalars['Int'];
  swiftness: Scalars['Int'];
  upd_date: Scalars['DateTime'];
  wisdom: Scalars['Int'];
};

export type ICharacterAccessory = {
  additional_effect?: Maybe<Scalars['String']>;
  base_effect?: Maybe<Scalars['String']>;
  bracelet_effect?: Maybe<Scalars['String']>;
  character: ICharacter;
  character_id: Scalars['BigInt'];
  engraving?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
  quality?: Maybe<Scalars['Int']>;
  slot: Scalars['Int'];
  tier: Scalars['Int'];
};

export type ICharacterGear = {
  additional_effect?: Maybe<Scalars['String']>;
  base_effect?: Maybe<Scalars['String']>;
  character: ICharacter;
  character_id: Scalars['BigInt'];
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
  quality?: Maybe<Scalars['Int']>;
  set_name?: Maybe<Scalars['String']>;
  slot: Scalars['Int'];
  tier?: Maybe<Scalars['Int']>;
};

export type ICharacterGem = {
  character: ICharacter;
  character_id: Scalars['BigInt'];
  gem: IGem;
  gem_id: Scalars['BigInt'];
  id: Scalars['BigInt'];
  slot: Scalars['Int'];
};

export type IGem = {
  _count: IGemCount;
  character_gem?: Maybe<Array<ICharacterGem>>;
  class: Scalars['String'];
  direction: Scalars['String'];
  effect_type: Scalars['String'];
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  level: Scalars['Int'];
  name: Scalars['String'];
  rate: Scalars['Int'];
  skill: Scalars['String'];
  tier: Scalars['Int'];
};

export type IFindCharacterQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type IFindCharacterQuery = {
  findCharacter: {
    attack_power: number;
    charisma: number;
    class: string;
    courage: number;
    critical: number;
    domination: number;
    endurance: number;
    engraving: string;
    expertise: number;
    guild_name?: string | null;
    id: any;
    image_uri: string;
    ins_date: any;
    item_level: number;
    kindness: number;
    level: number;
    max_health: number;
    name: string;
    server_name: string;
    specialization: number;
    swiftness: number;
    upd_date: any;
    wisdom: number;
    character_accessory?: Array<{
      additional_effect?: string | null;
      base_effect?: string | null;
      bracelet_effect?: string | null;
      character_id: any;
      engraving?: string | null;
      id: any;
      image_uri: string;
      name: string;
      quality?: number | null;
      slot: number;
      tier: number;
    }> | null;
    character_gear?: Array<{
      additional_effect?: string | null;
      base_effect?: string | null;
      character_id: any;
      id: any;
      image_uri: string;
      name: string;
      quality?: number | null;
      set_name?: string | null;
      slot: number;
      tier?: number | null;
    }> | null;
    character_gem?: Array<{
      character_id: any;
      gem_id: any;
      id: any;
      slot: number;
      gem: {
        class: string;
        direction: string;
        effect_type: string;
        id: any;
        image_uri: string;
        level: number;
        name: string;
        rate: number;
        skill: string;
        tier: number;
      };
    }> | null;
  };
};

export const FindCharacterDocument = `
    query FindCharacter($name: String!) {
  findCharacter(name: $name) {
    attack_power
    character_accessory {
      additional_effect
      base_effect
      bracelet_effect
      character_id
      engraving
      id
      image_uri
      name
      quality
      slot
      tier
    }
    character_gear {
      additional_effect
      base_effect
      character_id
      id
      image_uri
      name
      quality
      set_name
      slot
      tier
    }
    character_gem {
      character_id
      gem_id
      id
      slot
      gem {
        class
        direction
        effect_type
        id
        image_uri
        level
        name
        rate
        skill
        tier
      }
    }
    charisma
    class
    courage
    critical
    domination
    endurance
    engraving
    expertise
    guild_name
    id
    image_uri
    ins_date
    item_level
    kindness
    level
    max_health
    name
    server_name
    specialization
    swiftness
    upd_date
    wisdom
  }
}
    `;
export const useFindCharacterQuery = <
  TData = IFindCharacterQuery,
  TError = unknown,
>(
  variables: IFindCharacterQueryVariables,
  options?: UseQueryOptions<IFindCharacterQuery, TError, TData>,
) =>
  useQuery<IFindCharacterQuery, TError, TData>(
    ['FindCharacter', variables],
    axiosFetcher<IFindCharacterQuery, IFindCharacterQueryVariables>(
      FindCharacterDocument,
      variables,
    ),
    options,
  );
export const useInfiniteFindCharacterQuery = <
  TData = IFindCharacterQuery,
  TError = unknown,
>(
  variables: IFindCharacterQueryVariables,
  options?: UseInfiniteQueryOptions<IFindCharacterQuery, TError, TData>,
) => {
  return useInfiniteQuery<IFindCharacterQuery, TError, TData>(
    ['FindCharacter.infinite', variables],
    metaData =>
      axiosFetcher<IFindCharacterQuery, IFindCharacterQueryVariables>(
        FindCharacterDocument,
        {...variables, ...(metaData.pageParam ?? {})},
      )(),
    options,
  );
};
