<template>
    <div>
        <Header></Header>

        <div class="container flex">
            <div class="form">
                <div class="title">Добавить продукт</div>
                <label v-for="(item, index) in inputs" :key="index" :for="item.id">{{ item.title }}
                    <input type="text" :placeholder="item.placeholder" :id="item.id" v-model="inputs[index].value">
                </label>
                <div class="err">{{ err }}</div>
                <button type="submit" class="btn-p" @click="addProduct">Добавить</button>
            </div>
        </div>
    </div>
</template>


<script>
import Header from '@/components/Header.vue';

export default {
    name: 'List',
    components: {
        Header
    },
    data() {
        return {
            inputs: [
                {
                    title: 'Название',
                    placeholder: 'Самса',
                    id: 'title',
                    value: ''
                },
                {
                    title: 'Описание',
                    placeholder: 'Очень вкусная, с мясом',
                    id: 'description',
                    value: ''
                },
                {
                    title: 'Цена',
                    placeholder: '169.99',
                    id: 'price',
                    value: ''
                }
            ],

            err: ''
        }
    },
    methods: {
        addProduct: function () {
            this.axios.post('http://92.53.115.254:5000/api/create/', {
                title: this.inputs[0].value,
                description: this.inputs[1].value,
                price: this.inputs[2].value,
            })
                .then(() => {
                    window.location.href = '/'
                })
                .catch((e) => {
                    this.err = e.response.data.message;
                })
        }
    }
}
</script>


<style lang="sass" scoped>

.container
    margin-inline: auto

label
    font-size: 17rem
    display: flex
    justify-content: space-between
    align-items: center
    color: #fff

    @media (max-width: 768px)
        font-size: 13rem

.form
    width: 400rem
    display: flex
    flex-direction: column
    gap: 35rem
    padding: 25rem 30rem
    margin-inline: auto
    background: #232222
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)

    @media (max-width: 768px)
        width: calc(100% - 90rem)

    input
        border-radius: 5rem
        width: 240rem
        padding: 3rem 8rem
        outline: none
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px
        border: 1px solid rgba(255, 255, 255, 0.50)
        background: #232222
        color: #fff
        font-size: 13rem

        // &:focus
        //     border: 1px solid #d7d7d7

        @media (max-width: 768px)
            width: 130rem

.title
    font-size: 20rem
    display: flex
    justify-content: center
    padding-bottom: 10rem
    border-bottom: 1rem solid #8f8f8f
    margin-bottom: 5rem
    color: #fff

.btn
    background: #9a65c2
    color: #fff
    border: none
    outline: none
    padding: 8rem 0
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px
    cursor: pointer
    font-size: 16rem
    border-radius: 10rem
    margin-top: -30rem
    transition: .2s

    &:hover
        background: #7c32b3

.btn-p
    margin-top: -20rem
    font-size: 16rem
</style>
