<template id="switch-button">
  <div>
    <label class="switch">
      <input type="checkbox" @change="switchTheme" v-model="isDark" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    theme: Boolean,
  },
  data() {
    return {
      isDark: Boolean,
    };
  },
  methods: {
    switchTheme() {
      if (this.isDark) {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
      this.$emit("darkTheme", this.isDark);
    },
  },
  watch: {
    theme(newTheme) {
      this.isDark = newTheme;
      this.switchTheme();
    },
  },
  mounted() {
    this.isDark = this.theme;
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
}

@media (min-width: 768px) {
  .switch {
    width: 125px;
    height: 60px;
  }
}

@media (min-width: 1024px) {
  .switch {
    width: 60px;
    height: 34px;
  }
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

@media (min-width: 768px) {
  .slider:before {
    width: 50px;
    height: 52px;
  }
}

@media (min-width: 1024px) {
  .slider:before {
    width: 26px;
    height: 26px;
  }
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

@media (min-width: 768px) {
  input:checked + .slider:before {
    -webkit-transform: translateX(70px);
    -ms-transform: translateX(70px);
    transform: translateX(70px);
  }
}

@media (min-width: 1024px) {
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>