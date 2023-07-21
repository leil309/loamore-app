import {
  ICharacterSkillCounterYn,
  IClassYn,
  ISelectedYn,
} from '~/gql/generated/graphql';

export interface ICharacter {
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
}

export interface ICharacterGem {
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
}

export interface ICharacterGear {
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
}

export interface IEngraving {
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
}

export interface IScript {
  Card: any;
  CardSet: any;
  Engrave: any;
  Equip: any;
  GemSkillEffect: any;
  Skill: any;
}

export interface IGem {
  name: string;
  imageUri: string;
  slot: number;
  level: number;
  tier: number;
  class: string;
  skill: string;
  rate: number;
  effectType: string;
  direction: string;
  skillIcon?: string | undefined | null;
}

export interface IGear {
  name: string;
  honing: number;
  imageUri: string;
  slot: number;
  tier: number;
  level: number;
  quality: number;
  setName: string;
  grade: number;
  setEffect: Array<any>;
  baseEffect: Array<string>;
  additionalEffect: Array<string>;
}

export interface IAccessory {
  name: string;
  imageUri: string;
  slot: number;
  tier: number;
  quality: number;
  baseEffect: Array<string>;
  additionalEffect: Array<string>;
  braceletEffect: Array<string>;
  engraving: Array<any>;
}

export interface IGetEngraving {
  className?: string | null | undefined;
  name: string;
  classYn: 'Y' | 'N';
  imageUri: string;
  info: string;
  level: number;
}

export enum CounterYn {
  Y = 'Y',
  N = 'N',
}

export enum SelectedYn {
  Y = 'Y',
  N = 'N',
}

export interface ISkill {
  name: string;
  class: string;
  imageUri: string;
  level: number;
  counterYn: CounterYn; //ICounterYn;
  superArmor: string;
  weakPoint: number;
  staggerValue: string;
  attackType: string;
  tripods: Array<ITripod> | null | undefined;
  rune: any | null | undefined;
}

export interface ISkillAdd {
  name: string;
  class: string;
  tripods: Array<ITripod>;
  rune: any;
}

export interface ITripod {
  name: string;
  skillName: string;
  imageUri: string;
  level: number;
  tier: number;
  slot: number;
  selected: SelectedYn;
}

export interface ICrawCharacter {
  class: string;
  userName: string;
  level: any;
  itemLevel: any;
  guildName?: string;
  serverName: string;
  stats: {
    basic: {
      attack_power: number;
      max_health: number;
    };
    battle: {
      critical: number;
      specialization: number;
      domination: number;
      swiftness: number;
      endurance: number;
      expertise: number;
    };
    virtues: {
      wisdom: number;
      courage: number;
      charisma: number;
      kindness: number;
    };
    engraving?: Array<IStatsEngraving> | undefined | null;
  };
  imageUri: string;
  engraving?: Array<IEngraving>;
  gemList?: Array<IGem>;
  gearList?: Array<IGear>;
  accessoryList?: Array<IAccessory>;
  skillList: Array<ISkill>;
  avatarList?: Array<any>;
  cardList?: Array<any>;
  elixir?: Array<any>;
  ownUserName?: Array<any>;
  success: boolean;
  error: string;
}
export interface IStatsEngraving {
  name: string;
  level: number;
}
