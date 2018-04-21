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
import { openURL } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      hints: [
        { 'id': 1, 'hint': 'Imagina você dando pra dois', 'tags': 'suruba', 'like': 1 },
        { 'id': 2, 'hint': 'Dois paus na buceta', 'tags': 'swing', 'like': 0 },
        { 'id': 3, 'hint': 'Você de 4 pra um estranho do pauzão', 'tags': 'suruba', 'like': 1 }]
    }
  },
  methods: {
    showMessage () {
      let hint = this.getRamdomHint()
      this.$q.notify({
        color: 'purple-3',
        textColor: 'purple-7',
        message: hint.hint,
        icon: 'favorite',
        position: 'center',
        detail: 'Clique na TV!',
        actions: [
          { icon: 'tv', handler: () => this.openXvLink(hint.tags) } ] })
    },
    getRamdomHint () {
      let random = this.hints[Math.floor(Math.random() * this.hints.length)]
      return random
    },
    openXvLink (tags) {
      openURL('https://www.xvideos.com/?k=' + tags + '&top')
    },
    redirect () {
      this.$router.push('oops')
    }
  },
  mounted () {
    this.$q.localStorage.set('key', 'value')
    // let value = this.$q.localStorage.get.item('key')
    this.$q.dialog({
      title: 'Autenticação',
      message: 'Para desfrutar você tem que informar a senha!',
      prompt: {
        model: '',
        type: 'text' // optional
      },
      cancel: true,
      color: 'secondary'
    }).then(data => {
      let pass = data
      if (pass !== '021114') {
        this.redirect()
      }
    }).catch(() => {
      this.redirect()
    })
  }
}
</script>
