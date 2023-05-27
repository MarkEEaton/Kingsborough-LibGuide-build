<template>
  <div id="orange-line"></div>
  <div id="main-blue-footer">
    <div id="lighthouse-logo">
      <a href="https://www.kbcc.cuny.edu">
        <img
          src="https://libapps.s3.amazonaws.com/accounts/16298/images/Orange_Vector_Mac_Building.png"
          alt="Kingsborough Lighthouse logo"
          loading="lazy"
        />
      </a>
    </div>
    <div class="library-address">
      <div class="whiteahrefs">
        <strong>Robert J. Kibbee Library</strong><br />
        2001 Oriental Blvd<br />
        Brooklyn, NY, 11209<br />
        <a href="tel:+1-718-368-5632">718-368-5632</a>
      </div>
      <div class="whiteahrefs">
        <a href="https://kbcc-cuny.libwizard.com/f/reference">
          reference.desk@kbcc.cuny.edu
        </a>
        <br />
        <a
          aria-label="Twitter"
          href="https://twitter.com/KBCCLibrary"
          target="_blank"
        >
          <i aria-hidden="true" class="fab fa-twitter"></i>
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/kbcclibrary/"
          target="_blank"
        >
          <i aria-hidden="true" class="fab fa-instagram"></i>
        </a>
        <a
          aria-label="Goodreads"
          href="https://www.goodreads.com/user/show/51717966-kingsborough-library"
          target="_blank"
        >
          <i aria-hidden="true" class="fab fa-goodreads"></i>
        </a>
        <a
          aria-label="TikTok"
          href="https://www.tiktok.com/@kbcclibrary?lang=en"
          target="_blank"
        >
          <i aria-hidden="true" class="fab fa-tiktok"></i>
        </a>
        <a
          aria-label="YouTube"
          href="https://www.youtube.com/channel/UCpeJWrnzLXEizw8cMvVp-_Q/videos"
          target="_blank"
        >
          <i aria-hidden="true" class="fab fa-youtube"></i>
        </a>
        <a
          aria-label="Spotify"
          href="https://open.spotify.com/user/313lfmvr4ezmkb2mhodzd5ubzg4a"
          target="_blank"
        >
          <i aria-hidden="true" class="fab fa-spotify"></i>
        </a>
      </div>
    </div>
    <div id="cuny-logo">
      <a href="https://www.cuny.edu" target="_blank">
        <img
          src="https://libapps.s3.amazonaws.com/accounts/16298/images/CUNYlogo-white.png"
          alt="CUNY logo"
          loading="lazy"
        />
      </a>
    </div>
    <div class="whiteahrefs libapps">
      <a href="https://kbcc-cuny.libapps.com/libapps/login.php?site_id=2365">
        Log in to LibApps
      </a>
      |
      <a href="https://cuny-kb.alma.exlibrisgroup.com/mng/login?auth=SAML">
        Alma
      </a>
    </div>
    <div style="height: 10px"></div>
  </div>
</template>

<script></script>

<style scoped>
#orange-line {
  height: 10px;
  background-color: var(--kbccorange);
}
#main-blue-footer {
  background-color: var(--kbccblue);
  color: white;
  padding: 30px;
}
.whiteahrefs a:link,
.whiteahrefs a:hover,
.whiteahrefs a:visited,
.whiteahrefs a:active {
  color: white;
}
.whiteahrefs a i {
  margin: 4px 5px 0 0;
  font-size: 1.5em;
}
.whiteahrefs {
  margin-top: 10px;
}
#lighthouse-logo > a > img {
  max-width: 150px;
}

@media only screen and (min-width: 1px) {
  #main-blue-footer {
    min-height: 450px;
  }
  .library-address {
    float: left;
  }
  #cuny-logo {
    float: left;
    clear: both;
    margin-top: 10px;
  }
  .libapps {
    float: left;
    clear: left;
  }
}
@media only screen and (min-width: 768px) {
  #lighthouse-logo {
    display: inline-block;
    float: left;
  }
  #main-blue-footer {
    min-height: 210px;
  }
  .library-address {
    display: inline-block;
    margin: -10px 30px;
    font-size: 1.1em;
  }
  #cuny-logo {
    float: right;
    clear: none;
    margin: -10px 0;
  }
  .libapps {
    float: right;
    clear: both;
  }
}
</style>
