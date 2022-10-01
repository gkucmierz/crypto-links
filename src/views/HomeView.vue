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
            :style="keywordColor(keyword)"
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
import ColorHash from 'color-hash';

const colorHash = {
  light: new ColorHash({ lightness: 0.88, saturation: 0.8 }),
  mid:   new ColorHash({ lightness: 0.75, saturation: 0.8 }),
  dark:  new ColorHash({ lightness: 0.25, saturation: 0.8 }),
};

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
    },
    keywordColor(keyword) {
      return {
        '--light-color': colorHash.light.hex(keyword),
        '--mid-color': colorHash.mid.hex(keyword),
        '--dark-color': colorHash.dark.hex(keyword),
      }
    }
  },
  computed: {
    // cssVars(...a) {
    //   console.log(Math.random())
    //   return {
    //     '--bg-color': '#f00',
    //   }
    // }
  }
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
          background-color: var(--light-color);
          color: var(--dark-color);
          padding: 4px 8px;
          white-space: nowrap;
          border-radius: 8px 0;
          // border: 1px solid var(--mid-color);
          // margin: -1px;
          // &:hover {
          //   border: 1px solid var(--dark-color);
          //   margin: -1px;
          // }
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
