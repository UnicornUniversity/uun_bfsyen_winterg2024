import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";

import Toolbar from "./Toolbar";
import MemberList from "./MemberList";
import ItemList from "./ItemList";
import { DetailContext } from "./DetailProvider";

function DetailContent() {
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");
  const { state, data, error } = useContext(DetailContext);
  const { t } = useTranslation();

  return !selectedId ? (
    "show some select ID placeholder"
  ) : state === "error" && !data ? (
    <Alert variant={"danger"}>{t(`errors.${error.code || "noCode"}`)}</Alert>
  ) : (
    <>
      <Toolbar />
      <MemberList />
      <ItemList />
    </>
  );
}

export default DetailContent;
