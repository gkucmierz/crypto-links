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
          <span
            class="keyword"
            v-for="(keyword, ki) in link.keywords"
            v-bind:key="ki"
          >
            {{ keyword }}
          </span>
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
      align-items: center;
      // border: 1px solid black;
      margin: auto 0;

      &.title {
        flex-grow: 1;
      }
      &.link {
        flex-grow: 3;
      }
      &.keywords {
        flex-grow: 3;
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;

        .keyword {
          background-color: #c44;
          color: #fff;
          padding: 4px 8px;
          white-space: nowrap;
          border-radius: 8px 0;
        }
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
