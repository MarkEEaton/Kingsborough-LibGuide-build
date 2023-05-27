<template>
  <div class="dropdown" id="hamburger-container">
    <button
      class="btn btn-default dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="true"
      id="hamburger"
    >
      <i class="fas fa-bars" style="font-size: 2em"></i>
    </button>
    <ul
      class="dropdown-menu fade"
      aria-labelledby="hamburger"
      id="hamburger-ul"
    >
      <li>
        <a
          class="searchmenu"
          aria-label="OneSearch"
          href="https://cuny-kb.primo.exlibrisgroup.com/discovery/search?tab=Everything&vid=01CUNY_KB:CUNY_KB&lang=en"
        >
          <div class="highlight-menu-item bigger-fancy-text">
            <i class="fas fa-search fa-fw bigger-icon" aria-hidden="true"></i>
            <strong>OneSearch</strong>
          </div>
        </a>
        <a
          class="searchmenu"
          aria-label="Databases A to Z"
          href="https://library.kbcc.cuny.edu/az.php"
        >
          <div class="highlight-menu-item bigger-fancy-text">
            <i class="fas fa-database fa-fw bigger-icon" aria-hidden="true"></i>
            <strong>Databases A-Z</strong>
          </div>
        </a>
        <a
          class="searchmenu"
          aria-label="Research Guides"
          href="https://library.kbcc.cuny.edu/guides"
        >
          <div class="highlight-menu-item bigger-fancy-text">
            <i
              class="fas fa-telescope fa-fw bigger-icon"
              aria-hidden="true"
            ></i>
            <strong>Research Guides</strong>
          </div>
        </a>
        <a
          class="searchmenu"
          aria-label="FAQ"
          href="https://library.kbcc.cuny.edu/faq"
        >
          <div class="highlight-menu-item bigger-fancy-text">
            <i
              class="fas fa-question-circle fa-fw bigger-icon"
              aria-hidden="true"
            ></i>
            <strong>FAQ</strong>
          </div>
        </a>
        <a
          class="searchmenu"
          aria-label="Hours"
          href="https://library.kbcc.cuny.edu/calendar"
        >
          <div class="highlight-menu-item bigger-fancy-text">
            <i class="fas fa-clock fa-fw bigger-icon" aria-hidden="true"></i>
            <strong>Library Hours</strong>
          </div>
        </a>
        <a
          class="searchmenu"
          aria-label="Site Map"
          href="https://library.kbcc.cuny.edu/sitemap"
        >
          <div class="highlight-menu-item bigger-fancy-text">
            <i
              class="fas fa-location-arrow fa-fw bigger-icon"
              aria-hidden="true"
            ></i>
            <strong>Site Map</strong>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style>
/* style the hamburger menu */
#hamburger-container {
  float: left;
}
#hamburger,
#hamburger:active {
  border: none;
  outline: none;
  background-color: #fff;
  color: var(--kbccblue);
}
#hamburger-ul > li > .searchmenu {
  background-color: #fff;
}
#hamburger-ul {
  padding: 25px 0;
}

@media only screen and (min-width: 992px) {
  #hamburger,
  #hamburger-ul {
    display: none;
  }
}
</style>
