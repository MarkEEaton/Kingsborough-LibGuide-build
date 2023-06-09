<template>
  <nav class="navbar navbar-default main-nav-container">
    <div class="container-fluid">
      <ul class="nav navbar-nav" id="navbar-center">
        <li v-for="(navmenu, navkey) in navListOfMenus"
            v-bind:key="navmenu.id"
            class="dropdown main-nav-dropdown"
        >
          <a>
            <a class="dropdown-toggle ga-main-navbar"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false"
            >
              <div class="caret-text">{{ navkey }}</div>
              <div class="fancy-caret"><i class="fas fa-angle-down" aria-hidden="true"></i></div>
            </a>
            <ul class="dropdown-menu fade dropdown-margin">
              <li>
                <a v-for="item in navmenu.data"
                   v-bind:key="item.id"
                   class="searchmenu"
                   v-bind:aria-label="item.description"
                   v-bind:href="item.link"
                   v-bind:target="item.target_blank"
                >
                  <div class="bigger-fancy-text">
                    <i v-bind:class="item.icon" aria-hidden="true"></i>
                    <strong>{{ item.description }}</strong>
                  </div>
                </a>
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navListOfMenus: {
        'Find It': {
          id: 1,
          data: [
            {
              link: 'https://library.kbcc.cuny.edu/az.php',
              icon: 'fas fa-database fa-fw bigger-icon',
              description: 'Databases A to Z',
              target_blank: '',
              id: 1,
            },
            {
              link: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/npsearch?vid=01CUNY_KB:CUNY_KB&search_scope=all',
              icon: 'fas fa-newspaper fa-fw bigger-icon',
              description: 'Newspaper Search',
              target_blank: '',
              id: 2,
            },
            {
              link: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&tab=CourseReserves&search_scope=CourseReserves',
              icon: 'fas fa-cloud-download-alt fa-fw bigger-icon',
              description: 'Course Reserves',
              target_blank: '',
              id: 3,
            },
            {
              link: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/jsearch?vid=01CUNY_KB:CUNY_KB',
              icon: 'fas fa-book fa-fw bigger-icon',
              description: 'Search for Specific Journals',
              target_blank: '',
              id: 4,
            },
            {
              link: 'https://library.kbcc.cuny.edu/academicworks',
              icon: 'fas fa-archive fa-fw bigger-icon',
              description: 'CUNY Academic Works',
              target_blank: '_blank',
              id: 5,
            },
            {
              link: 'https://www.bkstr.com/kingsboroughccstore/home',
              icon: 'fas fa-cash-register fa-fw bigger-icon',
              description: 'KBCC Bookstore',
              target_blank: '_blank',
              id: 6,
            },
          ],
        },
        Services: {
          id: 2,
          data: [
            {
              link: 'http://kbcc.cuny.illiad.oclc.org/illiad/logon.html',
              icon: 'fas fa-books fa-fw bigger-icon',
              description: 'Interlibrary Loan',
              target_blank: '_blank',
              id: 1,
            },
            {
              link: 'https://library.kbcc.cuny.edu/libraryservices/informationliteracy',
              icon: 'fas fa-chalkboard-teacher fa-fw bigger-icon',
              description: 'Book a Library Instruction Session',
              target_blank: '',
              id: 2,
            },
            {
              link: 'https://library.kbcc.cuny.edu/mediaservices',
              icon: 'fas fa-photo-video fa-fw bigger-icon',
              description: 'Media Services',
              target_blank: '',
              id: 3,
            },
            {
              link: 'https://kbcc-cuny.libwizard.com/f/bookrequest',
              icon: 'fas fa-shopping-basket fa-fw bigger-icon',
              description: 'Suggest a Book for Purchase',
              target_blank: '',
              id: 4,
            },
            {
              link: 'https://kbcc-cuny.libwizard.com/id/8cdb3f1a787de3c307a8cf5d75cad406',
              icon: 'fas fa-bookmark fa-fw bigger-icon',
              description: 'Suggest an Item to Add to Reserves',
              target_blank: '',
              id: 5,
            },
          ],
        },
        'About Us': {
          id: 3,
          data: [
            {
              link: 'https://library.kbcc.cuny.edu/about-us/directory',
              icon: 'fas fa-address-book fa-fw bigger-icon',
              description: 'Faculty & Staff Directory',
              target_blank: '',
              id: 1,
            },
            {
              link: 'https://library.kbcc.cuny.edu/newarrivals',
              icon: 'far fa-mail-bulk fa-fw bigger-icon',
              description: 'New Arrivals',
              target_blank: '',
              id: 2,
            },
            {
              link: 'https://library.kbcc.cuny.edu/about-us/liaisons',
              icon: 'fas fa-theater-masks fa-fw bigger-icon',
              description: 'Subject Liaisons',
              target_blank: '',
              id: 3,
            },
            {
              link: 'https://library.kbcc.cuny.edu/social',
              icon: 'far fa-hashtag fa-fw bigger-icon',
              description: 'Social Media',
              target_blank: '',
              id: 4,
            },
          ],
        },
        'Location & Hours': {
          id: 4,
          data: [
            {
              link: 'https://tour.kingsborough.edu/',
              icon: 'fas fa-map-marked-alt fa-fw bigger-icon',
              description: 'Campus Map',
              target_blank: '',
              id: 1,
            },
            {
              link: 'https://library.kbcc.cuny.edu/calendar',
              icon: 'fas fa-clock fa-fw bigger-icon',
              description: 'Library Hours',
              target_blank: '',
              id: 2,
            },
          ],
        },
        Help: {
          id: 5,
          data: [
            {
              link: 'https://library.kbcc.cuny.edu/askalibrarian',
              icon: 'fas fa-book-reader fa-fw bigger-icon',
              description: 'Ask A Librarian',
              target_blank: '',
              id: 1,
            },
            {
              link: 'https://library.kbcc.cuny.edu/faq',
              icon: 'fas fa-question-circle fa-fw bigger-icon',
              description: 'FAQ',
              target_blank: '',
              id: 2,
            },
            {
              link: 'https://library.kbcc.cuny.edu/guides',
              icon: 'fas fa-telescope fa-fw bigger-icon',
              description: 'Research Guides and Tutorials',
              target_blank: '',
              id: 3,
            },
            {
              link: 'https://library.kbcc.cuny.edu/ENGLISH24',
              icon: 'fas fa-question fa-fw bigger-icon',
              description: 'How to Use the Library',
              target_blank: '',
              id: 4,
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
/* style navbar */
nav.navbar-default.main-nav-container {
        background-color: white;
        border: none;
        font-size: 1.4em;
        color: var(--text);
        border-radius: 0;
}
.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {
        background-color: #fff;
}
.nav > li > a:hover {
        outline: none;
}
.navbar-default .navbar-nav > li > a { color: var(--text); }
#navbar-center {
        display: flex;
        justify-content: left;
        float: none;
}
.ga-main-navbar { 
        font-size: 1.3em;
}
#dropdownMenu1 { border-radius: 0; }
a.searchmenu {
        color: var(--text);
}
.highlight-menu-item { padding: 5px; }
.highlight-menu-item:hover {
        cursor: pointer;
}
nav.navbar-default.main-nav-container { margin-top: 10px; }
</style>
