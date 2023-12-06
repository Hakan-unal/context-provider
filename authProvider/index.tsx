import React, { useState } from "react";

/// types
import { Auth } from "../../api/models/auth/auth.model";
import { useNavigate } from "react-router-dom";

/// data
import { getTokenReq, refreshTokenReq } from "../../api/services/authService";
import { TokenRequest } from "../../api/helpers/sender";
import TokenStorage from "../../helpers/tokenStorage";
import { IAuthProps, IAuthStore } from "./types";
import { AuthContext, authContextDefault } from "./authContext";

/// message
import { message } from "antd";

export function AuthProvider({
   children,
}: IAuthProps): React.ReactElement<IAuthProps> {
   const [state, setState] = useState<IAuthStore>(authContextDefault);
   const navigate = useNavigate();

   const signIn = async ({
      username,
      password,
   }: TokenRequest): Promise<Auth | null> => {
      try {
         setState({ ...state, loading: true });

         const auth = await getTokenReq({ username, password });

         return message
            .open({
               type: "loading",
               content: "Sign in process ...",
               duration: 1.5,
            })
            .then(() => {
               TokenStorage.set(auth);
               setState({ ...state, auth, error: null, loading: false });
               navigate("/");
            })
            .then(() => {
               message.success("Welcome to Axis Simulation Tool ", 2);
               return auth;
            });
      } catch (error: any) {
         if (error.isRadityError) {
            setState({ ...state, error, loading: false });
            return null;
         }
         setState({ ...state, error: null, loading: false });
         throw error;
      }
   };

   const refreshToken = async (): Promise<Auth | null> => {
      setState({ ...state, loading: true });

      try {
         const res = await refreshTokenReq();
         if (res === null) return null;

         const auth: Auth = res;
         TokenStorage.set(auth);

         setState({ ...state, auth, loading: false });
         return auth;
      } catch (error) {
         setState({ ...state, loading: false });
         throw error;
      }
   };

   const signOut = async (): Promise<Auth | null> => {
      setState({ ...state, loading: true });

      return message
         .open({
            type: "loading",
            content: "Sign out process ...",
            duration: 1.5,
         })
         .then(() => {
            TokenStorage.destroy();
            setState({ ...state, auth: null, loading: false });
            navigate("/login");
         })
         .then(() => {
            return message
               .open({
                  type: "success",
                  content: "Logged out",
                  duration: 1.5,
               })
               .then(() => {
                  // for clearing all provider states
                  // unused window.location.reload();

                  return null;
               });
         });
   };

   const isSignedIn = (): boolean => {
      return !!state.auth?.access;
   };

   return (
      <AuthContext.Provider
         value={{
            ...state,
            signIn,
            refreshToken,
            signOut,
            isSignedIn,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
