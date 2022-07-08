import { Tooltip } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

import Effects, { Effect } from '../../enums/effects'
import RowSelectListBox from './select-rows'
import PowermodsDropdowns from './powermods-dropdown'
import { BuffType } from '@atlasacademy/api-connector/dist/Schema/Buff'

interface PropsFilterBtn {
    src: string
    alt: string
    effect: Effect
    setFilter: Dispatch<SetStateAction<Effect>>
    currentFilter: Effect
}

const FilterButton = (props: PropsFilterBtn) => {
    const { src, alt, effect, setFilter, currentFilter } = props

    const setFilterHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const buffType = effect.buffType
        const traitValue = effect.traitValue

        if (currentFilter.buffType == buffType && currentFilter.traitValue === traitValue) {
            setFilter({ buffType: null, traitValue: null })
            e.currentTarget.classList.remove('filter-active')
            return
        }

        // Remove all other selected items
        const selectedButtons = document.querySelectorAll('#filter')

        selectedButtons.forEach((el) => el.classList.remove('filter-active'))

        e.currentTarget.classList.add('filter-active')
        setFilter(effect)
    }

    const buttonClasses = 'px-3 py-3 transition-all shadow-md rounded hover:bg-gray-300'

    return (
        <Tooltip title={alt}>
            <button id="filter" onClick={setFilterHandler} className={buttonClasses}>
                <img width={25} src={src} alt={alt} />
            </button>
        </Tooltip>
    )
}

interface FilterBTNProps {
    dataPerPage: number
    currentFilter: Effect
    setDataPerPage: Dispatch<SetStateAction<number>>
    setFilterEffect: Dispatch<SetStateAction<Effect>>
}

const rowsOptions = [
    { id: 1, value: 5, unavailable: false },
    { id: 2, value: 10, unavailable: false },
    { id: 3, value: 15, unavailable: false },
    { id: 4, value: 25, unavailable: false },
    { id: 4, value: 50, unavailable: false },
]

export default function FilterBTNSection(props: FilterBTNProps) {
    const { currentFilter, dataPerPage, setDataPerPage, setFilterEffect } = props

    return (
        <>
            <RowSelectListBox rowsOptions={rowsOptions} dataPerPage={dataPerPage} setDataPerPage={setDataPerPage} />
            <section className="flex w-full justify-center flex-wrap gap-2">
                {Object.values(Effects)
                    .filter((value) => value.buffType !== BuffType.UP_DAMAGE)
                    .map((effect, index) => (
                        <FilterButton
                            key={index}
                            currentFilter={currentFilter}
                            setFilter={setFilterEffect}
                            effect={{ buffType: effect.buffType, traitValue: effect.traitValue }}
                            src={`https://static.atlasacademy.io/JP/BuffIcons/bufficon_${effect.iconId}.png`}
                            alt={effect.alt}
                        />
                    ))}

                <PowermodsDropdowns currentFilter={currentFilter} setFilter={setFilterEffect} />
            </section>
        </>
    )
}
