interface SkillsEnum {
    [key: string]: {
        description: string
        value: {
            max?: string
            min: string
        }
    }
}

const Skills: SkillsEnum = {
    993316: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    967713: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    993161: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    993150: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992946: {
        description: 'Gain Critical Stars',
        value: {
            min: '12',
            max: '15',
        },
    },
    992903: {
        description: 'Gain Critical Stars',
        value: {
            min: '30',
        },
    },
    992902: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992806: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992753: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992656: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992625: {
        description: 'Gain Critical Stars',
        value: {
            min: '15',
            max: '20',
        },
    },
    992418: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992342: {
        description: 'Gain Critical Stars',
        value: {
            min: '15',
            max: '20',
        },
    },
    991939: {
        description: 'Gain Critical Stars',
        value: {
            min: '15',
            max: '20',
        },
    },
    992025: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    992001: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    991974: {
        description: 'Gain Critical Stars',
        value: {
            min: '20',
        },
    },
    991907: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    991756: {
        description: 'Gain Critical Stars',
        value: {
            min: '15',
            max: '20',
        },
    },
    991569: {
        description: 'Gain Critical Stars',
        value: {
            min: '15',
            max: '20',
        },
    },
    991284: {
        description: 'Invencible',
        value: {
            min: '1 Time - 3 Turns',
        },
    },
    990825: {
        description: 'Gain Critical Stars',
        value: {
            min: '10',
            max: '12',
        },
    },
    990539: {
        description: 'Evade',
        value: {
            min: '1 Time',
        },
    },
    990414: {
        description: 'Card Up for Card Buster',
        value: {
            min: '10%',
            max: '15%',
        },
    },
    990370: {
        description: 'Gain Critical Stars',
        value: {
            min: '15',
            max: '20',
        },
    },
    993146: {
      description: 'Add Trait',
      value: {
        min: "Like"
      }
    },
    993107: {
      description: 'Curse 3000 on all enemies',
      value: {
        min: '5 Turns'
      }
    },
    993002: {
      description: 'Charge NP to all party',
      value: {
        min: '10%'
      }
    }
}

export interface SkillEnum {
    description: string
    value: {
        min: string
        max?: string
    }
}

export default Skills
