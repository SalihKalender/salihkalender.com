<template>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-container">
            <div class="form-group name-group">
                <div>
                    <label for="name">İsim</label>
                    <input type="text" id="name" autocomplete="off" required v-model="postSec.name">
                </div>
            </div>
            <div class="form-group lastname-group">
                <div>
                    <label for="mail">E-mail</label>
                    <input type="email" id="mail" autocomplete="off" required v-model="postSec.email">
                </div>
            </div>
            <div class="form-group message-group">
                <div>
                    <label for="name">Mesajınız</label>
                    <textarea required id="message" v-model="postSec.message"></textarea>
                </div>
            </div>
            <div class="submit-sec">
                <transition name="p5" appear>
                    <btn>Gönder</btn>
                </transition>
            </div>
        </div>
    </form>
</template>
<script>
import btn from './button/btn'
import store from '../store/store'
export default {
    components: {
        btn
    },
    data() {
        return {
            postSec: {
                name: null,
                email: null,
                message: null
            }
        }
    },
    methods:  {
        async onSubmit() {
            await store.dispatch('postMessage',this.postSec);
            this.postSec.name = null ; this.postSec.email = null ; this.postSec.message = null;
        }
    }
}
</script>