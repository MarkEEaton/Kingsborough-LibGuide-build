<template>
<a v-for="item in hamburger" v-bind:key="item.id" class="searchmenu" v-bind:aria-label="item.description" v-bind:href="item.link" v-bind:target="item.target_blank">
  <div class="bigger-fancy-text">
    <i v-bind:class="item.icon" aria-hidden="true"></i>
    <strong>{{ item.description }}</strong>
  </div>
</a>
</template>

<script>
  export default {
    data() {
      return {
      hamburger: [
        {
          link: "https://cuny-kb.primo.exlibrisgroup.com/discovery/search?tab=Everything&vid=01CUNY_KB:CUNY_KB&lang=en",
          icon: "fas fa-search fa-fw bigger-icon",
          description: "OneSearch",
          target_blank: "",
          id: 1
        },
        {
          link: "https://library.kbcc.cuny.edu/az.php",
          icon: "fas fa-database fa-fw bigger-icon",
          description: "Databases A to Z",
          target_blank: "",
          id: 2
        },
        {
          link: "https://library.kbcc.cuny.edu/guides",
          icon: "fas fa-telescope fa-fw bigger-icon",
          description: "Research Guides",
          target_blank: "",
          id: 3
        },
        {
          link: "https://library.kbcc.cuny.edu/faq",
          icon: "fas fa-question-circle fa-fw bigger-icon",
          description: "FAQ",
          target_blank: "",
          id: 4
        },
        {
          link: "https://library.kbcc.cuny.edu/calendar",
          icon: "fas fa-clock fa-fw bigger-icon",
          description: "Library Hours",
          target_blank: "",
          id: 5
        },
        {
          link: "https://library.kbcc.cuny.edu/sitemap",
          icon: "fas fa-location-arrow fa-fw bigger-icon",
          description: "Site Map",
          target_blank: "",
          id: 6
        }
      ]
    }
  }
}
</script>

<style>
</style>
