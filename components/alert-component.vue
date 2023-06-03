<template>
  <div
    id="corona-alert"
    type="button"
    data-toggle="modal"
    data-target=".bs-example-modal-sm"
  >
    <span id="corona-alert-text"
      >No fines on KBCC books checked out before the pandemic! Just return them
      to any CUNY Library.</span
    >
  </div>
  <!-- Modal -->
  <div
    class="modal fade bs-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content" style="border-radius: 3px">
        <div class="modal-body">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            style="padding: 5px 5px 12px 12px"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModalLabel">
            Before returning books to another CUNY library, please make sure you
            have updated your vaccine information to Cleared4 or checked rules
            for visiting that campus.
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- End of modal -->
</template>

<script></script>

<style scoped>
#corona-alert {
  text-align: center;
  background-color: #faf870;
  padding: 5px 50px;
  margin: 0 15px;
  cursor: pointer;
}
#corona-alert-text {
  color: var(--text);
  font-size: 1.5em;
}
</style>
