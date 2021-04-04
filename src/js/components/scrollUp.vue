<template>
    <a href="" @click.prevent="top">
        <transition name="anim">
            <div class="animation" v-show="show">
                <img src="img/rocket.png" id="rocket"/>
            </div>
        </transition>
    </a>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        top() {
            document.body.scrollTo = 0;
            this.show = false;
            document.body.scrollIntoView({ behavior: "smooth" });
        }
    },
    mounted() {
        window.document.onscroll = () => {
            if(document.body.scrollTop != 0) {
                this.show = true;
            } else {
                this.show = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.animation {
    position: fixed;
    bottom: 20px;
    right: 30px;
}

@media (min-width: 768px) {
    #rocket {
        width: 200px;
        height: 200px;
        padding-left: 50px;
    }
}
@media (min-width: 1024px) {
    #rocket {
        width: 100px;
        height: 100px;
        padding-left: 0px;
    }
}
.anim-enter-active, .anim-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.anim-enter, .anim-leave-to {
  transform: translateY(-500px);
  opacity: 0;
}

.anim-enter-to, .anim-leave {
  transform: translateX(0px);
  opacity: 1;
}
</style>