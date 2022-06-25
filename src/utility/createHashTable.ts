import { CraftEssence } from "@atlasacademy/api-connector"
import AtlasDatabase from "./createDatabase"

const latestCraftEssences = async (): Promise<CraftEssence.CraftEssence[]> => {
    const request = await fetch('https://api.atlasacademy.io/export/JP/nice_equip_lang_en.json')
    const craftEssences: CraftEssence.CraftEssence[] = await request.json()
    return craftEssences
}

interface Hash {
    JP: { hash: string, timestamp: number }
}

export const latestHash = async (): Promise<string> => {
    const response = await fetch('https://api.atlasacademy.io/info')
    const json: Hash = await response.json()
    return json.JP.hash
}


interface Props {
    database: AtlasDatabase
}

const createHashTable = async (props: Props): Promise<void> => {
    const { database } = props
    
    const id = await latestHash()
    const data = await latestCraftEssences()

    await database.craftEssence.clear()
    await database.craftEssence.add({ id, data })
}


export default createHashTable