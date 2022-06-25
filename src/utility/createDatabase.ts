import { CraftEssence } from '@atlasacademy/api-connector';
import Dexie, { Table } from 'dexie';

interface CraftEssenceData {
    id: string // This is the hash of the version
    data: CraftEssence.CraftEssence[]
}

export default class AtlasDatabase extends Dexie {
    craftEssence!: Table<CraftEssenceData>;

    constructor () {
        super('AtlasAcademy')

        this.version(1).stores({
            craftEssence: 'id, data'
        })
    }
}

export const createDatabase = () => new AtlasDatabase()
