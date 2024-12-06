// "use client"
// import { createContext, ReactNode, useContext, useState } from "react"
// import { useRouter } from "next/navigation";

// interface Context{
//     isAuthenticated:Boolean,
//     login:()=>void,
//     logout:()=>void
// }

// export const AuthContext = createContext<Context | undefined>(undefined);

// export default function AuthProvider({children}:{children:ReactNode}){
//     const[isAuthenticated,setIsAuthenticated]=useState(false);
//     const router=useRouter()

//     const login=()=>{
//         console.log("hiiii")
//         setIsAuthenticated(true);
//         router.push("/")
//     }
    
//     const logout=()=>{
//         setIsAuthenticated(false);
//         router.push("/login")
//     }

//     return (
//         <>
//         <AuthContext.Provider value={{isAuthenticated,login,logout}}>
//             {children}
//         </AuthContext.Provider>
        
//         </>
//     )
// }

// "use client"
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//       throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
//   };