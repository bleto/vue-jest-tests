<template>
    <label :class="getLabelColor">
        {{ text }}
    </label>
</template>

<script>
export default {
    name: 'Label',
    props: {
        text: {
            type: [String, Number],
            required: true,
        },
        isDisabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        getLabelColor() {
            return this.isDisabled ? 'txt--light-graphite' : null;
        },
    },
};
</script>
