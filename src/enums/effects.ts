import { BuffType } from '@atlasacademy/api-connector/dist/Schema/Buff'

interface Effects {
    [key: string]: {
        iconId: number
        buffType: BuffType
        traitValue: string
        alt: string
    }
}

const Effects: Effects = {
    BUSTER_UP: {
        iconId: 314,
        buffType: BuffType.UP_COMMANDALL,
        traitValue: 'cardBuster',
        alt: 'Buster Up',
    },
    ARTS_UP: {
        iconId: 313,
        buffType: BuffType.UP_COMMANDALL,
        traitValue: 'cardArts',
        alt: 'Arts Up',
    },
    QUICK_UP: {
        iconId: 312,
        buffType: BuffType.UP_COMMANDALL,
        traitValue: 'cardQuick',
        alt: 'Quick Up',
    },
    GUTS: {
        iconId: 304,
        buffType: BuffType.GUTS,
        traitValue: 'buffGuts',
        alt: 'Guts',
    },
    NP_GAIN_UP: {
        iconId: 303,
        buffType: BuffType.UP_DROPNP,
        traitValue: 'buffPositiveEffect',
        alt: 'NP Gain Up',
    },
    NP_DAMAGE_UP: {
        iconId: 310,
        buffType: BuffType.UP_NPDAMAGE,
        traitValue: 'buffNpDamageUp',
        alt: 'NP Damage Up',
    },
    NP_PER_TURN: {
        iconId: 319,
        buffType: BuffType.REGAIN_NP,
        traitValue: 'buffPositiveEffect',
        alt: 'NP Per Up',
    },
    DAMAGE_CUT: {
        iconId: 301,
        buffType: BuffType.SUB_SELFDAMAGE,
        traitValue: 'buffIncreaseDefence',
        alt: 'Damage Cut',
    },
    DEFENSE_UP: {
        iconId: 301,
        buffType: BuffType.UP_DEFENCE,
        traitValue: 'buffDefenceUp',
        alt: 'DEF Up',
    },
    DMG_UP_VS_GIANT: {
        iconId: 302,
        buffType: BuffType.UP_DAMAGE,
        traitValue: 'giant',
        alt: 'DMG UP vs Giant',
    },
    DMG_UP_VS_GOOD: {
        iconId: 302,
        buffType: BuffType.UP_DAMAGE,
        traitValue: 'alignmentGood',
        alt: 'DMG Up vs Good',
    },
    DMG_UP_VS_EVIL: {
        iconId: 302,
        buffType: BuffType.UP_DAMAGE,
        traitValue: 'alignmentEvil',
        alt: 'DMG Up vs Evil',
    },
    DMG_UP_VS_ASSASSIN: {
        iconId: 302,
        buffType: BuffType.UP_DAMAGE,
        traitValue: 'classAssassin',
        alt: 'DMG Up vs Assassin',
    },
    DMG_UP_VS_CASTER: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'classCaster',
      alt: 'DMG Up vs Caster',
    },
    DMG_UP_VS_RIDER: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'classRider',
      alt: 'DMG Up vs Rider',
    },
    DMG_UP_VS_BERSERKER: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'classBerserker',
      alt: 'DMG Up vs Berserker',
    },
    DMG_UP_VS_UNDEAD: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'undead',
      alt: 'DMG Up vs Undead',
    },
    
    DMG_UP_VS_ENEMY_WITH_BURN: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'buffBurn',
      alt: 'DMG Up vs Enemy with burn',
    },
    DMG_UP_VS_DIVINE: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'divine',
      alt: 'DMG Up vs Divine',
    },
    DMG_UP_VS_DEMONIC: {
      iconId: 302,
      buffType: BuffType.UP_DAMAGE,
      traitValue: 'divine',
      alt: 'DMG Up vs Demonic',
    },
    DMG_UP_VS_HUMANOID: {
        iconId: 302,
        buffType: BuffType.UP_DAMAGE,
        traitValue: 'humanoid',
        alt: 'DMG Up vs Humanoid',
    },
    OVERCHARGE_UP: {
        iconId: 336,
        buffType: BuffType.UP_CHAGETD,
        traitValue: 'buffPositiveEffect',
        alt: 'Overcharge',
    },
    START_PER_TURN: {
        iconId: 320,
        buffType: BuffType.REGAIN_STAR,
        traitValue: 'buffPositiveEffect',
        alt: 'Start Per Turn',
    },
    TRIGGER_ON_ENTRY: {
        iconId: 331,
        buffType: BuffType.ENTRY_FUNCTION,
        traitValue: 'buffPositiveEffect',
        alt: 'Trigger Skill On Entry',
    },
    IGNORE_INVENCIBLE: {
        iconId: 329,
        buffType: BuffType.PIERCE_INVINCIBLE,
        traitValue: 'buffInvinciblePierce',
        alt: 'Pierce Invencible',
    },
    CRIT_UP: {
        iconId: 324,
        buffType: BuffType.UP_CRITICALDAMAGE,
        traitValue: 'buffCritDamageUp',
        alt: 'Critical Damage Up',
    },
    TAUNT: {
        iconId: 323,
        buffType: BuffType.UP_HATE,
        traitValue: 'buffTargetFocus',
        alt: 'TAUNT',
    },
}

export interface Effect {
    buffType: string | null
    traitValue: string | null
}

export default Effects
