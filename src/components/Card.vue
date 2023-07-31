<template>
    <div class="card">
        <div class="title">{{ title }}</div>
        <div class="desc">Описание: {{ description }}</div>
        <div class="desc">Цена: {{ price }}</div>

        <div style="margin: auto; text-align: center">
            <button class="btn-p">Изменить</button>
        </div>
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
    width: 225rem
    padding: 10rem 105rem
    border-radius: 20rem
    background: #232222
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    margin: auto
    margin-bottom: 70rem

    @media (max-width: 768px)
        width: 200rem
        margin: auto

.title
    display: flex
    justify-content: center
    border-bottom: 1rem solid white
    margin-bottom: 12rem
    color: #FFF
    font-size: 24rem
    font-style: normal
    font-weight: 700
    line-height: 19px
    padding: 15rem 0
    width: 100%
.desc
    font-size: 13rem
    padding-bottom: 18rem
    color: #FFF

.btn-p
    width: 180rem
    margin: 13rem 0
</style>
