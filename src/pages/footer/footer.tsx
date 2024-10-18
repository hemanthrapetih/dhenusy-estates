import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <section className={Styles.footerContainer}>
        <span className="text-4xl font-bold">DHENUSYA ESTATES</span>
        <div className={Styles.divider}></div>
        <div className="flex justify-between flex-wrap pt-6 ">
          <div className="">
            <span className={Styles.title}>Contact</span>

            <p className={Styles.Subtitle}>
              Dhenusya Infotech, 4th Floor, Pavan Palace,
              <p className="">beside V Square, Dwaraka Nagar, Visakhapatnam</p>
            </p>
            <p className={Styles.Subtitle}>Dhenusya@gmail.com</p>
            <p className={Styles.Subtitle}>+91 978968736872</p>
          </div>
          <div className="">
            <span className={Styles.title}>Pages</span>
            <p className={Styles.Subtitle}>Green villas</p>
            <p className={Styles.Subtitle}>Apartments</p>
            <p className={Styles.Subtitle}>Farm house</p>
            <p className={Styles.Subtitle}>Farm villas & Resort</p>
            <p className={Styles.Subtitle}>Agri farm</p>
          </div>
          <div className="">
            <span className={Styles.title}>Social</span>
            <p className={Styles.Subtitle}>Facebook</p>
            <p className={Styles.Subtitle}>Instagram</p>
            <p className={Styles.Subtitle}>LinkedIn</p>
          </div>
        </div>
      </section>
    </>
  );
}
