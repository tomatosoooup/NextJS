import { useFonts } from "providers/FontProvider";
import "./Ticker.css";

const Ticker = () => {
  const fonts = useFonts();
  return (
    <>
      <div className="items-wrap" style={{ fontFamily: `${fonts.tt}` }}>
        <div className="items marquee reverse text-xs leading-none font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
        <div className="items marquee reverse text-xs leading-none font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
      </div>
      {/* End of first marquee */}
      <div className="items-wrap" style={{ fontFamily: `${fonts.cf}` }}>
        <div className="items marquee text-5xl lg:text-6xl leading-none dots xl:mb-4">
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
        </div>
        <div className="items marquee text-5xl lg:text-6xl leading-none dots xl:mb-4">
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
          <span>KNOW ME</span>
          <span>LiKE ME</span>
          <span>TRUST ME</span>
          <span>PAY ME</span>
        </div>
      </div>
      {/* REVERSE */}
      <div className="items-wrap gap-2" style={{ fontFamily: `${fonts.tt}` }}>
        <div className="items marquee reverse rotate text-xs leading-none font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
        <div className="items marquee reverse rotate text-xs leading-none font-bold">
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
          <span>IN CRYPTO WE TRUST</span>
        </div>
      </div>
    </>
  );
};

export default Ticker;
