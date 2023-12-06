import { TokenRequest } from "../../api/helpers/sender";
import { Auth } from "../../api/models/auth/auth.model";

export interface IAuthProps {
   children: React.ReactNode;
}

export interface IAuthStore {
   auth: Auth | null;
   error: unknown | null;
   loading: boolean;
}

export interface IAuthContext extends IAuthStore {
   signIn: ({ username, password }: TokenRequest) => Promise<Auth | null>;
   refreshToken: () => Promise<Auth | null>;
   signOut: () => Promise<Auth | null>;
   isSignedIn: () => boolean;
}
