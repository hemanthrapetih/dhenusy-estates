import { DirectionAwareHoverDemo } from "../../shared/UI/awareImages/aware-comp";
import Styles from "./more.module.css";

export default function MoreListings() {
  return (
    <>
      <section className={Styles.photoContainer}>
        <h1 className="md:text-8xl text-4xl font-bold">
          <span className="text-[#d4af37]">More</span> Listings
        </h1>
        <DirectionAwareHoverDemo></DirectionAwareHoverDemo>
      </section>
    </>
  );
}
