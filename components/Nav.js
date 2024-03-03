import html from "html-literal";

export default () => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="index.html">Home</li>
      <li><a href="contact.html">Contact</li>
      <li><a href="github.html">Github</li>
      <li><a href="mdn.html">MDN</li>
    </ul>
  </nav>
`;
