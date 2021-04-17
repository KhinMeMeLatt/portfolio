require('./fontawesome');
require('./typeWriter');

import { createApp } from 'vue';
import AOS from 'aos';
import Navbar from './components/navbar';
import Scroll_up from './components/scrollUp';

const app = createApp({
    components:  {
        Navbar,
        Scroll_up,
    },
    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState == "complete") {
                document.getElementById('loading-image').style.display="none";
                document.getElementById('content').style.display= "block";
            } else {
                document.getElementById('content').style.display= "none";
            }
        };
        AOS.init();
    }
});

app.mount("#app");