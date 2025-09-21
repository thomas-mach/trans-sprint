import { useCookie } from "#app";

const isSecure: boolean = process.env.NUXT_PUBLIC_SECURE_COOKIE === "true";

export const useConsentCookie = () => {
  const consent = useCookie<"accepted" | "rejected" | undefined>(
    "cookie_consent",
    {
      default: () => undefined,
      maxAge: 60 * 60 * 24 * 365, // 1 anno
      sameSite: "lax",
      secure: isSecure, // fondamentale su localhost!
    }
  );

  const setConsent = (value: "accepted" | "rejected") => {
    consent.value = value;
  };

  return { consent, setConsent };
};
