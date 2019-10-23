<template>
    <div>
        <slot :log-click="onClick" :log-info="logInfo" />
    </div>
</template>

<script>
export default {
    name: 'Log',
    data() {
        return {
            logInfo: 0,
        };
    },
    methods: {
        onClick() {
            this.logInfo += 1;
            console.log('Log method');
        },
    },
};
</script>
