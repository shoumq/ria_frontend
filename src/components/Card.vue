<template>
    <div class="card">
        <div class="title">{{ title }}</div>
        <div class="desc">Описание: {{ description }}</div>
        <div class="desc">Цена: {{ price }}</div>
    </div>
</template>


<script>
export default {
    props: {
        title: String,
        description: String,
        price: Number
    }
}
</script>


<style lang="sass" scoped>
.card
    background: #fff
    width: 200rem
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
    padding: 10rem 25rem
    border-radius: 5rem

    @media (max-width: 768px)
        width: 200rem
        margin: auto

.title
    font-size: 20rem
    display: flex
    justify-content: center
    padding-bottom: 5rem
    border-bottom: 1rem solid #8b8b8b
    margin-bottom: 15rem

.desc
    font-size: 13rem
    padding-bottom: 4rem
</style>
