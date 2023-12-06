import { createContext } from "react";

/// types
import { IMockContextType, IMockStore } from "./types";

export const initialMockData: IMockStore = {
   isLoading: false,
   isError: false,
   error: null,
};

export const mockContextDefault: IMockContextType = {
   ...initialMockData,
   exampleFunc2: () => new Promise(() => {}),
};

export const MockContext = createContext<IMockContextType>(null!);
