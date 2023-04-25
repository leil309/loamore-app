import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  UseMutationOptions,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  QueryFunctionContext,
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
  character_skill: Scalars['Int'];
};

export type ICharacterRankOutput = {
  classEngraving?: Maybe<Array<Scalars['String']>>;
  className: Scalars['String'];
  guildName?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  imageUri: Scalars['String'];
  insDate: Scalars['DateTime'];
  itemLevel: Scalars['Float'];
  name: Scalars['String'];
  serverName: Scalars['String'];
  setItem?: Maybe<Array<Scalars['String']>>;
  updDate: Scalars['DateTime'];
};

export type ICharacterSkillCount = {
  character_skill_tripod: Scalars['Int'];
};

export type IClassJobCount = {
  engraving: Scalars['Int'];
};

export type IEngravingCount = {
  character_engraving: Scalars['Int'];
};

export type IItemCount = {
  character_accessory: Scalars['Int'];
  character_gear: Scalars['Int'];
  character_gem: Scalars['Int'];
  character_skill: Scalars['Int'];
};

export type IMutation = {
  /** character 최신정보 조회 */
  upsertCharacter: ICharacter;
  /** class 추출 */
  upsertClass: Array<IClassJob>;
};

export type IMutationUpsertCharacterArgs = {
  name: Scalars['String'];
};

export type IQuery = {
  /** character 빠른 조회 */
  findCharacter: ICharacter;
  /** ranking 조회 */
  findCharacterRanking: Array<ICharacterRankOutput>;
  /** class 목록 조회 */
  findClass: Array<IClassJob>;
};

export type IQueryFindCharacterArgs = {
  name: Scalars['String'];
};

