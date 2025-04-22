import Ahmimg from "./assets/Ahmad_Abdelghani.jpg";

function Testimonails() {
  return (
    <section class="Testimonails" id="Testimonails">
      <h2>Testimonials</h2>
      <div class="Testimonails-card">
        <div class="Testimonails-img">
          <img
            src={Ahmimg}
            alt=""
            style={{ height: "100PX", borderRadius: "50%", width: "100px" }}
          />
        </div>
        <div class="Testimonails-p">
          <h3>"The best developer ever"</h3>
          <h2>Ahmad Abdelghani</h2>
          <h4>colleague</h4>
        </div>
      </div>
    </section>
  );
}
export default Testimonails;
