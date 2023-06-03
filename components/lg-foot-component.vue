<template>
  <div id="s-lib-alert" title="">
    <div id="s-lib-alert-content"></div>
  </div>
  <div id="s-lib-popover-title" class="hide">
    <span class="text-info"><strong>title</strong></span>
    <button
      type="button"
      id="popclose"
      class="close"
      onclick="jQuery('.s-lib-popover').popover('hide')"
    >
      &times;
    </button>
  </div>
  <div id="s-lib-popover-content" class="hide">
    <i class="fa fa-refresh fa-spin"></i> Loading...
    <button class="btn btn-default btn-sm popclose" type="button">Close</button>
  </div>
  <!-- end Vue app -->
  <div id="s-lib-scroll-top" title="Back to Top">
    <span class="fa-stack fa-lg">
      <i class="fa fa-square-o fa-stack-2x"></i>
      <i
        class="fa fa-angle-double-up fa-stack-1x"
        style="position: relative; bottom: 2px"
      ></i>
    </span>
  </div>
</template>

<script></script>

<style scoped></style>
