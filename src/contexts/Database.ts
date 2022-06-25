import { createContext } from "react"
import AtlasDatabase from "../utility/createDatabase"

interface DatabaseContext {
    database: AtlasDatabase | null
}

const DatabaseContext = createContext<DatabaseContext>({
    database: null
})

export default DatabaseContext