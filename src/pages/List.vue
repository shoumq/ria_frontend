<template>
    <div>
        <Header></Header>

        <div class="container flex">
            <a :href="'/product/' + item.id" v-for="(item, index) in products" :key="index">
                <Card
                    :title="item.title"
                    :description="item.description"
                    :price="item.price">
                </Card>
            </a>
        </div>
    </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';

export default {
    name: 'List',
    components: {
        Header, Card
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts: function () {
            this.axios.get('http://127.0.0.1:8000/api')
                .then((response) => {
                    this.products = response.data
                })
        }
    },

    mounted() {
        this.getProducts()
    }
}
</script>


<style lang="sass" scoped>
.flex
    display: grid
    gap: 50rem
    grid-template-columns: repeat(4, 1fr)

    @media (max-width: 768px)
        display: flex
        flex-direction: column
</style>