export type IQueryFindCharacterRankingArgs = {
  className?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['BigInt']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ISkillCount = {
  character_gem: Scalars['Int'];
  character_skill: Scalars['Int'];
  tripod: Scalars['Int'];
};

export type ITripodCount = {
  character_skill_tripod: Scalars['Int'];
};

export type ICharacter = {
  _count: ICharacterCount;
  attack_power: Scalars['Int'];
  character_accessory?: Maybe<Array<ICharacterAccessory>>;
  character_engraving?: Maybe<Array<ICharacterEngraving>>;
  character_gear?: Maybe<Array<ICharacterGear>>;
  character_gem?: Maybe<Array<ICharacterGem>>;
  character_skill?: Maybe<Array<ICharacterSkill>>;
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
  use_yn: IUseYn;
};

export type ICharacterEngraving = {
  character: ICharacter;
  character_id: Scalars['BigInt'];
  engraving: IEngraving;
  engraving_id: Scalars['BigInt'];
  id: Scalars['BigInt'];
  level: Scalars['Int'];
  slot: Scalars['Int'];
  use_yn: IUseYn;
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
  use_yn: IUseYn;
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
  skill: ISkill;
  skill_id: Scalars['BigInt'];
  slot: Scalars['Int'];
  use_yn: IUseYn;
};

export type ICharacterSkill = {
  _count: ICharacterSkillCount;
  attack_type?: Maybe<Scalars['String']>;
  character: ICharacter;
  character_id: Scalars['BigInt'];
  character_skill_tripod?: Maybe<Array<ICharacterSkillTripod>>;
  counter_yn: ICharacterSkillCounterYn;
  id: Scalars['BigInt'];
  level?: Maybe<Scalars['Int']>;
  rune?: Maybe<IItem>;
  rune_id?: Maybe<Scalars['BigInt']>;
  skill: ISkill;
  skill_id: Scalars['BigInt'];
  stagger_value?: Maybe<Scalars['String']>;
  super_armor?: Maybe<Scalars['String']>;
  use_yn: IUseYn;
  weak_point?: Maybe<Scalars['Int']>;
};

export enum ICharacterSkillCounterYn {
  N = 'N',
  Y = 'Y',
}

export type ICharacterSkillTripod = {
  character_skill: ICharacterSkill;
  character_skill_id: Scalars['BigInt'];
  id: Scalars['BigInt'];
  level?: Maybe<Scalars['Int']>;
  selected_yn: ISelectedYn;
  tripod: ITripod;
  tripod_id: Scalars['BigInt'];
  use_yn: IUseYn;
};

/** This model has been renamed to 'classJob' during introspection, because the original name 'class' is reserved. */
export type IClassJob = {
  _count: IClassJobCount;
  engraving?: Maybe<Array<IEngraving>>;
  id: Scalars['BigInt'];
  image_uri?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum IClassYn {
  N = 'N',
  Y = 'Y',
}

export type IEngraving = {
  _count: IEngravingCount;
  character_engraving?: Maybe<Array<ICharacterEngraving>>;
  classJob?: Maybe<IClassJob>;
  class_id?: Maybe<Scalars['BigInt']>;
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
  character_skill?: Maybe<Array<ICharacterSkill>>;
  grade?: Maybe<Scalars['Int']>;
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
  set_name?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
};

export enum ISelectedYn {
  N = 'N',
  Y = 'Y',
}

export type ISkill = {
  _count: ISkillCount;
  character_gem?: Maybe<Array<ICharacterGem>>;
  character_skill?: Maybe<Array<ICharacterSkill>>;
  class: Scalars['String'];
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
  tripod?: Maybe<Array<ITripod>>;
};

export type ITripod = {
  _count: ITripodCount;
  character_skill_tripod?: Maybe<Array<ICharacterSkillTripod>>;
  id: Scalars['BigInt'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
  skill: ISkill;
  skill_id: Scalars['BigInt'];
  slot: Scalars['Int'];
  tier: Scalars['Int'];
};

export enum IUseYn {
  N = 'N',
  Y = 'Y',
}

export type IUpsertCharacterMutationVariables = Exact<{
  name: Scalars['String'];
}>;

export type IUpsertCharacterMutation = {
  upsertCharacter: {
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
      engraving?: string | null;
      id: any;
      quality?: number | null;
      slot: number;
      item: {
        name: string;
        image_uri: string;
        grade?: number | null;
        set_name?: string | null;
        tier?: number | null;
        id: any;
      };
    }> | null;
    character_engraving?: Array<{
      id: any;
      level: number;
      slot: number;
      engraving: {
        class_yn: IClassYn;
        id: any;
        image_uri: string;
        info: string;
        name: string;
      };
    }> | null;
    character_gear?: Array<{
      base_effect?: string | null;
      honing: number;
      id: any;
      quality: number;
      slot: number;
      additional_effect?: string | null;
      item: {
        id: any;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
        grade?: number | null;
      };
    }> | null;
    character_gem?: Array<{
      direction: string;
      effect_type: string;
      id: any;
      level: number;
      rate: number;
      skill_id: any;
      slot: number;
      skill: {image_uri: string; name: string; id: any};
      item: {
        id: any;
        grade?: number | null;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
      };
    }> | null;
    character_skill?: Array<{
      attack_type?: string | null;
      counter_yn: ICharacterSkillCounterYn;
      id: any;
      level?: number | null;
      rune_id?: any | null;
      stagger_value?: string | null;
      super_armor?: string | null;
      weak_point?: number | null;
      character_skill_tripod?: Array<{
        level?: number | null;
        selected_yn: ISelectedYn;
        tripod: {name: string; image_uri: string; slot: number; tier: number};
      }> | null;
      skill: {
        class: string;
        id: any;
        image_uri: string;
        name: string;
        tripod?: Array<{
          id: any;
          image_uri: string;
          name: string;
          slot: number;
          tier: number;
        }> | null;
      };
    }> | null;
  };
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
      engraving?: string | null;
      id: any;
      quality?: number | null;
      slot: number;
      item: {
        name: string;
        image_uri: string;
        grade?: number | null;
        set_name?: string | null;
        tier?: number | null;
        id: any;
      };
    }> | null;
    character_engraving?: Array<{
      id: any;
      level: number;
      slot: number;
      engraving: {
        class_yn: IClassYn;
        id: any;
        image_uri: string;
        info: string;
        name: string;
      };
    }> | null;
    character_gear?: Array<{
      base_effect?: string | null;
      honing: number;
      id: any;
      quality: number;
      slot: number;
      additional_effect?: string | null;
      item: {
        id: any;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
        grade?: number | null;
      };
    }> | null;
    character_gem?: Array<{
      direction: string;
      effect_type: string;
      id: any;
      level: number;
      rate: number;
      skill_id: any;
      slot: number;
      skill: {image_uri: string; name: string; id: any};
      item: {
        id: any;
        grade?: number | null;
        image_uri: string;
        name: string;
        set_name?: string | null;
        tier?: number | null;
      };
    }> | null;
    character_skill?: Array<{
      attack_type?: string | null;
      counter_yn: ICharacterSkillCounterYn;
      id: any;
      level?: number | null;
      rune_id?: any | null;
      stagger_value?: string | null;
      super_armor?: string | null;
      weak_point?: number | null;
      character_skill_tripod?: Array<{
        level?: number | null;
        selected_yn: ISelectedYn;
        tripod: {name: string; image_uri: string; slot: number; tier: number};
      }> | null;
      skill: {
        class: string;
        id: any;
        image_uri: string;
        name: string;
        tripod?: Array<{
          id: any;
          image_uri: string;
          name: string;
          slot: number;
          tier: number;
        }> | null;
      };
    }> | null;
  };
};

