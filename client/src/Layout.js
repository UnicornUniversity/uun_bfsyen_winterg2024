import { useContext } from "react";
import { UserContext } from "./Users/UserProvider.js";
import { useTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { t, i18n } = useTranslation();

  const lngs = { en: { nativeName: "English" }, cs: { nativeName: "Čeština" } };

  return (
    <div>
      <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
        <Link to="/">{t("header.appName")}</Link>{" "}
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal" }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}{" "}
        {userList.map((user) => (
          <button key={user.id} onClick={() => setLoggedInUser(user.id)}>
            {user.name} {(user.id === loggedInUser).toString()}
          </button>
        ))}
        <div>{t("header.date", { date: new Date() })}</div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
