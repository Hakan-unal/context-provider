/// types
import {
 // models
} from "../../api/models/mock/models";
import { IContext } from "../types";

export interface IMockStore extends IContext<ISimulationsItems> {}

export interface IMockContextType
   extends Omit<IContext<ISimulationsItems>, "fetch"> {
      exampleFunc2: ({ ...props }) => Promise<ISimulationsItems>;
      ...props
   }) => Promise<IResultContributionLevelsItems>;
}
