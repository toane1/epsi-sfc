

<script>
export default{
  props: {
    msg: String,
  },
  methods: {
    sayHello(){
      this.$emit('Hello !')
    }

  }
}
</script>

<template>
  <p>Ce composant utilise : {{ msg }}</p>
</template>

<style scoped>

</style>