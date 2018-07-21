<template>
    <router-link :to="`post/${post.id}`" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{post.title | uppercase}}</h5>
        <!-- <small>3 days ago</small> -->
        </div>
        <p class="mb-1">{{post.body}}</p>
        <small><router-link :to="`/user/${post.userId}`">{{user || ''}}</router-link></small>
    </router-link>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('users');   

export default {
    name: 'ProductItem',
    props: {
        post: Object
    },
    computed: {
        ...mapGetters(['getUserNameById']),
        user() {
            return this.getUserNameById(this.post.userId)
        }
    },
    filters: {
        uppercase: value => value.toUpperCase()
    },
}
</script>

<style scoped>
    small > a {
        color:#007bff!important;
    }
</style>

