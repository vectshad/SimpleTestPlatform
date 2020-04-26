<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Are you sure ?
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          Please review again your answers before submit
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-finish"
              @click="finish"
            >
              Submit
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import '../assets/scss/popup.scss'

export default {
  name: 'PopUp',
  methods: {
    close () {
      this.$emit("status", false);
    },
    finish () {
      this.$emit('status', true)
    }
  }
}
</script>