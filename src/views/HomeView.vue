<template>
  <div class="home">
    <ul>
      <li
        v-for="(link, index) in links"
        v-bind:key="index"
        >
        <div class="title">
          <b>{{ link.title }}</b>
        </div>
        <div class="link">
          <a :href="link.url" target="_blank">{{ stripProtocol(link.url) }}</a>
        </div>
        <div class="keywords">
          {{ link.keywords }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import links from '@/links';

export default {
  name: 'HomeView',
  data() {
    return {
      links: links,
    }
  },
  methods: {
    stripProtocol(url) {
      return url.replace(/^https?:\/\//, '');
    }
  },
}
</script>

<style lang="scss">

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  li {
    display: flex;

    div {
      padding: 8px;
      flex-basis: 0;
      // border: 1px solid black;

      &.title {
        flex-grow: 1;
      }
      &.link {
        flex-grow: 3;
      }
      &.keywords {
        flex-grow: 3;
      }

      // &:nth-child(odd) {
      //   background-color: #777;
      // }
    }

    &:nth-child(odd) {
      background-color: #eee;
    }
    &:nth-child(even) {
      background-color: #f8f8f8;
    }
  }
}

</style>
