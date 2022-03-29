<template>
  <div v-if="showTutorial">
    <Tutorial />
  </div>
  <div v-else="showPrueba">
    <Prueba />
  </div>
  <div v-else>
    nothing
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      showTutorial: false,
      showPrueba: true
    }
  }
}
</script>
