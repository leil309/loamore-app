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
