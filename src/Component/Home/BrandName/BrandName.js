import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
    { label: 'Fabindia', year: 1994 },
    { label: 'Freakins', year: 1972 },
    { label: 'Zara', year: 1974 },
    { label: 'aurelia', year: 2008 },
    { label: 'Westside', year: 1957 },
    { label: "Manyavar", year: 1993 },
    { label: 'ONLY', year: 1994 },
    {label: 'W For Woman',year: 2003},
    { label: 'Allen Solly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {label: 'BIBA',year: 2001},
    {label: 'Completedworks',year: 2002},
    {label: 'Maria Tash',year: 2003},
    {label: 'Martha Calvo',year: 2003},
    {label: 'Mejuri',year: 2003},
    {label: 'Alighieri',year: 2003},
    {label: 'Oma The Label',year: 2003},
    {label: 'Monica Vinader',year: 2003},
    {label: 'Missoma London',year: 2003},
    {label: 'Loveness Lee',year: 2003},
    {label: 'Centrino',year: 2003},
    {label: 'KazarMax',year: 2003},
    {label: 'Skechers',year: 2003},
    {label: 'ALBERTO TORRESI',year: 2003},
    {label: 'BATA',year: 2003},
    {label: 'TRASE',year: 2003},
    {label: 'Mochi',year: 2003},
    {label: 'FASHIMO',year: 2003}
]

export default function BrandName() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ maxWidth: 800 }}
            renderInput={(params) => <TextField {...params} label="Brands"/>}
        />
    )
}
