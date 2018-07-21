<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <div class="container">
            <router-link 
                        class="navbar-brand"
                        to="/"
            >
            Logo
            </router-link>
            <button class="navbar-toggler"
                @click.prevent="collapseNavbar"
                type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{show: isCollapsed}">
                <div class="navbar-nav-custom ml-auto">
                    <router-link 
                        exact
                        class="nav-link"
                        active-class="active"
                        v-for="(item) in navigations"
                        v-if="item.name"
                        :to="{ path: item.route}"
                    >
                        {{item.name}}
                    </router-link> 
                </div>
            </div>
       </div>
    </nav>
</template>
<script>
import {Routes} from '../config';

export default {
    name: 'navbar',
    data () {
        return {
            isCollapsed: false
        }
    },
    methods: {
        collapseNavbar() {
            this.isCollapsed = !this.isCollapsed
        }
    },
    computed: {
        navigations: function() {
            return Routes;
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-nav-custom {
    display: flex;
    .nav-link {
        &.active {
            pointer-events: none;
        }
    }
    @media (max-width: 991px) {
        display: block;
    }
}
</style>

