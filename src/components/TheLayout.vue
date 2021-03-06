<template>
    <div id="layout">
        <TheGitHubRibbon />
        <div id="content-container">
            <TheAboutMe />
            <TheMainPanel />

            <LanguageSwitcher />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MetaInfo } from "vue-meta";

import TheGitHubRibbon from "@/components/TheGitHubRibbon.vue";
import TheAboutMe from "@/components/TheAboutMe.vue";
import TheMainPanel from "@/components/TheMainPanel.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { AppStoreWithGetters } from "@/store";

export default Vue.extend({
  name: "the-layout",
  components: {
    TheGitHubRibbon,
    TheAboutMe,
    TheMainPanel,
    LanguageSwitcher,
  },
  metaInfo: function(): MetaInfo {
    const me = this as Vue;
    const store: AppStoreWithGetters = this.$store;
    const documentData = store.getters.currentLangState.document;

    return {
      title: documentData.meta.title,
      meta: [
        { property: "description", content: documentData.meta.description },
        { property: "language", content: store.state.lang },
        { property: "date", content: store.state.buildTime || "" },
      ],
    };
  },
});
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/fonts.scss";

@import "~normalize.css/normalize";

html,
body {
  font-family: $font-main;
  line-height: 1.4;
}

#content-container {
  position: relative;
  width: $content-container-width;
  margin: 0 auto;
  display: table;
  min-height: 100%;

  @include mobile-theme-screen {
    width: auto;
  }

  #about-me {
    width: $misc-info-width;
    display: table-cell;
    min-height: 100%;
    padding-top: 3em;
    vertical-align: top;

    @include mobile-theme-screen {
      // In mobile mode, this block is moved at the bottom of the page
      width: 100%;
      display: table-footer-group;
      &:before {
        content: "";
        display: table;
        width: 100%;
        margin: 0 0 1em 0;
        border-top: solid 2px darken($red, 10%);
      }
    }
  }

  #main-panel {
    width: $main-panel-width;
    display: table-cell;
    padding-left: 25px;
    padding-top: 2em;
    padding-bottom: 3em;
    vertical-align: top;

    @include mobile-theme-screen {
      width: 100%;
      display: table-row-group;
      padding-left: 0;
    }

    @media print {
      //running out of space to fit all in a single page :-)
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>


