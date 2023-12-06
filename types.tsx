/* eslint-disable camelcase */
import { ReactNode } from "react";

export interface IContextProps {
   children: ReactNode;
}

export interface IContext<T, V = unknown> {
   isLoading: boolean;
   isError: boolean;
   error: any;
}

export interface DecodedToken {
   exp: number;
   jti: string;
}
