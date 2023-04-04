export interface ICharacter {
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
}

export interface ICharacterGem {
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
}
