import DetailContent from "./DetailContent";
import DetailProvider from "./DetailProvider";

function Detail() {
  return (
    <div className="p-2">
      <DetailProvider>
        <DetailContent />
      </DetailProvider>
    </div>
  );
}

export default Detail;
