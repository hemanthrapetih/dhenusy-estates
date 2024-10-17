import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <section className={Styles.footerContainer}>
        <div className="flex justify-between flex-wrap">
          <span className="text-5xl font-bold">DHENUSYA ESTATES</span>
          <div className="w-1/4">
            <span className={Styles.title}>Contact</span>
            <p className={Styles.Subtitle}>
              47-15-7/46, 4 th Floor, Pavan Palace, Elios Technologies Inc,
              beside V Square, opp. TSR Complex, Dwaraka Nagar, Visakhapatnam,
              Andhra Pradesh 530016
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
