<template>
  <div class="nav-by-jumbotron">
    <a class="ga-by-jumbotron">
      <div class="nav-divs-by-jumbotron" id="bookastudyroom" @click="invokePlugin">
        <h2><button id="eq_32886">Book A Study Room</button></h2>
      </div>
    </a>
    <a href="https://library.kbcc.cuny.edu/az.php" class="ga-by-jumbotron">
      <div class="nav-divs-by-jumbotron">
        <h2>Databases</h2>
      </div>
    </a>
    <a href="https://library.kbcc.cuny.edu/guides" class="ga-by-jumbotron">
      <div class="nav-divs-by-jumbotron">
        <h2>Research Guides</h2>
      </div>
    </a>
    <a
      href="https://kbcc-cuny.libwizard.com/f/feedback"
      class="ga-by-jumbotron"
    >
      <div class="nav-divs-by-jumbotron">
        <h2>Send Us Feedback</h2>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://libapps.s3.amazonaws.com/sites/2365/include/equipment.min.js';
    script.async = true;
    script.onload = () => {
      console.log('LibCalEquipmentBooking library loaded.');
    };
    document.head.appendChild(script);
  },
  methods: {
    invokePlugin() {
      jQuery(function() {
        jQuery("#eq_32886, #bookastudyroom").LibCalEquipmentBooking({
          iid: 5570,
          gid: 32886,
          eid: 0,
          width: 560,
          height: 680,
          domain: 'https://kbcc-cuny.libcal.com'
        });
      });
    }
  }
}
</script>

<style scoped>
/* style for nav by the jumbotron */
.nav-divs-by-jumbotron {
  text-align: center;
  padding: 6px;
  margin: 6px 0;
  color: white;
  background-color: var(--kbccblue);
  border-radius: 3px;
}
.nav-divs-by-jumbotron > h2 {
  font-size: 1.5em;
  margin-bottom: 4px;
  margin-top: 4px;
}
.nav-divs-by-jumbotron:hover {
  background-color: #444;
}
#eq_32886 {
  background-color: var(--kbccblue);
  border: none;
}
.nav-divs-by-jumbotron:hover > h2 > #eq_32886,
#eq_32886:hover {
  background-color: #444;
}
#bookastudyroom {
  cursor: pointer;
}
</style>
