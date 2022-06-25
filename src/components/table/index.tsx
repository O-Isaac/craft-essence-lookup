import {
    BasePartial,
    BuffDescriptor,
    PartialType,
    ParticlePartial,
    ReferencePartial,
    TextPartial,
    TraitDescriptor,
    ValuePartial,
    ValueType,
} from '@atlasacademy/api-descriptor'
import { useState, useEffect } from 'react'
import { Pagination, Tooltip } from '@mui/material'

import useData, { Row } from '../../hooks/useData'

import './index.css'
import FilterBTNSection from './filter-btn'

const BuffDescription = (val: BasePartial) => {
    const value = val

    if (value.type === PartialType.REFERENCE) {
        const reference = value as ReferencePartial

        if (reference.referenceType === 'trait') {
            // Should load trait list from api on save in database
            const referenceValue = TraitDescriptor.describe(reference.value, [], true)
                .partials()
                .map((val) => val.value)
                .join(' ')

            return referenceValue.split(':').join(' ')
        }

        return 'Unknow reference'
    }

    return value.value
}

const BuffValueDescription = (val: BasePartial) => {
    if (val.type === PartialType.VALUE) {
        const partial = val as ValuePartial

        if (partial.valueType === ValueType.NUMBER) {
            return partial.value
        }

        if (partial.valueType === ValueType.PERCENT) {
            return '%' + partial.value
        }

        return ''
    }

    if (val.type === PartialType.TEXT) {
        const partial = val as TextPartial

        if (partial.type === 'text') {
            return partial.value.includes('Lv.') ? '' : partial.value
        }
    }

    if (val.type === PartialType.PARTICLE) {
        const partial = val as ParticlePartial

        if (partial.type === 'particle') {
            return partial.value.includes(' + ') ? '' : partial.value
        }
    }

    return val.value
}

const TableItem = (props: Row) => {
    const { id, name, rarity, thumb, cost, buffs, svals } = props

    const url = `https://apps.atlasacademy.io/db/JP/craft-essence/${id}/effects`

    return (
        <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
                <a title="craft essence page" target="_blank" href={url}>
                    <div className="flex items-center">
                        <div className="w-16 h-16">
                            <img alt="" className="w-full h-full" src={thumb} />
                        </div>
                        <div className="pl-4">
                            <p className="font-medium">{name}</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">#{id}</p>
                        </div>
                    </div>
                </a>
            </td>
            <td className="pl-12">
                <p className="text-sm font-medium leading-none text-gray-800">{rarity}</p>
            </td>
            <td className="pl-12">
                <p className="font-medium"> {cost} </p>
                {/* <p className="text-xs leading-3 text-gray-600 mt-2"> undefined </p> */}
            </td>
            <td className="pl-20">
                <figure className="flex gap-1 w-max px-2">
                    {buffs.map((buff, index) => {
                        const description = BuffDescriptor.describe(buff).partials().map(BuffDescription).join(' ')

                        const value = BuffDescriptor.describeValue(buff, svals.normal[index])
                            ?.partials()
                            .map(BuffValueDescription)
                            .join('')

                        const valueMLB = BuffDescriptor.describeValue(buff, svals.mlb[index])
                            ?.partials()
                            .map(BuffValueDescription)
                            .join('')

                        if (valueMLB) {
                            return (
                                <Tooltip arrow key={index} title={description + ` (${value}) (✦${valueMLB})`}>
                                    <img width={20} alt={`b-${buff.id}`} src={buff.icon} />
                                </Tooltip>
                            )
                        }

                        return (
                            <Tooltip arrow key={index} title={description + `${value ? ` (${value})` : ''}`}>
                                <img width={20} alt={`b-${buff.id}`} src={buff.icon} />
                            </Tooltip>
                        )
                    })}
                </figure>
                {/* <p className="text-xs leading-3 text-gray-600 mt-2"> undefined </p> */}
            </td>
        </tr>
    )
}

const TableComponent = () => {
    const { dataTable, setDataPerPage, dataPerPage, setFilterEffect, currentFilter } = useData()
    const [currentPage, setCurrentPage] = useState(1)
    const [currentData, setCurrentData] = useState<Row[]>([])

    useEffect(() => {
        if (dataTable.length > 0 && currentPage > dataTable.length) {
            console.log(dataTable.length)
            setCurrentData(dataTable[dataTable.length])
            setCurrentPage(dataTable.length)
            return
        }

        dataTable.length > 0 && setCurrentData(dataTable[currentPage - 1])
    }, [dataTable, currentPage])

    if (dataTable.length === 0) return <h1>Loading data...</h1>

    const filterBTNProps = {
        setFilterEffect,
        setDataPerPage,
        currentFilter,
        dataPerPage,
    }

    return (
        <>
            {/* Filter Menu */}
            <FilterBTNSection {...filterBTNProps} />
            {/* Table */}
            <section className="flex justify-center my-6">
                <Pagination
                    shape="rounded"
                    onChange={(_, page) => setCurrentPage(page)}
                    color="primary"
                    page={currentPage}
                    count={dataTable.length}
                    showFirstButton
                    showLastButton
                />
            </section>
            <section className="bg-white -mt-4 px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full whitespace-nowrap overflow-hidden rounded-t">
                    <thead>
                        <tr className="h-16 w-full text-sm leading-none text-white bg-[#1976d2]">
                            <th className="font-normal text-left pl-4">Craft Essence</th>
                            <th className="font-normal text-left pl-12">Rarity</th>
                            <th className="font-normal text-left pl-12">Cost</th>
                            <th className="font-normal text-left pl-20">Effects</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {currentData && currentData.map((rows) => <TableItem key={rows.id} {...rows} />)}
                    </tbody>
                </table>
            </section>
            <section className="flex justify-center my-6">
                <Pagination
                    shape="rounded"
                    onChange={(_, page) => setCurrentPage(page)}
                    color="primary"
                    page={currentPage}
                    count={dataTable.length}
                    showFirstButton
                    showLastButton
                />
            </section>
        </>
    )
}

export default TableComponent
