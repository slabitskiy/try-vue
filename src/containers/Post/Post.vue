<template>
    <div>
        <loader :loading="isLoading" />
        <div class="jumbotron">
            <h1 class="display-4">{{post.title}}</h1>
            <hr class="my-4">
            <p>{{post.body}}</p>
        </div>
    </div>
</template>
<script>
import {mapGetters,  mapActions} from 'vuex';
import Loader from '../../components/Loader.vue'

export default {
    name: 'Post',
    components: {
        'loader': Loader
    },
    methods: {
        ...mapActions('post',[
            'getPost',
        ]),
    },
    computed: {
        ...mapGetters('post', ['isLoading', 'post'])
    },
    created() {
        this.getPost(this.$route.params.id)
    }
}
</script>
