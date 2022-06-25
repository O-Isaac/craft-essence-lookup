import { BuffType } from '@atlasacademy/api-connector/dist/Schema/Buff'

const Effects = {
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
}

export interface Effect {
    buffType: string | null
    traitValue: string | null
}

export default Effects
