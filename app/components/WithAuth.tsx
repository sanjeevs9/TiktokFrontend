// "use client"
// import { useEffect } from "react";
// import { useAuth } from "./AuthProvider";
// import { useRouter } from "next/navigation";

// const withAuth = (WrappedComponent: React.ComponentType) => {
//   return (props: any) => {
//     const { isAuthenticated } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//       if (!isAuthenticated) {
//         router.push("/login");
//       }
//     }, [isAuthenticated, router]);

//     if (!isAuthenticated) {
//       return null;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;