import html from "html-literal";

export default links => html`
  <nav class="menu">
    <i class="fas fa-bars"></i>
    <ul id="primary-navigation" class="hidden--mobile nav-links flex">
      ${links
        .map(
          link => html`
            <li>
              <a href="/${link.title}" title="${link.title}" data-navigo
                >${link.text}</a
              >
            </li>
          `
        )
        .join("")}
    </ul>
  </nav>
`;
