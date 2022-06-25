import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface RowSelectListProps {
    dataPerPage: number
    setDataPerPage: Dispatch<SetStateAction<number>>
    rowsOptions: Array<{ id: number; value: number; unavailable: boolean }>
}

const RowSelectListBox = (props: RowSelectListProps) => {
    const { dataPerPage, setDataPerPage, rowsOptions } = props

    const SelectProps: SelectProps = {
        labelId: 'select-rows-labeñ',
        id: 'select-rows',
        value: dataPerPage,
        label: 'Rows',
        onChange: (event) => setDataPerPage(event.target.value as number),
    }

    return (
        <FormControl variant="outlined" sx={{ minWidth: 80 }}>
            <InputLabel id="select-rows-label">Rows</InputLabel>
            <Select {...SelectProps}>
                {rowsOptions.map(({ value }, index) => (
                    <MenuItem key={index} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default RowSelectListBox
