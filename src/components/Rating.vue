<template>
  <div class="rating">
    <ul class="list">
      <li v-for="star in maxStars" :class="{ 'active': star <= stars}" class="star" @click="rate(star)">
        <icon :name="star <= stars ? 'star' : 'star-o'"/>
      </li>
    </ul>
    <span v-if="hasCounter">{{ counter }}</span>
  </div>
</template>

<script>
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/star-o'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    components: {Icon},
    computed: {
      counter() {
        return `${this.stars} of ${this.maxStars}`
      }
    },
    props: {
      grade: {
        type: Number,
        required: true
      },
      maxStars: {
        type: Number,
        default: 5
      },
      hasCounter: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        stars: this.grade,
      }
    },
    methods: {
      rate(star) {
        if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
          // re-click on the same star toggle its current state instead of staying active
          this.stars = this.stars === star ? star - 1 : star
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #a7a8a8;

  }

  .list {
    margin: 0 0 5px 0;
    padding: 0;
    list-style-type: none;
  }

  .list:hover .star {
    color: #f3d23e;
  }

  .star {
    display: inline-block;
    cursor: pointer;
  }

  .star:hover ~ .star:not(.active) {
    color: inherit;
  }

  .active {
    color: #f3d23e;
  }
</style>
