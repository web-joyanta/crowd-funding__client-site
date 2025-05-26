import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}
const userLogin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}
const authInfo = {
    createUser,
    userLogin
}
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;