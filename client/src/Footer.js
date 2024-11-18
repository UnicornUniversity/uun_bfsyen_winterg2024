import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="p-2 border fixed-bottom">
      <div>{t("header.date", { date: new Date() })}</div>
    </div>
  );
}

export default Footer;