export type IFindCharacterRankingQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['BigInt']>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type IFindCharacterRankingQuery = {
  findCharacterRanking: Array<{
    classEngraving?: Array<string> | null;
    className: string;
    guildName?: string | null;
    id: any;
    imageUri: string;
    insDate: any;
    itemLevel: number;
    name: string;
    serverName: string;
    setItem?: Array<string> | null;
    updDate: any;
  }>;
};

export type IFindClassQueryVariables = Exact<{[key: string]: never}>;

export type IFindClassQuery = {
  findClass: Array<{
    id: any;
    name: string;
    image_uri?: string | null;
    type: string;
    engraving?: Array<{name: string; id: any; image_uri: string}> | null;
  }>;
};

export const UpsertCharacterDocument = `
    mutation UpsertCharacter($name: String!) {
  upsertCharacter(name: $name) {
    attack_power
    character_accessory {
      additional_effect
      base_effect
      bracelet_effect
      engraving
      id
      item {
        name
        image_uri
        grade
        set_name
        tier
        id
      }
      quality
      slot
    }
    character_engraving {
      engraving {
        class_yn
        id
        image_uri
        info
        name
      }
      id
      level
      slot
    }
    character_gear {
      base_effect
      honing
      id
      item {
        id
        image_uri
        name
        set_name
        tier
        grade
      }
      quality
      slot
      additional_effect
    }
    character_gem {
      direction
      effect_type
      id
      level
      rate
      skill {
        image_uri
        name
        id
      }
      skill_id
      slot
      item {
        id
        grade
        image_uri
        name
        set_name
        tier
      }
    }
    character_skill {
      attack_type
      character_skill_tripod {
        level
        selected_yn
        tripod {
          name
          image_uri
          slot
          tier
        }
      }
      counter_yn
      id
      level
      rune_id
      skill {
        class
        id
        image_uri
        name
        tripod {
          id
          image_uri
          name
          slot
          tier
        }
      }
      stagger_value
      super_armor
      weak_point
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
export const useUpsertCharacterMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    IUpsertCharacterMutation,
    TError,
    IUpsertCharacterMutationVariables,
    TContext
  >,
) =>
  useMutation<
    IUpsertCharacterMutation,
    TError,
    IUpsertCharacterMutationVariables,
    TContext
  >(
    ['UpsertCharacter'],
    (variables?: IUpsertCharacterMutationVariables) =>
      axiosFetcher<IUpsertCharacterMutation, IUpsertCharacterMutationVariables>(
        UpsertCharacterDocument,
        variables,
      )(),
    options,
  );
export const FindCharacterDocument = `
    query FindCharacter($name: String!) {
  findCharacter(name: $name) {
    attack_power
    character_accessory {
      additional_effect
      base_effect
      bracelet_effect
      engraving
      id
      item {
        name
        image_uri
        grade
        set_name
        tier
        id
      }
      quality
      slot
    }
    character_engraving {
      engraving {
        class_yn
        id
        image_uri
        info
        name
      }
      id
      level
      slot
    }
    character_gear {
      base_effect
      honing
      id
      item {
        id
        image_uri
        name
        set_name
        tier
        grade
      }
      quality
      slot
      additional_effect
    }
    character_gem {
      direction
      effect_type
      id
      level
      rate
      skill {
        image_uri
        name
        id
      }
      skill_id
      slot
      item {
        id
        grade
        image_uri
        name
        set_name
        tier
      }
    }
    character_skill {
      attack_type
      character_skill_tripod {
        level
        selected_yn
        tripod {
          name
          image_uri
          slot
          tier
        }
      }
      counter_yn
      id
      level
      rune_id
      skill {
        class
        id
        image_uri
        name
        tripod {
          id
          image_uri
          name
          slot
          tier
        }
      }
      stagger_value
      super_armor
      weak_point
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

export const FindCharacterRankingDocument = `
    query FindCharacterRanking($cursor: BigInt, $take: Int) {
  findCharacterRanking(cursor: $cursor, take: $take) {
    classEngraving
    className
    guildName
    id
    imageUri
    insDate
    itemLevel
    name
    serverName
    setItem
    updDate
  }
}
    `;
export const useFindCharacterRankingQuery = <
  TData = IFindCharacterRankingQuery,
  TError = unknown,
>(
  variables?: IFindCharacterRankingQueryVariables,
  options?: UseQueryOptions<IFindCharacterRankingQuery, TError, TData>,
) =>
  useQuery<IFindCharacterRankingQuery, TError, TData>(
    variables === undefined
      ? ['FindCharacterRanking']
      : ['FindCharacterRanking', variables],
    axiosFetcher<
      IFindCharacterRankingQuery,
      IFindCharacterRankingQueryVariables
    >(FindCharacterRankingDocument, variables),
    options,
  );
export const useInfiniteFindCharacterRankingQuery = <
  TData = IFindCharacterRankingQuery,
  TError = unknown,
>(
  variables?: IFindCharacterRankingQueryVariables,
  options?: UseInfiniteQueryOptions<IFindCharacterRankingQuery, TError, TData>,
) => {
  return useInfiniteQuery<IFindCharacterRankingQuery, TError, TData>(
    variables === undefined
      ? ['FindCharacterRanking.infinite']
      : ['FindCharacterRanking.infinite', variables],
    metaData =>
      axiosFetcher<
        IFindCharacterRankingQuery,
        IFindCharacterRankingQueryVariables
      >(FindCharacterRankingDocument, {
        ...variables,
        ...(metaData.pageParam ?? {}),
      })(),
    options,
  );
};

export const FindClassDocument = `
    query FindClass {
  findClass {
    id
    engraving {
      name
      id
      image_uri
    }
    name
    image_uri
    type
  }
}
    `;
export const useFindClassQuery = <TData = IFindClassQuery, TError = unknown>(
  variables?: IFindClassQueryVariables,
  options?: UseQueryOptions<IFindClassQuery, TError, TData>,
) =>
  useQuery<IFindClassQuery, TError, TData>(
    variables === undefined ? ['FindClass'] : ['FindClass', variables],
    axiosFetcher<IFindClassQuery, IFindClassQueryVariables>(
      FindClassDocument,
      variables,
    ),
    options,
  );
export const useInfiniteFindClassQuery = <
  TData = IFindClassQuery,
  TError = unknown,
>(
  variables?: IFindClassQueryVariables,
  options?: UseInfiniteQueryOptions<IFindClassQuery, TError, TData>,
) => {
  return useInfiniteQuery<IFindClassQuery, TError, TData>(
    variables === undefined
      ? ['FindClass.infinite']
      : ['FindClass.infinite', variables],
    metaData =>
      axiosFetcher<IFindClassQuery, IFindClassQueryVariables>(
        FindClassDocument,
        {...variables, ...(metaData.pageParam ?? {})},
      )(),
    options,
  );
};
