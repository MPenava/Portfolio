import { useCallback, useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import { Globe } from "lucide-react";

const LANGUAGES = ["hr", "en"];

const getLocaleFromPath = (): "en" | "hr" => {
  if (typeof window === "undefined") return "hr";
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const maybeLocale = pathParts[0];
  return maybeLocale === "en" ? maybeLocale : "hr";
};

const LanguageSelect = () => {
  const [currentLocale, setCurrentLocale] = useState("hr");

  const changeLanguage = useCallback(
    (locale: string, skipStorage?: boolean) => {
      if (!skipStorage) {
        localStorage.setItem("lang", locale);
      }

      if (locale === "hr") {
        window.location.href = "/";
      } else {
        window.location.href = `/${locale}`;
      }
      setCurrentLocale(locale);
    },
    [],
  );

  useEffect(() => {
    const localeFromUrl = getLocaleFromPath();
    const detectedLocale = navigator.language.split("-")[0];

    const localStorageLocale = localStorage.getItem("lang") || "";

    const finalLocale =
      LANGUAGES.find((lang) => lang === localStorageLocale) ||
      LANGUAGES.find((lang) => lang === detectedLocale) ||
      "hr";

    setCurrentLocale(finalLocale);

    if (finalLocale !== localeFromUrl) {
      changeLanguage(finalLocale, localStorageLocale === "");
    }

    setCurrentLocale(getLocaleFromPath());
  }, [changeLanguage]);

  return (
    <Select value={currentLocale} onValueChange={changeLanguage}>
      <SelectTrigger className="h-11 w-[70px]" aria-label="Select language">
        <SelectValue>
          <Globe size={20} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {LANGUAGES.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { LanguageSelect };
