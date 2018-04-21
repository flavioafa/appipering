<template>
  <q-page class="flex flex-center">
    <q-btn
  color="primary"
  size="xl"
  icon="message"
  round
  glossy
  no-ripple
  @click="showMessage()"/>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    showMessage () {
      this.$q.notify({
        color: 'purple-3',
        textColor: 'purple-7',
        message: 'Denize, TE AMO!',
        icon: 'favorite',
        position: 'center'
      })
    }
  }
}
</script>
