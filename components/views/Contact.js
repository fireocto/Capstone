import html from "html-literal";

export default () => html`
  <form action="" method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" placeholder="Full Name" required />

    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="you@somewhere.com"
    />

    <label for="phone">Phone:</label>
    <input type="tel" name="fone" id="fone" placeholder="555-555-5555" />

    <div>
      <label for="msg">Enter your message:</label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>

    <div>
      <p>What's this message about?</p>
      <div>
        <input
          type="radio"
          name="subject"
          value="professional"
          id="pro"
          checked
        />
        <label for="pro">I'd like to hire you!</label>
      </div>
      <div>
        <input type="radio" name="subject" value="personal" id="personal" />
        <label for="personal">Personal message</label>
      </div>
      <div>
        <input type="radio" name="subject" value="other" />
        <label>Don't know/something else</label>
      </div>
    </div>

    <input type="checkbox" name="optIn" value="trusting" id="news" checked />
    <label for="news">Subscribe me to your newsletter!</label>

    <div>
      <label for="marketing">How did you hear about me?</label>
      <select name="marketing" id="marketing">
        <optgroup label="Online">
          <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
          <option value="github">Online Portfolio (GitHub)</option>
          <option value="search">Search Engine</option>
          <option value="email">Email</option>
        </optgroup>
        <optgroup label="In-Person">
          <option value="networking">We met at a networking event</option>
          <option value="referral">Personal referral</option>
          <option value="random">We met somewhere else</option>
        </optgroup>
        <option value="other">Other</option>
      </select>
    </div>

    <input type="submit" value="Submit" />
  </form>
`;

// export default () => html`
//   <div class="container">
//     <div style="text-align:center">
//       <h2>Contact Us</h2>
//       <p>Swing by for a cup of coffee, or leave us a message:</p>
//     </div>
//     <div class="row">
//       <div class="column">
//         <img src="" style="width:100%" />
//       </div>
//       <div class="column">
//         <form action="/action_page.php">
//           <label for="fname">First Name</label>
//           <input
//             type="text"
//             id="fname"
//             name="firstname"
//             placeholder="Your name"
//           />
//           <label for="lname">Last Name</label>
//           <input
//             type="text"
//             id="lname"
//             name="lastname"
//             placeholder="Your last name"
//           />
//           <label for="country">Country</label>
//           <select id="country" name="country">
//             <option value="australia">Australia</option>
//             <option value="canada">Canada</option>
//             <option value="usa">USA</option>
//           </select>
//           <label for="subject">Subject</label>
//           <textarea
//             id="subject"
//             name="subject"
//             placeholder="Write something..."
//             style="height:170px"
//           ></textarea>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   </div>
// `;
