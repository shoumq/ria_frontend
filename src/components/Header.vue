<template>
  <header>
    <div class="container">
      <a href="/" class="title">Продукты</a>
      <a href="/add" class="title item">Добавить товар</a>
    </div>
  </header>
</template>


<style lang="sass" scoped>
header
  background: rgb(84,129,232)
  background: rgb(57,57,66)
  background: linear-gradient(41deg, rgba(57,57,66,1) 0%, rgba(32,32,32,1) 100%)
  width: 100%
  height: 60rem
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
  display: flex
  align-items: center
  margin-bottom: 50rem

.container
  display: flex
  gap: 70rem
  align-items: center

  @media (max-width: 768px)
    padding: 0 15rem

.title
  margin-top: -5rem
  font-size: 18rem
  color: #f7f7f7
  font-weight: 800
  color: red
  letter-spacing: 1rem
  background: linear-gradient(90deg, #815cdb 0%, #8d5ff5 47.54%)
  background-clip: text
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
</style>
