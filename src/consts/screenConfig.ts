import type { JSX } from "react";
import BalanceScreen from "../components/BalanceScreen/BalanceScreen";
import DepositScreen from "../components/DepositScreen/DepositScreen";
import EnterPinScreen from "../components/EnterPinScreen/EnterPinScreen";
import MenuScreen from "../components/MenuScreen/MenuScreen";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import WithdrawScreen from "../components/WithdrawScreen/WithdrawScreen";
import type { appScreen } from "../types/appScreen";
import type { ScreenProps } from "../types/screenProps";

export const screenConfig: Record<
  appScreen,
  (props: ScreenProps) => JSX.Element
> = {
  welcome: WelcomeScreen,
  menu: MenuScreen,
  pin: EnterPinScreen,
  balance: BalanceScreen,
  withdraw: WithdrawScreen,
  deposit: DepositScreen,
};
