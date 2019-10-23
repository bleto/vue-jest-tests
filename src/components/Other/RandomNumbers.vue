<template>
    <div>
        <span class="number">{{ randomNumber }}</span>
        <Log #default="{logClick, logInfo}">
            <Button
                class="log"
                color="success"
                :title="`Show log - ${logInfo}`"
                @click.native="logClick">
            </Button>
        </Log>
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
import Log from '@/components/Other/Log';

export default {
    name: 'RandomNumbers',
    components: {
        Button,
        Log,
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
