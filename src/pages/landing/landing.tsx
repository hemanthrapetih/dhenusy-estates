// import { CardSpotlightDemo } from "../../shared/UI/card-spotlight/card-spotlightComp";
import { InfiniteMovingCardsDemo } from "../../shared/UI/infinite-scroll/infinite-comp";
import Footer from "../footer/footer";
import styles from "./landing.module.css";

export default function Landing() {
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
      {/* <section className={styles.ourprojects}>
        <img
          src="https://cdn.prod.website-files.com/664b34f4e6a0af2ce2d8c9e1/664b3f1752b22106be507cdb_654511893476169e4e79b353_650d1ff6f7d51442b6a545da_Symbol.svg"
          loading="lazy"
          data-w-id="0f0b6b8b-7751-9883-87b8-4acc0004421b"
          alt="circle icon"
          className={styles.circle} // Added a class for rotation
        />
      </section> */}

      {/* PROPERTIES */}
      <section className={styles.propertiesSection}>
        <h1 className="text-6xl text-white font-bold text-center mt-8 mb-8">
          Our Properties
        </h1>

        <div className={styles.ourWraper}>
          {/* ***************  FIRST CARD******** */}
          <div className={styles.ourNumberOne}>
            <div className="flex">
              <div
                className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
              >
                <h1 className={styles.projectTitle}>Green Villas</h1>
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

          {/* ***************  SECOND CARD******** */}
          <div className={styles.ourNumberTwo}>
            <div className="flex ">
              <div className="grow w-100">
                <div className={styles.absoluteBlock}>
                  <div className={styles.viewProjectWrapper}>
                    <img
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
                <h1 className={styles.projectTitle}>Apartments</h1>
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
            <div className="flex">
              <div
                className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
              >
                <h1 className={styles.projectTitle}>Farm House</h1>
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
                  <div className={styles.viewProjectWrapper}>
                    <img
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
                <h1 className={styles.projectTitle}>Farm villas & Resorts</h1>
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
            <div className="flex">
              <div
                className={` ${styles.flexDivText} "grow p-8 border-y border-slate-950 bg-[#151414]"`}
              >
                <h1 className={styles.projectTitle}>Agri Farming</h1>
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
      </section>

      {/* **************************************OUR DREAMS************************** */}
      <section className={styles.dreams}>
        <div className="flex justify-between gap-2 items-center">
          <div className="grow text-5xl w-full ">
            <span className="text-[#d4af37] font-bold">Discover</span> your
            dream <p>home</p>
          </div>
          <div className="grow-0 w-1/2">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </span>
          </div>
        </div>
        <div className="flex gap-8 mt-8">
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
        <div className="flex justify-between gap-2 items-center">
          <div className="grow text-5xl w-full ">
            <span className="text-[#d4af37] font-bold">Your Trusted </span>
            <p>Real Estate Agency</p>
          </div>
          <div className="grow-0 w-1/2">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-8 mt-8">
          <div>
            <div className={styles.greyCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>Satisfied Customers</div>
            </div>
          </div>
          <div className="col-start-1 row-start-2">
            <div className={styles.greyCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>property collections</div>
            </div>
          </div>
          <div className="row-span-2 col-start-3 row-start-1 h-full">
            {/* <CardSpotlightDemo></CardSpotlightDemo> */}
            <img
              className={styles.trustImagelast}
              src="https://cdn.prod.website-files.com/664b44de1818d3c38c521f9c/664b4aa060198b50888e8153_greg-rivers-rChFUMwAe7E-unsplash.jpg"
              loading="lazy"
              alt=""
            ></img>
          </div>
          <div className="row-span-2 col-start-4 row-start-1">
            <img
              className={styles.trustImagelast}
              src="https://cdn.prod.website-files.com/65f2ce072886eff397ca7a3f/65f2ce072886eff397ca7a96_getty-images-L5nd7rPrEic-unsplash.jpg"
              loading="lazy"
              alt=""
            ></img>
          </div>
          <div className="col-start-2 row-start-1">
            <div className={styles.yellowCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>awards won</div>
            </div>
          </div>
          <div>
            <div className={styles.greyCard}>
              <div className={styles.carTitle}>19K+</div>
              <div className={styles.cardparagraph}>awards won</div>
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
            {/* <p>Real Estate Agency</p> */}
          </div>
          {/* <div className="grow-0 w-1/2">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </span>
          </div> */}
        </div>

        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        {/* <div className="">
        </div> */}
      </section>

      {/* ************************** */}
      <Footer></Footer>
    </>
  );
}
