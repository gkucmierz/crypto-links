<template>
  <div class="home">
    <!-- {{ $route.params }} -->
    <!-- {{ keywords }} -->
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
            :class="{ active: hasKeyword(keyword) }"
            :style="keywordColor(keyword)"
            v-for="(keyword, ki) in link.keywords"
            v-bind:key="ki"
            @click="filterKeyword(keyword)"
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

const colorHash = (() => {
  const color = {
    light: new ColorHash({ lightness: 0.88, saturation: 0.8 }),
    mid:   new ColorHash({ lightness: 0.75, saturation: 0.8 }),
    dark:  new ColorHash({ lightness: 0.25, saturation: 0.8 }),
  };
  return (keyword, light) => {
    const salt = 0.12659108437773758; //Math.random();
    return color[light].hex([keyword, salt].join(''));
  };
})();

const keywordsUrl = (() => {
  const SEPARATOR = ',';
  const WHITESPACE = '_';
  return {
    decode: str => {
      const re = new RegExp(WHITESPACE, 'g');
      return str.replace(re, ' ').split(SEPARATOR);
    },
    encode: keywords => {
      const re = new RegExp(/ /, 'g');
      return keywords.join(SEPARATOR).replace(re, WHITESPACE);
    },
  }
})();

export default {
  name: 'HomeView',
  data() {
    const keywordsPhrase = this.$route.params.keywords;
    const keywords = [];
    if (keywordsPhrase) {
      keywords.push(...keywordsUrl.decode(keywordsPhrase));
    }
    setTimeout(() => this.filterLinks());
    return {
      links: links,
      keywords: [],
    }
  },
  methods: {
    stripProtocol(url) {
      return url.replace(/^https?:\/\//, '');
    },
    keywordColor(keyword) {
      return {
        '--light-color': colorHash(keyword, 'light'),
        '--mid-color': colorHash(keyword, 'mid'),
        '--dark-color': colorHash(keyword, 'dark'),
      };
    },
    filterKeyword(keyword) {
      const idx = this.keywords.indexOf(keyword);
      if (idx !== -1) {
        this.keywords.splice(idx, 1);
      } else {
        this.keywords.push(keyword);
      }
      const url = this.$router.resolve({ name: 'filter', params: { keywords: keywordsUrl.encode(this.keywords) } });
      this.$router.push(url);
      this.filterLinks();
    },
    filterLinks() {
      this.links = links.filter(link => {
        return this.keywords.every(keyword => {
          return link.keywords.includes(keyword);
        });
      });
    },
    hasKeyword(keyword) {
      return this.keywords.includes(keyword);
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.keywords.length === 0) {
      next('/');
    } else {
      next();
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
          cursor: pointer;
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
          &.active {
            background-color: var(--dark-color);
            color: var(--light-color);
          }
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
