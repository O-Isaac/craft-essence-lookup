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
	iconId: 323
	buffType: BuffType.UP_HATE,
	traitValue: 'buffTargetFocus',
	alt: 'TAUNT',
    }
}

export interface Effect {
    buffType: string | null
    traitValue: string | null
}

export default Effects
