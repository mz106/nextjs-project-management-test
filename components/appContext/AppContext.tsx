import { createContext, Dispatch } from 'react'
type ContextObj = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    user: {
        username: string,
        password: string,
        goals: Array<object>
    },
    setUser: React.Dispatch<React.SetStateAction<object>>
}
const AppContext = createContext<ContextObj>({
    isLoggedIn: false,
    setIsLoggedIn: () => null,
    user: {
        username: "",
        password: "",
        goals: []
    },
    setUser: () => null

});
export default AppContext
