<template>
    <div>
        <loader :loading="isLoading" />
        <div class="list-group">
            <product-item v-for="post in postsList" :key="post.id" :post="post" />
        </div>
    </div>
</template>
<script>
import {mapGetters,  mapActions} from 'vuex';
import ProductItem from '../../components/ProductItem.vue'
import Loader from '../../components/Loader.vue'

export default {
    name: 'Home',
    components: {
        'product-item': ProductItem,
        'loader': Loader
    },
    methods: {
        ...mapActions('posts',[
            'fetchPosts'
        ]),
        ...mapActions('users', [
            'getUsersList'
        ])
    },
    computed: {
        ...mapGetters('posts', ['isLoading', 'postsList'])
    },
    created() {
        this.fetchPosts()
        this.getUsersList()
    },
}
</script>
