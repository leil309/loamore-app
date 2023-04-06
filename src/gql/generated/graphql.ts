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
  character_engraving: Scalars['Int'];
  character_gear: Scalars['Int'];
  character_gem: Scalars['Int'];
};

export type IEngravingCount = {
  character_engraving: Scalars['Int'];
};

export type IItemCount = {
  character_accessory: Scalars['Int'];
  character_gear: Scalars['Int'];
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
  character_engraving?: Maybe<Array<ICharacterEngraving>>;
  character_gear?: Maybe<Array<ICharacterGear>>;
  character_gem?: Maybe<Array<ICharacterGem>>;
  charisma: Scalars['Int'];
  class: Scalars['String'];
  courage: Scalars['Int'];
  critical: Scalars['Int'];
  domination: Scalars['Int'];
  endurance: Scalars['Int'];
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
  item: IItem;
  item_id: Scalars['BigInt'];
  quality?: Maybe<Scalars['Int']>;
  slot: Scalars['Int'];
};

export type ICharacterEngraving = {
  character: ICharacter;
  character_id: Scalars['BigInt'];
  engraving: IEngraving;
  engraving_id: Scalars['BigInt'];
  id: Scalars['BigInt'];
  level: Scalars['Int'];
  slot: Scalars['Int'];
};

export type ICharacterGear = {
  additional_effect?: Maybe<Scalars['String']>;
  base_effect?: Maybe<Scalars['String']>;
  character: ICharacter;
  character_id: Scalars['BigInt'];
  honing: Scalars['Int'];
  id: Scalars['BigInt'];
  item: IItem;
  item_id: Scalars['BigInt'];
  quality: Scalars['Int'];
  slot: Scalars['Int'];
};

export type ICharacterGem = {
  character: ICharacter;
  character_id: Scalars['BigInt'];
  direction: Scalars['String'];
  effect_type: Scalars['String'];
  id: Scalars['BigInt'];
  item: IItem;
  item_id: Scalars['BigInt'];
  level: Scalars['Int'];
  rate: Scalars['Int'];
  skill: Scalars['String'];
  slot: Scalars['Int'];
};

export enum IClassYn {
  N = 'N',
  Y = 'Y',
}

export type IEngraving = {
  _count: IEngravingCount;
  character_engraving?: Maybe<Array<ICharacterEngraving>>;
  class_yn: IClassYn;
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  info: Scalars['String'];
  name: Scalars['String'];
};

export type IItem = {
  _count: IItemCount;
  character_accessory?: Maybe<Array<ICharacterAccessory>>;
  character_gear?: Maybe<Array<ICharacterGear>>;
  character_gem?: Maybe<Array<ICharacterGem>>;
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
  set_name?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
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
      item_id: any;
      quality?: number | null;
      slot: number;
      item: {
        id: any;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
      };
    }> | null;
    character_engraving?: Array<{
      character_id: any;
      engraving_id: any;
      id: any;
      level: number;
      slot: number;
      engraving: {
        id: any;
        class_yn: IClassYn;
        image_uri: string;
        info: string;
        name: string;
      };
    }> | null;
    character_gear?: Array<{
      additional_effect?: string | null;
      base_effect?: string | null;
      character_id: any;
      honing: number;
      id: any;
      item_id: any;
      quality: number;
      slot: number;
      item: {
        id: any;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
      };
    }> | null;
    character_gem?: Array<{
      character_id: any;
      direction: string;
      effect_type: string;
      id: any;
      item_id: any;
      level: number;
      rate: number;
      skill: string;
      slot: number;
      item: {
        id: any;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
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
      item_id
      quality
      slot
      item {
        id
        image_uri
        name
        set_name
        tier
      }
    }
    character_engraving {
      character_id
      engraving {
        id
        class_yn
        image_uri
        info
        name
      }
      engraving_id
      id
      level
      slot
    }
    character_gear {
      additional_effect
      base_effect
      character_id
      honing
      id
      item_id
      quality
      slot
      item {
        id
        image_uri
        name
        set_name
        tier
      }
    }
    character_gem {
      character_id
      direction
      effect_type
      id
      item_id
      level
      rate
      skill
      slot
      item {
        id
        image_uri
        name
        set_name
        tier
      }
    }
    charisma
    class
    courage
    critical
    domination
    endurance
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
