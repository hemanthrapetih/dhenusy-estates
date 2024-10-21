// import { CardSpotlightDemo } from "../../shared/UI/card-spotlight/card-spotlightComp";
import { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "../../shared/UI/infinite-scroll/infinite-comp";
import Footer from "../footer/footer";
import styles from "./landing.module.css";
import { useNavigate } from "react-router-dom";
// Define breakpoints for different screens
const MOBILE_BREAKPOINT = 440;
const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;

export default function Landing() {
  // *****************************************************
  const [screenSize, setScreenSize] = useState<string>(""); // To store the screen size type

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= MOBILE_BREAKPOINT) {
      setScreenSize("mobile");
    } else if (width > MOBILE_BREAKPOINT && width <= TABLET_BREAKPOINT) {
      setScreenSize("tablet");
    } else if (width > TABLET_BREAKPOINT && width <= DESKTOP_BREAKPOINT) {
      setScreenSize("smallDesktop");
    } else {
      setScreenSize("largeDesktop");
    }
  };
  // Run once when component mounts and listen for resize events
  useEffect(() => {
    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE FUNCTIONS

  const navigate = useNavigate();
  function handleRouting(value: any) {
    console.log(value);
    navigate(value);
  }
  // ********************************************************

  return (
    <>
      <div className={styles.videoTitle}>
        <p>DHENUSYA </p>
        <p> ESTATES</p>
      </div>
      <div className={styles.videoBgTint}></div>
      <video className={styles.videoBg} autoPlay muted loop>
        <source
          src={`${import.meta.env.VITE_PUBLIC_URL}bgvideo.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* ***********************************************PROPERTIES*************************** */}
      <section className={styles.propertiesSection}>
        <h1 className="text-6xl text-white font-bold text-center mt-8 mb-8">
          Our Properties
        </h1>

        {/* *************MEDIUM AND LARGE SCREES VIEW **************** */}
        {(screenSize === "largeDesktop" || screenSize === "smallDesktop") && (
          <div className={styles.ourWraper}>
            {/* ***************  FIRST CARD******** */}
            <div className={styles.ourNumberOne}>
              <div className="flex ">
                <div
                  className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
                >
                  <h1
                    onClick={() => handleRouting("Greenvilla")}
                    className={styles.projectTitle}
                  >
                    Green Villas
                  </h1>
                  <h2 className={styles.projectSubTitle}>
                    Sheela Nagar, Visakhapatnam
                  </h2>
                  <h2 className={styles.projectSubTitle}>
                    20 Acres Gated comunity
                  </h2>

                  <div className="flex gap-8 mt-3">
                    <p className="text-xl">6 Beds</p>
                    <div className={styles.verticalLine}></div>
                    <p className="text-xl">3 Bath</p>

                    <div className={styles.verticalLine}></div>

                    <p className="text-2xl">12000 Sft.</p>
                  </div>
                </div>
                <div className="grow w-100">
                  <div
                    className="
                "
                  >
                    <div className={styles.viewProjectWrapper}>
                      <img
                        onClick={() => handleRouting("Greenvilla")}
                        src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                        loading="lazy"
                        width="100"
                        alt="Right Up Arrow"
                        className={styles.rightUpArrow}
                      />
                    </div>
                  </div>
                  <picture className="overflow-hidden block">
                    <img
                      src="https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg "
                      alt=""
                      className={`${styles.scrollImage} ""`}
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* ***************  SECOND CARD******** */}
            <div className={styles.ourNumberTwo}>
              <div className="flex ">
                <div className="grow w-100">
                  <div className={styles.absoluteBlock}>
                    <div className={styles.viewProjectWrapperLeft}>
                      <img
                        onClick={() => handleRouting("Apartments")}
                        src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                        loading="lazy"
                        width="100"
                        alt="Right Up Arrow"
                        className={styles.rightUpArrow}
                      />
                    </div>
                  </div>
                  <picture className="overflow-hidden block">
                    <img
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a5d/65f2ce072886eff397ca7b0a_claudia-altamimi-dTV3FTL7x58-unsplash.jpg"
                      alt=""
                      className={`${styles.scrollImage} ""`}
                    />
                  </picture>
                </div>
                <div
                  className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
                >
                  <h1
                    onClick={() => handleRouting("Apartments")}
                    className={styles.projectTitle}
                  >
                    Apartments
                  </h1>
                  <h2 className={styles.projectSubTitle}>
                    Sheela Nagar, Visakhapatnam
                  </h2>
                  <h2 className={styles.projectSubTitle}>
                    7 Acres Gated comunity
                  </h2>

                  <div className="flex gap-8 mt-3">
                    <p className="text-xl">6 Beds</p>
                    <div className={styles.verticalLine}></div>
                    <p className="text-xl">3 Bath</p>

                    <div className={styles.verticalLine}></div>

                    <p className="text-2xl">12000 Sft.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ***************  THIRD CARD******** */}
            <div className={styles.ourNumberThree}>
              <div className="flex ">
                <div
                  className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
                >
                  <h1
                    onClick={() => handleRouting("FarmHouse")}
                    className={styles.projectTitle}
                  >
                    Farm House
                  </h1>
                  <h2 className={styles.projectSubTitle}>
                    Kothavalasa, vizianagaram
                  </h2>
                  <h2 className={styles.projectSubTitle}>50 Acres</h2>

                  <div className="flex gap-8 mt-3">
                    <p className="text-xl">6 Beds</p>
                    <div className={styles.verticalLine}></div>
                    <p className="text-xl">3 Bath</p>

                    <div className={styles.verticalLine}></div>

                    <p className="text-2xl">12000 Sft.</p>
                  </div>
                </div>
                <div className="grow">
                  <div className={styles.absoluteBlock}>
                    <div className={styles.viewProjectWrapper}>
                      <img
                        onClick={() => handleRouting("FarmHouse")}
                        src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                        loading="lazy"
                        width="100"
                        alt="Right Up Arrow"
                        className={styles.rightUpArrow}
                      />
                    </div>
                  </div>
                  <picture className="overflow-hidden block">
                    <img
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a5d/65f2ce072886eff397ca7b07_valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg"
                      alt=""
                      className={`${styles.scrollImage} ""`}
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* ***************  FOURTH CARD******** */}
            <div className={styles.ourNumberFour}>
              <div className="flex ">
                <div className="grow">
                  <div className={styles.absoluteBlock}>
                    <div className={styles.viewProjectWrapperLeft}>
                      <img
                        onClick={() => handleRouting("FarmVillasResorts")}
                        src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                        loading="lazy"
                        width="100"
                        alt="Right Up Arrow"
                        className={styles.rightUpArrow}
                      />
                    </div>
                  </div>
                  <picture className="overflow-hidden block">
                    <img
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a5d/65f2ce072886eff397ca7b0a_claudia-altamimi-dTV3FTL7x58-unsplash.jpg"
                      alt=""
                      className={`${styles.scrollImage} ""`}
                    />
                  </picture>
                </div>
                <div
                  className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
                >
                  <h1
                    onClick={() => handleRouting("FarmVillasResorts")}
                    className={styles.projectTitle}
                  >
                    Farm villas & Resorts
                  </h1>
                  <h2 className={styles.projectSubTitle}>Narshipatnam</h2>
                  <h2 className={styles.projectSubTitle}>50 Acres</h2>

                  <div className="flex gap-8 mt-3">
                    <p className="text-xl">6 Beds</p>
                    <div className={styles.verticalLine}></div>
                    <p className="text-xl">3 Bath</p>

                    <div className={styles.verticalLine}></div>

                    <p className="text-2xl">12000 Sft.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ***************  FIFTH CARD******** */}
            <div className={styles.ourNumberFive}>
              <div className="flex ">
                <div
                  className={` ${styles.flexDivText} "grow p-8  bg-[#151414]"`}
                >
                  <h1
                    onClick={() => handleRouting("AgriFarm")}
                    className={styles.projectTitle}
                  >
                    Agri Farming
                  </h1>
                  <h2 className={styles.projectSubTitle}>Orissa</h2>
                  <h2 className={styles.projectSubTitle}>2000 Acres</h2>

                  <div className="flex gap-8 mt-3">
                    <p className="text-xl">6 Beds</p>
                    <div className={styles.verticalLine}></div>
                    <p className="text-xl">3 Bath</p>

                    <div className={styles.verticalLine}></div>

                    <p className="text-2xl">12000 Sft.</p>
                  </div>
                </div>
                <div className="grow">
                  <div className={styles.absoluteBlock}>
                    <div className={styles.viewProjectWrapper}>
                      <img
                        onClick={() => handleRouting("AgriFarm")}
                        src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                        loading="lazy"
                        width="100"
                        alt="Right Up Arrow"
                        className={styles.rightUpArrow}
                      />
                    </div>
                  </div>
                  <picture className="overflow-hidden block">
                    <img
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a5d/65f2ce072886eff397ca7b07_valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg"
                      alt=""
                      className={`${styles.scrollImage} ""`}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* *************MOBILE AND TABLET SCREES VIEW **************** */}

        {(screenSize === "mobile" || screenSize === "tablet") && (
          <div className="">
            <div className="">
              <div className=" w-100">
                <div
                  className="
                "
                >
                  <div className={styles.viewProjectWrapperMobile}>
                    <img
                      onClick={() => handleRouting("Greenvilla")}
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                      loading="lazy"
                      width="100"
                      alt="Right Up Arrow"
                      className={styles.rightUpArrow}
                    />
                  </div>
                </div>
                <picture className="overflow-hidden block">
                  <img
                    src="https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg "
                    alt=""
                    className={`${styles.scrollImageMobile} ""`}
                  />
                </picture>
              </div>

              <div
                className={`  " p-8 pt-0 border-y border-slate-950 bg-[#151414]  text-white"`}
              >
                <h1
                  onClick={() => handleRouting("Greenvilla")}
                  className={`${styles.projectTitle} m-1  `}
                >
                  Green Villas
                </h1>
                <h2 className={styles.projectSubTitle}>
                  Sheela Nagar, Visakhapatnam
                </h2>
                <h2 className={styles.projectSubTitle}>
                  20 Acres Gated comunity
                </h2>

                <div className="flex gap-8 mt-3 mb-8 text-white">
                  <p className="text-xl">6 Beds</p>
                  <div className={styles.verticalLine}></div>
                  <p className="text-xl">3 Bath</p>

                  <div className={styles.verticalLine}></div>

                  <p className="text-2xl">12000 Sft.</p>
                </div>
              </div>
            </div>

            {/* *********second card************ */}
            <div className="">
              <div className=" w-100">
                <div
                  className="
                "
                >
                  <div className={styles.viewProjectWrapperMobile}>
                    <img
                      onClick={() => handleRouting("Apartments")}
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                      loading="lazy"
                      width="100"
                      alt="Right Up Arrow"
                      className={styles.rightUpArrow}
                    />
                  </div>
                </div>
                <picture className="overflow-hidden block">
                  <img
                    src="https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg "
                    alt=""
                    className={`${styles.scrollImageMobile} ""`}
                  />
                </picture>
              </div>

              <div
                className={`  " p-8 pt-0 border-y border-slate-950 bg-[#151414]  text-white"`}
              >
                <h1
                  onClick={() => handleRouting("Apartments")}
                  className={`${styles.projectTitle} m-1  `}
                >
                  Apartments
                </h1>
                <h2 className={styles.projectSubTitle}>
                  Sheela Nagar, Visakhapatnam
                </h2>
                <h2 className={styles.projectSubTitle}>
                  20 Acres Gated comunity
                </h2>

                <div className="flex gap-8 mt-3 mb-8 text-white">
                  <p className="text-xl">6 Beds</p>
                  <div className={styles.verticalLine}></div>
                  <p className="text-xl">3 Bath</p>

                  <div className={styles.verticalLine}></div>

                  <p className="text-2xl">12000 Sft.</p>
                </div>
              </div>
            </div>

            {/* ***************THRID CARD************* */}
            <div className="">
              <div className=" w-100">
                <div
                  className="
                "
                >
                  <div className={styles.viewProjectWrapperMobile}>
                    <img
                      onClick={() => handleRouting("FarmHouse")}
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                      loading="lazy"
                      width="100"
                      alt="Right Up Arrow"
                      className={styles.rightUpArrow}
                    />
                  </div>
                </div>
                <picture className="overflow-hidden block">
                  <img
                    src="https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg "
                    alt=""
                    className={`${styles.scrollImageMobile} ""`}
                  />
                </picture>
              </div>

              <div
                className={`  " p-8 pt-0 border-y border-slate-950 bg-[#151414]  text-white"`}
              >
                <h1
                  onClick={() => handleRouting("FarmHouse")}
                  className={`${styles.projectTitle} m-1  `}
                >
                  Farm House
                </h1>
                <h2 className={styles.projectSubTitle}>
                  Kothavalasa, vizianagaram
                </h2>
                <h2 className={styles.projectSubTitle}>
                  20 Acres Gated comunity
                </h2>

                <div className="flex gap-8 mt-3 mb-8 text-white">
                  <p className="text-xl">6 Beds</p>
                  <div className={styles.verticalLine}></div>
                  <p className="text-xl">3 Bath</p>

                  <div className={styles.verticalLine}></div>

                  <p className="text-2xl">12000 Sft.</p>
                </div>
              </div>
            </div>

            {/* ********* FOURTH CARD******** */}
            <div className="">
              <div className=" w-100">
                <div
                  className="
                "
                >
                  <div className={styles.viewProjectWrapperMobile}>
                    <img
                      onClick={() => handleRouting("FarmVillasResorts")}
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                      loading="lazy"
                      width="100"
                      alt="Right Up Arrow"
                      className={styles.rightUpArrow}
                    />
                  </div>
                </div>
                <picture className="overflow-hidden block">
                  <img
                    src="https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg "
                    alt=""
                    className={`${styles.scrollImageMobile} ""`}
                  />
                </picture>
              </div>

              <div
                className={`  " p-8 pt-0 border-y border-slate-950 bg-[#151414]  text-white"`}
              >
                <h1
                  onClick={() => handleRouting("FarmVillasResorts")}
                  className={`${styles.projectTitle} m-1  `}
                >
                  Farm villas & Resorts
                </h1>
                <h2 className={styles.projectSubTitle}>Narshipatnam</h2>
                <h2 className={styles.projectSubTitle}>
                  20 Acres Gated comunity
                </h2>

                <div className="flex gap-8 mt-3 mb-8 text-white">
                  <p className="text-xl">6 Beds</p>
                  <div className={styles.verticalLine}></div>
                  <p className="text-xl">3 Bath</p>

                  <div className={styles.verticalLine}></div>

                  <p className="text-2xl">12000 Sft.</p>
                </div>
              </div>
            </div>

            {/* *************FIFTH CARD********* */}
            <div className="">
              <div className=" w-100">
                <div
                  className="
                "
                >
                  <div className={styles.viewProjectWrapperMobile}>
                    <img
                      onClick={() => handleRouting("AgriFarm")}
                      src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461cc9859f07541be8c898_up-right-arrow.png"
                      loading="lazy"
                      width="100"
                      alt="Right Up Arrow"
                      className={styles.rightUpArrow}
                    />
                  </div>
                </div>
                <picture className="overflow-hidden block">
                  <img
                    src="https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg "
                    alt=""
                    className={`${styles.scrollImageMobile} ""`}
                  />
                </picture>
              </div>

              <div
                className={`  " p-8 pt-0 border-y border-slate-950 bg-[#151414]  text-white"`}
              >
                <h1
                  onClick={() => handleRouting("AgriFarm")}
                  className={`${styles.projectTitle} m-1  `}
                >
                  Agri Farming
                </h1>
                <h2 className={styles.projectSubTitle}>Orissa</h2>
                <h2 className={styles.projectSubTitle}>
                  20 Acres Gated comunity
                </h2>

                <div className="flex gap-8 mt-3 mb-8 text-white">
                  <p className="text-xl">6 Beds</p>
                  <div className={styles.verticalLine}></div>
                  <p className="text-xl">3 Bath</p>

                  <div className={styles.verticalLine}></div>

                  <p className="text-2xl">12000 Sft.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* **************************************OUR DREAMS************************** */}
      <section className={styles.dreams}>
        <div
          className={`${styles.ourDreamsContainer} flex justify-between gap-2 items-center`}
        >
          <div className="grow text-5xl w-full ">
            <span className="text-[#d4af37] font-bold">Discover</span> your
            dream <p>home</p>
          </div>
          <div className="grow-0 w-full">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus.
            </span>
          </div>
        </div>
        <div className={`${styles.ourDreamsContainer} flex gap-8 mt-8`}>
          <img
            src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/66461f834f84a0b9bb77179b_jason-briscoe-UV81E0oXXWQ-unsplash-p-1600.jpg"
            alt=""
            className={styles.dreamPortateImg}
          />

          <div className="flex gap-8 flex-col grow">
            <img
              className={styles.dreamLandImg}
              src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/65fbb396c7805ba7c16cc181_r-architecture-rOk4VSMS3Ck-unsplash-p-1600.jpg"
              alt=""
            />

            <img
              className={styles.dreamLandImg}
              src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/65f2ce072886eff397ca7a9d_roberto-nickson-emqnSQwQQDo-unsplash-p-1600.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* **************************************YOUR TRUST************************** */}
      <section className={styles.dreams}>
        <div
          className={`${styles.ourDreamsContainer} flex justify-between gap-2 items-center`}
        >
          <div className="grow text-5xl w-full ">
            <span className="text-[#d4af37] font-bold">Your Trusted </span>
            <p>Real Estate Agency</p>
          </div>
          <div className="grow-0 w-full">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4 sm:gap-6 lg:gap-8 mt-8">
          {/* First card */}
          <div className={styles.greyCard}>
            <div className={styles.carTitle}>19K+</div>
            <div className={styles.cardparagraph}>Satisfied Customers</div>
          </div>

          {/* Second card */}
          <div className="lg:col-start-1 lg:row-start-2">
            <div className={styles.greyCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>Property Collections</div>
            </div>
          </div>

          {/* Third card (image) */}
          <div className="lg:col-start-3 lg:row-span-2 h-full">
            <img
              className={styles.trustImagelast}
              src="https://cdn.prod.website-files.com/664b44de1818d3c38c521f9c/664b4aa060198b50888e8153_greg-rivers-rChFUMwAe7E-unsplash.jpg"
              loading="lazy"
              alt="Trust Image"
            />
          </div>

          {/* Fourth card (image) */}
          <div className="lg:col-start-4 lg:row-span-2 h-full">
            <img
              className={styles.trustImagelast}
              src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/65f2ce072886eff397ca7a96_getty-images-L5nd7rPrEic-unsplash.jpg"
              loading="lazy"
              alt="Trust Image 2"
            />
          </div>

          {/* Fifth card */}
          <div className="sm:col-start-2 lg:col-start-2 row-start-1">
            <div className={styles.yellowCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>Awards Won</div>
            </div>
          </div>

          {/* Sixth card */}
          <div className="lg:col-start-2 lg:row-start-2">
            <div className={styles.greyCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* ***************************************************************************************** */}
      {/* **************************************YOUR TRUST************************** */}
      <section className={styles.dreams}>
        <div className="flex justify-between gap-2 items-center">
          <div className="grow text-5xl w-full ">
            <span className="text-[#d4af37] font-bold">Customer Reviews </span>
          </div>
        </div>

        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      </section>

      {/* ************************** */}
      <Footer></Footer>
    </>
  );
}
