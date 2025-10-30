import { useCallback, useState } from "react";
import { screenConfig } from "../consts/screenConfig";
import type { appScreen } from "../types/appScreen";

export const useNavigation = () => {
  const [screen, setScreen] = useState<appScreen>("welcome");

  const redirect = useCallback(
    (screen: appScreen) => setScreen(screen),
    [setScreen]
  );

  const currentScreen = screenConfig[screen];

  return { redirect, Outlet: currentScreen, screen };
};
