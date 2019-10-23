<template>
    <div id="app">
        <h1>{{ text }}</h1>
        <Button
            color="success"
            title="Poka alerta"
            @click.native="() => myAction()">
            <template #prepend>
                :|
            </template>
        </Button>
        <FlashMessage />
        <RandomNumbers />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/Buttons/Button';
import RandomNumbers from '@/components/Other/RandomNumbers';

export default {
    name: 'App',
    components: {
        Button,
        RandomNumbers,
        FlashMessage: () => import('@/components/Alerts/FlashMessage'),
    },
    data() {
        return {
            text: 'Hello',
        };
    },
    methods: {
        ...mapActions('alerts', [
            'addAlert',
        ]),
        myAction() {
            this.addAlert({ type: 'success', message: 'Elo !' });
        },
    },
};
</script>

<style>
#app {
    color: #2c3e50;
    text-align: center;
    margin-top: 60px;
}
</style>
