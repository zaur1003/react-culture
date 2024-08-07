import GENERAL_CONFIG from "../config/general";
import { InitializerInterface } from "../types/types";
import { validateInitConfig } from "../utils/validator";

export const main = (initConfig: InitializerInterface): void => {
  const config = validateInitConfig(initConfig);
  const configString = JSON.stringify(config);
  localStorage.setItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME, configString);
};

export const updateConfigure = (reInitConfig: InitializerInterface): void => {
  const prevConfigString: string | null =
    localStorage.getItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME) ?? "{}";

  const mainConfig = JSON.parse(prevConfigString);
  const config = validateInitConfig(reInitConfig);
  Object.assign(mainConfig, config);
  const newConfigString = JSON.stringify(mainConfig);

  localStorage.removeItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME);
  localStorage.setItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME, newConfigString);
};
