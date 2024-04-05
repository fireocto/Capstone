import html from "html-literal";
import jordan from "../../assets/img/jordan-powell-headshot.jpg";

export default () => html`
  <div class="about-section">
    <h2>About Us</h2>
    <p>We love food, and want to share our favorites with everyone!</p>
  </div>

  <div class="about-flexbox-container">
    <div class="flexbox-item flexbox-item-photo">
      <h2>The Team</h2>
      <img id="headshot" src="${jordan}" alt="Jordan" />
    </div>
    <div class="flexbox-item flexbox-item-about-text">
      <p class="aboutJordan">
        Hi! I'm Jordan, and I'm a self-proclaimed foodie! I'm always looking for
        the next great place to eat anywhere I go. I know I've struggled with
        option overload when trying to decide where to eat, which is why I
        created Dinner Spinner! I hope that it saves you many sleepless nights
        of trying to make a decision!
      </p>
    </div>
  </div>
`;

{
  /* <h2>The Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img id="headshot" src="${jordan} alt="Jordan" />
        <p class="aboutJordan">
          Hi! I'm Jordan, and I'm a self-proclaimed foodie! I'm always looking
          for the next great place to eat anywhere I go. I know I've struggled
          with option overload when trying to decide where to eat, which is why
          I created Dinner Spinner! I hope that it saves you many sleepless
          nights of trying to make a decision!
        </p>
        <p>email address</p>
        <p><span id="contactButton"></span></p>
      </div>
    </div>
  </div>
`; */
}
