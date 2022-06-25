import { Routes, Route } from 'react-router-dom'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Container } from '@mui/material'

import Home from './pages/home'
import Credits from './pages/credits'

import AtlasDatabase, { createDatabase } from './utility/createDatabase'
import createHashTable, { latestHash } from './utility/createHashTable'
import Navigation from './components/navigation'
import Footer from './components/footer'
import DatabaseContext from './contexts/Database'

const App = () => {
    const [database] = useState<AtlasDatabase>(createDatabase())

    const isFirtRender = useRef(true)

    useEffect(() => {
        if (isFirtRender.current) {
            latestHash().then(async (hash) => {
                const table = await database.craftEssence.get(hash)

                if (!table) {
                    toast
                        .promise(createHashTable({ database }), {
                            loading: `Getting data ${hash}`,
                            success: `Successfully data saved ${hash}`,
                            error: `Error getting data ${hash}`,
                        })
                        .then(() => {
                            window.location.reload()
                        })
                }
            })

            isFirtRender.current = false
        }
    })

    return (
        <Fragment>
            <DatabaseContext.Provider value={{ database }}>
                <Toaster />
                <Navigation />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/credits" element={<Credits />} />
                    </Routes>
                </Container>
                <Footer />
            </DatabaseContext.Provider>
        </Fragment>
    )
}

export default App
