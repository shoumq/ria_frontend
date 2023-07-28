<template>
  <div>
    <header>
      <div class="container">
        <div class="f">
          <a href="/" class="title">Продукты</a>
          <a href="/add" class="title item">Добавить товар</a>

          <form class="search" @submit.prevent="setParam">
            <input type="text" placeholder="Самса" v-model="productTitle">
            <button class="btn">Найти</button>
          </form>
        </div>

        <div class="s">
          <img src="@/images/i1.png" alt="">
          <img src="@/images/i2.png" alt="">
        </div>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {
      productTitle: ''
    }
  },

  methods: {
    setParam: function () {
      this.$router.push({ path: '/', query: { title: this.productTitle } })
    }
  }
}
</script>


<style lang="sass" scoped>
header
  background: #232222
  width: 100%
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
  display: flex
  align-items: center
  margin-bottom: 50rem
  padding: 23rem 0

.container
  display: flex
  justify-content: space-between
  align-items: center

  .f
    display: flex
    gap: 70rem
    align-items: center

    @media (max-width: 768px)
      padding: 0 15rem

  .s
    display: flex
    gap: 18rem

.title
  margin-top: -5rem
  font-size: 24rem
  color: white !important
  font-weight: 600
  letter-spacing: 1rem

.search
  display: flex
  gap: 24rem

  input
    border-radius: 10rem
    background: #FFF
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    outline: none
    border: none
    padding: 5rem 15rem
    font-size: 20rem
</style>
