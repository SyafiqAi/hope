// About.vue

<template>
  <h1>About</h1>
  <div class='math'>
    <vue-mathjax :formula="formula" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formula: '$$e^x = \\sum\\limits_{n=0}^\\infty \\dfrac{x^n}{n!}$$'
      }
    }
  }
</script>

<style scoped>
  :deep(.MathJax)  {
    color: white;
    font-size: 10em;
  }
  .math {
    background-color: rgb(7, 194, 201);
    padding: 50px;
  }
</style>