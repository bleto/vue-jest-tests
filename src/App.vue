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
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/Buttons/Button';

export default {
    name: 'App',
    components: {
        Button,
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
