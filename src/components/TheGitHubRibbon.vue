<template>
    <div id="github-ribbon">
      <a
        href="https://github.com/DrBenton/rougemine.com-online-resume"
        target="_blank"
      >
        Fork me on GitHub
      </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "the-github-ribbon",
});
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";

#github-ribbon {
  // start "pure CSS" GitHub ribbon
  // @link https://codepo8.github.io/css-fork-on-github-ribbon/
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 160px;
  overflow: hidden;
  height: 160px;
  z-index: 1;

  a {
    position: absolute;
    width: 150px;
    top: 40px;
    right: -60px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);

    background: #aa0000;
    color: white;
    text-decoration: none;
    font-family: arial, sans-serif;
    text-align: center;
    font-weight: bold;
    padding: 5px 40px;
    font-size: 0.8rem;
    line-height: 1.5rem;
    transition: 0.5s;
    &:hover {
      background: #c11;
      color: white;
    }
    &:before,
    &:after {
      content: "";
      width: 100%;
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
      height: 1px;
      background: white;
    }
    &:after {
      bottom: 1px;
      top: auto;
    }
  }
  // end "pure CSS" GitHub ribbon

  @include mobile-theme-all {
    z-index: 2;
  }
  @media print {
    display: none;
  }
}
</style>
