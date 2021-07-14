<script lang="ts">
  export let title: string = "unnamed";
</script>

<template lang="pug">
  div( class="wrapper" )
    span { title }
</template>

<style lang="sass">
  .wrapper
    display: inline-flex
    align-items: center
    padding-left: 0.125rem
    padding-right: 0.125rem
    border-bottom-style: solid
    border-bottom-width: 2px
    border-color: transparent
    font-size: 0.875rem
    line-height: 1.25rem
    font-weight: 500
    color: #6B7280
    cursor: pointer

    &:hover
      color: #6B7280
</style>