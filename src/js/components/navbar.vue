<template>
  <nav class="flex justify-between p-5">
    <img
      src="img/rabbit.png"
      class="w-10 h-10 lg:w-16 lg:h-16 transform transition duration-700 hover:scale-125"
      id="logo"
    />
    <ul class="hidden lg:inline-flex font-semibold text-2xl" id="navbar">
      <li><a href="/" class="text-black dark:text-white" @click.prevent="show('about')">Who </a></li>
      <li><a href="" class="text-black dark:text-white" @click.prevent="show('skills')">Skills </a></li>
      <li><a href="" class="text-black dark:text-white" @click.prevent="show('hobbies')">Hobbies </a></li>
    </ul>
    <div class="hidden lg:flex lg:justify-around">
      <img src="img/sun.png" class="w-10 h-10">
      <ThemeSwitch @darkTheme="changeTheme" v-bind:theme="currentTheme"></ThemeSwitch>
      <img src="img/moon.png" class="w-10 h-10 transform -translate-y-2">
    </div>
    <div class="hidden lg:inline font-semibold text-2xl">
      <a href="" @click.prevent="emailMe" class="text-black dark:text-white animate-pulse">Email Me</a>
    </div>
    <div class="lg:hidden transform -translate-x-5 translate-y-5">
        <transition name="mode-fade" mode="out-in">
          <button v-if="on" @click="openNav" class="h-14">
            <svg class="h-30 w-30 transform translate-y-2 fill-current dark:text-white -ml-14 -mt-7" viewBox="0 0 24 24">
              <!-- close icon -->
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </button>
          <button v-else @click="openNav" class="w-14">
            <!-- menu icon -->
            <svg class="h-30 w-30 fill-current dark:text-white " viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
              />
            </svg>
          </button>
        </transition>
    </div>
  </nav>
  <transition
     enter-active-class="animated bounceIn" leave-active-class="animated hinge"
  >
    <ul id="mobileNav"
      class="font-semibold fixed w-screen h-screen bg-purple-500 text-center text-6xl lg:hidden"
       v-if="on"
    >
      <li><a href="/" class="mt-10" @click.prevent="show('about')">Who </a></li>
      <li><a href="" @click.prevent="show('skills')">Skills </a></li>
      <li><a href="" @click.prevent="show('hobbies')">Hobbies </a></li>
      <li>
        <a href="" @click.prevent="emailMe" class="animate-pulse">Email Me</a>
      </li>
      <li>
        <div class="flex justify-center">
          <img src="img/sun.png" class="w-20 h-20">
          <ThemeSwitch @darkTheme="changeTheme" v-bind:theme="currentTheme"></ThemeSwitch>
          <img src="img/moon.png" class="w-20 h-20 transform -translate-y-2">
        </div>
      </li>
    </ul>
    
  </transition>
  
</template>

<script>
import ThemeSwitch from './theme';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

export default {
  components: {
    ThemeSwitch,
    Swal,
  },
  data() {
    return {
      on: false,
      currentTheme: false,
    };
  },
  methods: {
    openNav() {
      this.on = !this.on;
      if(this.on){
        document.body.style.overflow = 'hidden';
      }else{
        document.body.style.overflow = 'scroll';
      }
    },
    changeTheme(isDark) {
      this.currentTheme = isDark;
    },
    show(title) {
      document.getElementById(title).scrollIntoView({ behavior: "smooth" });
      this.on = false;
    },
    emailMe(){
      Swal.fire({
        title: "<strong class='text-6xl'>Email Me :</strong><br>",
        html: '<a href="mailto:khinmemelatt@outlook.com" class="text-black underline text-5xl">khinmemelatt@outlook.com</a>',
        width: 800,
        showConfirmButton: false,
      });
    }
  },
  mounted() {
    //Change theme according to local Time
    // var dt = new Date();
    // var currentTime = dt.getHours();
    // if(currentTime >= 18 || currentTime < 6)
    //   this.currentTheme = true;
    // else
    //   this.currentTheme = false;

    //Change theme according to operating system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = true;
    } else {
      this.currentTheme = false;
    }
    this.currentTheme = (localStorage.currentTheme == 'true');
  },
  watch: {
    currentTheme: function(newTheme, oldTheme) {
      localStorage.currentTheme = newTheme;
    }
  }
};
</script>

<style scoped>
.mode-fade-enter-active, .mode-fade-leave-active {
  transition: opacity .5s ease
}

.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 0
}
</style>