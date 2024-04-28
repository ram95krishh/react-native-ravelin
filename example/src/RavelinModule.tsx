import { NativeModules } from 'react-native';
const { RavelinCore: Ravelin } = NativeModules;

interface RavelinInterface {
  setUp: (apiKey: string) => Promise<boolean>;
  getDeviceId: () => Promise<string>;
  setCustomerId: (customerId: string) => void;
  setOrderId: (orderId: string) => void;
  trackFingerprint: () => Promise<boolean>;
  trackPage: (
    pageTitle: string,
    data: Record<string, string>
  ) => Promise<boolean>;
  trackSearch: (pageTitle: string, searchValue: string) => Promise<boolean>;
  trackSelectOption: (
    pageTitle: string,
    option: string,
    optionValue: string
  ) => Promise<boolean>;
  trackAddToCart: (
    pageTitle: string,
    itemName: string,
    quantity: number
  ) => Promise<boolean>;
  trackRemoveFromCart: (
    pageTitle: string,
    itemName: string,
    quantity: number
  ) => Promise<boolean>;
  trackAddToWishlist: (pageTitle: string, itemName: string) => Promise<boolean>;
  trackRemoveFromWishlist: (
    pageTitle: string,
    itemName: string
  ) => Promise<boolean>;
  trackLanguageChange: (
    pageTitle: string,
    language: string
  ) => Promise<boolean>;
  trackCurrencyChange: (
    pageTitle: string,
    currency: string
  ) => Promise<boolean>;
  trackViewContent: (
    pageTitle: string,
    contentType: string
  ) => Promise<boolean>;
  trackEvent: (
    eventType: string,
    pageTitle: string,
    data: Record<string, string>
  ) => Promise<boolean>;
  trackLogin: (
    customerId: string,
    pageTitle: string,
    data: Record<string, string>
  ) => Promise<boolean>;
  trackLogout: (
    pageTitle: string,
    data: Record<string, string>
  ) => Promise<boolean>;
}

export default Ravelin as RavelinInterface;
