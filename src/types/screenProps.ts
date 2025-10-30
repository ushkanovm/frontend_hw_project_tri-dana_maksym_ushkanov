import type { appScreen } from "./appScreen";

export type ScreenProps = {
  redirect: (path: appScreen) => void;
};
