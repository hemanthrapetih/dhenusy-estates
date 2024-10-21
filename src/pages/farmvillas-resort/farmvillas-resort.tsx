import { FocusCardsDemo } from "../../shared/UI/focus-cards/focus-cards-comp";
import { ImagesSliderDemo } from "../../shared/UI/imageSlider/imageSliderComp";
import Footer from "../footer/footer";
import MoreListings from "../more-listings/more";
import Styles from "./farmvillas-resort.module.css";

export default function FarmVillasResorts() {
  return (
    <>
      <section className="text-white">
        <ImagesSliderDemo
          mainTitle={`FARM VILLAS & RESORTS at Narshipatnam, \noffers elegant living with a perfect blend of luxury and nature.`}
        />
      </section>
      <section className="text-white">
        <div className={Styles.photoContainer}>
          <h1 className="md:text-8xl text-4xl font-bold">
            <span className="text-[#d4af37]">Property</span> Gallery
          </h1>
          <div className="pt-8">
            <FocusCardsDemo></FocusCardsDemo>
          </div>
        </div>
      </section>

      {/* **********************************PROPERTY DETAILS ******************************* */}
      <section className={Styles.photoContainer}>
        <div className={Styles.propertiesContainer}>
          <div className="grow w-full">
            <h1 className="md:text-8xl text-4xl font-bold">
              <span className="text-[#d4af37]">Property</span> Details
            </h1>
            <div className="flex justify-between pt-8 pb-8">
              <p>6 bedroom</p>
              <p>3 bathroom</p>
              <p>12000 sqft</p>
            </div>
            <div className={Styles.divider}></div>
            <p className="pt-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras
              tellus sit tempor amet, nascetur quam ornare proin platea diam
              amet sed fringilla.
            </p>
            <p className="pt-3 text-xl">
              Faucibus pulvinar elementum integer enim neque volutpat ac
              tincidunt vitae.
            </p>
            <p className="pt-3 text-xl">
              Faucibus pulvinar elementum integer enim neque volutpat ac
              tincidunt vitae.
            </p>
            <p className="pt-3 text-xl">
              Magna etiam tempor orci eu lobortis elementum nibh tellus
              molestie.
            </p>
            <p className="pt-3 text-xl">
              Pulvinar mattis nunc sed blandit libero cursus turpis massa
              tincidunt dui ut tellus molestie nunc non blandit massa enim nec
              dui nunc netus et malesuada fames aliquam vestibulum morbi blandit
              cursus risus at ultrices mi tempus scelerisque purus semper eget
              duis at tellus in mollis nunc sed id semper risus.
            </p>
            <p className="pt-3 text-xl">
              Tempus quam pellentesque nec nam aliquam sem et tortor duis
              convallis convallis tellus id interdum sit amet nisl purus in
              mollis nulla facilisi morbi tempus iaculis urna id volutpat
              tincidunt vitae semper quis lectus nulla.
            </p>
            <p className="pt-3 text-xl">
              Tempus quam pellentesque nec nam aliquam sem et tortor duis
              convallis convallis tellus id interdum sit amet nisl purus in
              mollis nulla facilisi morbi tempus iaculis urna id volutpat
              tincidunt vitae semper quis lectus nulla.
            </p>{" "}
            <p className="pt-3 text-xl">
              Tempus quam pellentesque nec nam aliquam sem et tortor duis
              convallis convallis tellus id interdum sit amet nisl purus in
              mollis nulla facilisi morbi tempus iaculis urna id volutpat
              tincidunt vitae semper quis lectus nulla.
            </p>
            {/* *********************maps********************* */}
            <div className="w-full pt-8">
              {/* <MyComponent></MyComponent> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1022.4543693768345!2d83.19777488459107!3d17.728450890354942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39694d826cb499%3A0x86643a455e233059!2sVarun&#39;s%20Green%20Villas!5e1!3m2!1sen!2sin!4v1729319225316!5m2!1sen!2sin"
                className="w-full rounded"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className={`grow-0  ${Styles.wrapper}`}>
            <div className={Styles.propertiesCard}>
              <p className={Styles.PriceBtn}> Price</p>
              <p className={Styles.price}>₹ 60,00000</p>
              <div className={Styles.divider}></div>
              <h2 className="pt-4 text-3xl">
                Get in touch to receive more info
              </h2>
              <p className="pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <input
                type="text"
                className="w-full mt-8 h-12 rounded p-2 "
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full mt-4 h-12 rounded p-2 "
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full mt-4 h-12 rounded p-2 "
                placeholder="Phone"
              />
              <button className={Styles.ReqBtn}>Request Information</button>
            </div>
          </div>
        </div>
      </section>

      {/* ****************************MORE LISTINGS******************************* */}
      <MoreListings></MoreListings>

      <Footer></Footer>
    </>
  );
}
