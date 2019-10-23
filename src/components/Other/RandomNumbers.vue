<template>
    <div>
        <span class="number">{{ randomNumber }}</span>
        <Button
            class="set-random"
            color="success"
            title="Generate Random Number"
            @click.native="generateRandomNumber">
        </Button>
    </div>
</template>
<script>
import Button from '@/components/Buttons/Button';

export default {
    name: 'RandomNumbers',
    components: {
        Button,
    },
    props: {
        min: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: 10,
        },
    },
    data() {
        return {
            randomNumber: 0,
        };
    },
    methods: {
        generateRandomNumber() {
            this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        },
    },
};
</script>
