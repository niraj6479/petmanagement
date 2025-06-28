import BodyContent from "../component/BodyContent";
import Footer from "./Footer"; // Not needed here anymore, see note below

export default function Home() {
  return (
    <div>
      <BodyContent />
      {/* ❌ Do not include <Footer /> here since it's already in App.jsx */}
    </div>
  );
}
