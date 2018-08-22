<template>
    <div>
        <p> Do you recognise this place </p>
        <div class="wrap">
            <div class="left-1">
                <a href="">
                    <img src="../assets/1.jpg" class="image">
                </a>
            </div>
            <div class="right-1">
                <a href="#">
                    <img src="../assets/2.jpg" class="image">
                </a>
            </div>
        </div>
        <div class="answer">
            <div v-for="col of answer" v-bind:key="col.id">
                <input type="text" class="col" :id="col" >
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
    mounted() {
        this.watcher()
    },
    data() {
        return {
            images: [],
            column: '',
            answer: 0
        }
    },
    methods: {

        loader(){
            const data     = json.data[0];
            this.images    = data.images;
            this.column    = data.answer;
            this.answer    = this.column;
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
            // this.watcher();
            for(let i = 0; i< input.length; i++) {
                if( input[i].value == '' ) {
                    return input[i].value = val
                }
            }
        },

        clear_text() {
            console.log()
        },

        watcher() {

            let input = document.querySelectorAll('input[type=text]')
            // let col   = document.querySelector('.col')
            // let combine = '';

            // if( input[input.length -1].value ) {
            //     for(let i = 0; i< input.length; i++) {
            //         combine += input[i].value
            //     }
            //     console.log(combine +', ' + this.answer)
            //     if( combine.toLowerCase() === this.answer ) {
            //         alert('You are correct');
            //         col.style.color = "green"
            //     } else {
            //         alert('oOps you are wrong')
            //         col.style.color = "red"
            //     }
            // } else {
            //     console.log('some column still empty')
            // }

        }
    },

    watch: {
        val(value) {
            this.answer = value
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
