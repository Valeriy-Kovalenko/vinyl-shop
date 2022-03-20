import { createStore } from "vuex";

import actions from './action.js';
import getters from './getters.js';
import mutations from './mutations.js';

const store = createStore({
    state() {
        return {
            songs: [
                {
                    name: "xx",
                    price: 14,
                    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xx_album_cover.svg",
                    description: "ХХ is the debut album by English indie pop band the xx. It was released on 14 August 2009 by Young Turks, an imprint label of XL Recordings. After signing a record contract with XL, the xx recorded the album from December 2008 to February 2009 at the label's in-house studio in London. The audio engineer Rodaidh McDonald worked with the band during the recording sessions and attempted to reproduce the intimate, unembellished quality of their demos. The band's Jamie Smith produced xx on his laptop and created electronic beats for the songs, which he then mixed in a detailed process with McDonald.",
                },
                {
                    name: "In Tongues",
                    price: 20,
                    url: "https://upload.wikimedia.org/wikipedia/ru/0/0d/In_Tongues.png",
                    description: "In Tongues is George Miller’s debut EP under the Joji pseudonym. Thematically, it’s all about sadness and heartbreak, topics exemplified by the artwork: Joji strangling and drowning. There was also a deluxe version released that contains 2 exclusive songs and a bunch of remixes of all songs in the EP.",
                },
            ],
        };
    },
    actions,
    getters,
    mutations,
});

export default store;