import { Buff, CraftEssence, DataVal } from '@atlasacademy/api-connector'
import { FuncType } from '@atlasacademy/api-connector/dist/Schema/Func'
import { useContext, useEffect, useRef, useState } from 'react'
import DatabaseContext from '../contexts/Database'
import { Effect } from '../enums/effects'
import chunks from '../utility/chunks'

export interface Row {
    id: string
    name: string
    rarity: string
    thumb: string
    cost: string
    buffs: Buff.Buff[]
    svals: {
        normal: DataVal.DataVal[]
        mlb: DataVal.DataVal[]
    }
}

const createRow = (
    name: string,
    id: string,
    rarity: string,
    thumb: string,
    cost: string,
    buffs: Buff.Buff[],
    svals: Row['svals']
): Row => ({
    name,
    id,
    rarity,
    thumb,
    cost,
    buffs,
    svals,
})

const utils = {
    createRow,
}

export default function useData() {
    const { database } = useContext(DatabaseContext)
    const [data, setData] = useState<CraftEssence.CraftEssence[]>([])

    const [dataPerPage, setDataPerPage] = useState(5)
    const [dataTable, setDataTable] = useState<Row[][]>([])
    const [filterEffect, setFilterEffect] = useState<Effect>({
        buffType: null,
        traitValue: null,
    })

    let isFirstRender = useRef(true).current

    // This handle changes in database to add all update into data state
    useEffect(() => {
        if (isFirstRender) {
            database?.craftEssence.toArray().then((data) => setData(data[0].data ?? []))

            isFirstRender = false
        }
    }, [database])

    // This make rows
    useEffect(() => {
        if (data.length > 0) {
            const Rows = data
                .filter((ce) => {
                    const buffType = filterEffect.buffType
                    const traitValue = filterEffect.traitValue

                    if (buffType === null && traitValue === null) return true

                    const buffs = ce.skills.flatMap((skill) => {
                        return skill.functions.flatMap((func) => func.buffs)
                    })

                    const hasTval = buffs.some(
                        (buff) =>
                            buff.type === buffType && buff.tvals.map(({ name }) => name).includes(traitValue as string)
                    )

                    const hasVal = buffs.some(
                        (buff) =>
                            buff.type === buffType && buff.vals.map(({ name }) => name).includes(traitValue as string)
                    )

                    if (hasVal) return true
                    if (hasTval) return true

                    return false
                })
                .sort((a, b) => b.collectionNo - a.collectionNo)
                .map((ce) => {
                    const { name, collectionNo, extraAssets } = ce
                    const { faces } = extraAssets

                    const skills = ce.skills.filter(
                        (skill) => skill.num === 1 && (skill.strengthStatus === 0 || skill.strengthStatus === 99)
                    )

                    const buffs = skills.flatMap((skill) => {
                        return skill.functions
                            .filter((func) => func.funcType !== FuncType.GAIN_NP)
                            .flatMap((func) => func.buffs)
                    })

                    const svals = ce.skills.flatMap((skill) => {
                        return skill.functions
                            .filter((func) => func.funcType !== FuncType.GAIN_NP)
                            .flatMap((func) => func.svals)
                    })

                    const svalsMLB = ce.skills
                        .filter((skill) => skill.num === 1 && skill.strengthStatus === 99)
                        .flatMap((skill) => {
                            return skill.functions
                                .filter((func) => func.funcType !== FuncType.GAIN_NP)
                                .flatMap((func) => func.svals)
                        })

                    if (faces.equip) {
                        const thumb = Object.values(faces.equip)[0].replace('.png', '_bordered.png')
                        return createRow(name, `${collectionNo}`, `${ce.rarity}`, thumb, `${ce.cost}`, buffs, {
                            mlb: svalsMLB,
                            normal: svals,
                        })
                    }

                    return createRow(name, `${collectionNo}`, `${ce.rarity}`, '', `${ce.cost}`, buffs, {
                        mlb: svalsMLB,
                        normal: svals,
                    })
                })

            const groupedRows = chunks(Rows, dataPerPage)

            setDataTable(groupedRows)
        }
    }, [data, dataPerPage, filterEffect])

    return { currentFilter: filterEffect, setFilterEffect, dataTable, setDataPerPage, dataPerPage, utils }
}
