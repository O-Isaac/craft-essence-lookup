import { BuffType } from '@atlasacademy/api-connector/dist/Schema/Buff'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Dispatch, SetStateAction, useState } from 'react'
import Effects, { Effect } from '../../enums/effects'

const ITEM_HEIGHT = 48

export const BUFFS_TYPES_LIST = [BuffType.UP_DAMAGE, BuffType.UP_DAMAGE_INDIVIDUALITY_ACTIVEONLY]

interface PowermodsDropdownsProps {
    currentFilter: Effect
    setFilter: Dispatch<SetStateAction<Effect>>
}

export default function PowermodsDropdowns(props: PowermodsDropdownsProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const { currentFilter, setFilter } = props

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    const handleSelect = (effect: Effect) => {
        const buffType = effect.buffType
        const traitValue = effect.traitValue

        if (currentFilter.buffType == buffType && currentFilter.traitValue === traitValue) {
            setFilter({ buffType: null, traitValue: null })
            setAnchorEl(null)
            return
        }

        setFilter(effect)
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                id="basic-button"
                className="px-2 py-3 transition-all shadow-md rounded hover:bg-gray-300"
                focusVisibleClassName="bg-gray-500"
                onClick={handleClick}
            >
                    <img
                        width={25}
                        src={'https://static.atlasacademy.io/JP/BuffIcons/bufficon_302.png'}
                        alt={'Powermods Icons'}
                    />
            </Button>

            <Menu
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '30ch',
                    },
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {Object.values(Effects)
                    .filter((value) => BUFFS_TYPES_LIST.includes(value.buffType))
                    .map((element, i) => {
                        return (
                            <MenuItem key={i} onClick={() => handleSelect(element)}>
                                {element.alt}
                            </MenuItem>
                        )
                    })}
            </Menu>
        </>
    )
}
