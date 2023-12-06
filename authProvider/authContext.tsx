import { Auth } from "../../api/models/auth/auth.model";
import TokenStorage from "../../helpers/tokenStorage";
import { createContext } from "react";

/// types
import { IAuthContext, IAuthStore } from "./types";

export const getInitialUserStoreData = (): IAuthStore => {
   // Get if localStorage has saved token
   const auth: Auth | null = TokenStorage.get();

   return {
      auth,
      error: null,
      loading: false,
   };
};

export const authContextDefault: IAuthContext = {
   ...getInitialUserStoreData(),
   signIn: () => new Promise(() => {}),
   refreshToken: () => new Promise(() => {}),
   signOut: () => new Promise(() => {}),
   isSignedIn: () => false,
};

export const AuthContext = createContext<IAuthContext>(null!);

AuthContext.displayName = "AuthContext";
