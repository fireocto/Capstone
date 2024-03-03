import html from "html-literal";
import jordan from "../../assets/img/jordan-powell-headshot.jpg";

export default () => html`
  <div class="about-section">
    <h2>About Us</h2>
    <p>We love food, and want to share our favorites with everyone!</p>
  </div>

  <h2>The Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="${jordan} alt="Jordan" />
        <p>some text that describes me</p>
        <p>email address</p>
        <p><span id="contactButton"></span></p>
      </div>
    </div>
  </div>
`;
