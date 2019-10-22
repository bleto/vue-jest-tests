<template>
    <div id="app">
        <Button
            color="success"
            title="Doolary"
            @click.native="() => myAction()">
            <template #prepend>
                $
            </template>
        </Button>
        <FlashMessage />
    </div>
</template>

<script>
import Button from '~/components/Buttons/Button';

export default {
    name: 'app',
    components: {
        Button,
        FlashMessage: () => import('~/components/Alerts/FlashMessage'),
    },
    methods: {
        myAction() {
            console.log('test');
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
