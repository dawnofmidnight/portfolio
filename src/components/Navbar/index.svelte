<script lang="ts">
  import FlyOutButton from "./flyoutbutton.svelte"
</script>

<template lang="pug">
  nav
    div( id="wrapper" )
      div( class="container" id="a" )
        div( id="b" )
          div( id="c" )
            img( id="logo" src="/logo.png" alt="dawn" )
            div( id="d1" )
              a( href="/" ) dawn
            div( id="d2" )
              FlyOutButton( title="?" )
</template>

<style lang="sass">
  nav
    position: sticky
    top: 0
  
  #logo
    height: 36px
    width: 36px
    margin-right: 16px

  #wrapper
    background-color: #fff
    border-bottom-style: solid
    border-bottom-width: 1px
    border-bottom-color: #e0e0e0

  #a
    margin: auto
    position: relative
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    height: 4rem

    @media (min-width: 1024px)
      padding-left: 4rem
      padding-right: 4rem

    @media (min-width: 1280px)
      padding-left: 5rem
      padding-right: 5rem

  #b
    display: flex
    flex-wrap: wrap
    flex: 1 1 0%
    align-items: center
    justify-content: center
    justify-content: space-between
  
  #c
    display: flex
    flex-wrap: wrap
    align-items: center
    display: flex
    flex-wrap: wrap

  #d1
    display: flex
    flex-wrap: wrap
    flex-shrink: 0
    font-weight: 500
    
    a
      color: #1f1f1f
      border-bottom-style: none

  #d2
    padding: 1rem
    display: flex
    flex-wrap: wrap
</style>