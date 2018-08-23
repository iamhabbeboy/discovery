<template>
    <div>
        <p> Do you recognise this place </p>
        <div class="wrap">
            <div v-for="image of images" v-bind:key="image.id">
                <div class="left-1">
                    <a href="">
                        <img src="../assets/2.jpg" class="image">
                    </a>
                </div>
            </div>
        </div>
        <div class="answer">
            <div v-for="col of answer" v-bind:key="col.id">
                <input type="text" readonly class="col" :id="col" @click="clear_text(col)">
            </div>
        </div>

        <div class="suggestion">
            <div v-for="suggestion of suggestions" v-bind:key="suggestion.id">
                <button @click="selection(suggestion)">{{suggestion}}</button>
            </div>
        </div>

    </div>
</template>

<script>

import json from '../data.json';

export default {
    name: 'Game',
    created() {
        this.loader();
        this.suggestion();
    },

    data() {
        return {
            images: [],
            column: '',
            answer: 0,
            clicked: 0,
            store: ''
        }
    },
    methods: {

        loader(){
            const data     = json.data[0];
            this.images    = data.images;
            this.column    = data.answer;
            this.answer    = this.column;
            this.clicked   = 0;
            console.log(this.images)
        },

        suggestion() {

            let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
            ];
            let combine = '';
            for(let i = 0; i < 6; i++) {
                let rand = Math.ceil(Math.random() * letters.length -1 );
                combine += letters[rand]
            }
            let ans  = this.answer + combine.substring(0, 6);
            this.suggestions = ans.toUpperCase();
        },

        selection(val) {
            val = val.toLowerCase()
            const input = document.querySelectorAll('input[type=text]')
             this.watcher(val);
            for(let i = 0; i< input.length; i++) {
                if( input[i].value == '' ) {
                    return input[i].value = val
                }
            }
        },

        clear_text(e) {
            this.clicked -= 1
            this.store.replace(e, ' ')
            return document.querySelector(`#${e}`).value = ''
        },

        watcher(val) {
            this.clicked += 1
            this.store += val

            console.log(this.clicked +' '+ this.store)

            if( this.store == this.answer && this.clicked >= this.answer.length ) {
                alert('You are correct')
            }

            if( this.store !== this.answer && this.clicked >= this.answer.length) {
                alert('Your answer is wrong, try again')
            }

        }
    }
}
</script>

<style>

   .wrap {
       display: flex;
       flex-wrap: wrap;
       width: 100%;
   }

    .wrap > div {
        transition: .9s all;
        width: 40%;
        margin-left: 20px;
    }
    .image {
        width: 250px;
        max-width: 100%;
    }

   .wrap > div:hover {
       opacity: .4;
   }

   button {
       background: transparent;
       border: 0px;
       cursor: pointer;
   }


   .answer {
       clear: both;
       margin: 40px auto;
       width: 100%;
   }

   .answer .col {
       float: left;
       border: 1px solid #ffffff;
       width: 50px;
       font-size: 30px;
       background: #FFF;
       margin: 10px;
       text-transform: uppercase;
       text-align:center;
       cursor: pointer;
   }

   .suggestion {
       clear: both;
       border-top: 1px solid #666;
   }

   .suggestion button {
       padding: 10px 20px;
       float: left;
       background-color: #ccc;
       margin: 20px 10px;
       color: #000;
       cursor: pointer;
       transition: .9s all;
       border: 2px solid burlywood;
       font-weight: bold;
   }

   .suggestion > div:hover {
       opacity: .4;
   }
</style>
