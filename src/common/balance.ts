const BALANCE_KEY = "atm_balance";
const DEFAULT_BALANCE = 0;

const sanitizeAmount = (amount: number): number => {
  if (!Number.isFinite(amount)) return 0;
  return Math.max(0, Math.floor(amount));
};

export const getBalance = (): number => {
  try {
    const raw = localStorage.getItem(BALANCE_KEY);
    const parsed = raw === null ? NaN : parseInt(raw, 10);
    return Number.isFinite(parsed) ? parsed : DEFAULT_BALANCE;
  } catch {
    return DEFAULT_BALANCE;
  }
};

export const setBalance = (nextBalance: number): void => {
  const safe = sanitizeAmount(nextBalance);
  localStorage.setItem(BALANCE_KEY, String(safe));
};

export const deposit = (amount: number): number => {
  const add = sanitizeAmount(amount);
  const next = getBalance() + add;
  setBalance(next);
  return next;
};

export const canWithdraw = (amount: number): boolean => {
  const take = sanitizeAmount(amount);
  return getBalance() >= take;
};

export const withdraw = (amount: number): number => {
  const take = sanitizeAmount(amount);
  const current = getBalance();
  const next = current - take < 0 ? 0 : current - take;
  setBalance(next);
  return next;
};
