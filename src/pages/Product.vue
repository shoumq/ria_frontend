<template>
    <div>
        <Header></Header>

        <div class="container flex">
            <div class="form">
                <div class="title">Добавить продукт</div>
                <label v-for="(item, index) in inputs" :key="index" :for="item.id">{{ item.title }}
                    <input type="text" :placeholder="item.placeholder" :id="item.id" v-model="inputs[index].value" :disabled="err == 'Product not found.'">
                </label>
                <div class="err">{{ err }}</div>
                <button type="submit" class="btn-p" @click="updateProduct" v-if="err != 'Product not found.'">Сохранить</button>
                <button type="submit" class="btn-d" @click="deleteProduct" v-if="err != 'Product not found.'">Удалить</button>
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
        getProductInfo: function () {
            this.axios.get('http://92.53.115.254:5000/api/id/' + this.$route.params.id)
                .then((response) => {
                    this.inputs[0].value = response.data.title
                    this.inputs[1].value = response.data.description
                    this.inputs[2].value = response.data.price
                })
                .catch((e) => {
                    this.err = e.response.data.message;
                })
        },

        updateProduct: function () {
            this.axios.patch('http://92.53.115.254:5000/api/edit/' + this.$route.params.id, {
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
        },

        deleteProduct: function () {
            this.axios.delete('http://92.53.115.254:5000/api/delete/' + this.$route.params.id)
                .then(() => {
                    window.location.href = '/'
                })
                .catch(() => {
                    window.location.href = '/'
                })
                .finally(() => {
                    window.location.href = '/'
                })
        }
    },

    mounted() {
        this.getProductInfo()
    }
}
</script>


<style lang="sass" scoped>

.container
    margin-inline: auto

label
    font-size: 20rem
    display: flex
    justify-content: space-between
    align-items: center
    color: #fff

    @media (max-width: 768px)
        font-size: 13rem

.form
    width: 750rem
    display: flex
    flex-direction: column
    gap: 35rem
    padding: 25rem 30rem
    margin-inline: auto
    background: #232222
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)

    @media (max-width: 768px)
        width: calc(100% - 70rem)

    input
        width: 500rem
        padding: 3rem 15rem
        outline: none
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px
        background: #232222
        color: #fff
        font-size: 13rem
        font-size: 20rem

        border-radius: 10rem
        border: 1px solid rgba(255, 255, 255, 0.50)

        // &:focus
        //     border: 1px solid #9a65c2

        @media (max-width: 768px)
            width: 150rem

.title
    margin-top: 4rem
    font-size: 24rem
    display: flex
    justify-content: center
    padding-bottom: 10rem
    border-bottom: 1rem solid #8f8f8f
    margin-bottom: 5rem
    color: #fff
    font-weight: 700
    line-height: 40rem

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
    margin-top: 10rem
    transition: .2s

    &:hover
        background: #7c32b3

.btn-d
    position: relative
    top: -10rem
    margin-top: -10rem
    font-size: 20rem !important
    margin: auto
    width: calc(100% - 50rem)

.btn-p
    font-size: 20rem !important
    margin: auto
    width: calc(100% - 50rem)
</style>
