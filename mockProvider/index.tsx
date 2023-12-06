import React, { useEffect, useState } from "react";

/// types
import {
   ISimulationsItems,
   IBookingPeriodsItems,
   IObjectDetailPricingItems,
   ISimulationItem,
   IObjectItem,
   IDriversItems,
   ICostDetailsItems,
   IClientsItems,
   IObjectRevenuesItems,
   IResultLinesItems,
   IResultRevenuesItems,
   IResultProcessLevelsItems,
   IResultContributionLevelsItems,
} from "../../api/models/mock/models";
import { IContextProps } from "../types";

/// services
import {
   getSimulationsData,
   getBookingPeriodsData,
   getObjectDetailPricingData,
   getObjectData,
   getDriversData,
   getCostDetailsData,
   getClientsData,
   createSimulationData,
   getObjectRevenuesData,
   getResultLinesData,
   getResultRevenuesData,
   getResultProcessLevelsData,
   getResultContributionLevelsData,
} from "../../api/services/appService";

/// store
import { MockContext, initialMockData } from "./mockContext";

export function MockProvider({
   children,
}: IContextProps): React.ReactElement<IContextProps> {
   const [state, setState] = useState(initialMockData);

   const handleSetState = (isLoading: boolean) => {
      setState({ ...state, isLoading: isLoading });
   };

   const handleSetError = (err: any) => {
      setState({ ...state, isError: true, error: err });
   };

   const getSimulations = async (): Promise<ISimulationsItems> => {
      handleSetState(true);

      try {
         handleSetState(true);
         const mock: ISimulationsItems = await getSimulationsData();
         return mock;
      } catch (error) {
         handleSetError(error);
         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getBookingPeriods = async (): Promise<IBookingPeriodsItems> => {
      try {
         handleSetState(true);

         const mock: IBookingPeriodsItems = await getBookingPeriodsData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getObjectDetailPricing =
      async (): Promise<IObjectDetailPricingItems> => {
         try {
            handleSetState(true);

            const mock: IObjectDetailPricingItems =
               await getObjectDetailPricingData();

            return mock;
         } catch (error) {
            handleSetError(error);

            return [];
         } finally {
            handleSetState(false);
         }
      };

   const getObject = async ({ ...props }): Promise<IObjectItem> => {
      try {
         handleSetState(true);

         const mock: IObjectItem = await getObjectData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return {};
      } finally {
         handleSetState(false);
      }
   };

   const getDrivers = async ({ ...props }): Promise<IDriversItems> => {
      try {
         handleSetState(true);

         const mock: IDriversItems = await getDriversData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getCostDetails = async ({ ...props }): Promise<ICostDetailsItems> => {
      try {
         handleSetState(true);

         const mock: ICostDetailsItems = await getCostDetailsData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getClients = async ({ ...props }): Promise<IClientsItems> => {
      try {
         handleSetState(true);

         const mock: IClientsItems = await getClientsData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const createSimulation = async ({ ...props }): Promise<ISimulationItem> => {
      try {
         handleSetState(true);

         const mock: ISimulationItem = await createSimulationData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return {};
      } finally {
         handleSetState(false);
      }
   };

   const getObjectRevenues = async ({
      ...props
   }): Promise<IObjectRevenuesItems> => {
      try {
         handleSetState(true);

         const mock: IObjectRevenuesItems = await getObjectRevenuesData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getResultLines = async ({ ...props }): Promise<IResultLinesItems> => {
      try {
         handleSetState(true);

         const mock: IResultLinesItems = await getResultLinesData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getResultRevenues = async ({
      ...props
   }): Promise<IResultRevenuesItems> => {
      try {
         handleSetState(true);

         const mock: IResultRevenuesItems = await getResultRevenuesData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getResultProcessLevels = async ({
      ...props
   }): Promise<IResultProcessLevelsItems> => {
      try {
         handleSetState(true);

         const mock: IResultProcessLevelsItems =
            await getResultProcessLevelsData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   const getResultContributionLevels = async ({
      ...props
   }): Promise<IResultContributionLevelsItems> => {
      try {
         handleSetState(true);

         const mock: IResultContributionLevelsItems =
            await getResultContributionLevelsData();

         return mock;
      } catch (error) {
         handleSetError(error);

         return [];
      } finally {
         handleSetState(false);
      }
   };

   return (
      <MockContext.Provider
         value={{
            ...state,
            getSimulations,
            getBookingPeriods,
            getObjectDetailPricing,
            getObject,
            getDrivers,
            getCostDetails,
            getClients,
            createSimulation,
            getObjectRevenues,
            getResultLines,
            getResultRevenues,
            getResultProcessLevels,
            getResultContributionLevels,
         }}
      >
         {children}
      </MockContext.Provider>
   );
}
