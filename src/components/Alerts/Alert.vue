/*
 * Copyright © Bold Brand Commerce Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
<template>
    <div :class="['alert', typeClass]">
        <span
            class="alert__title typo-subtitle txt--dark-graphite"
            v-text="alert.message" />
        <Button
            fab
            color="transparent">
            <template #prepend>
                $
            </template>
        </Button>
    </div>
</template>

<script>
import { toCapitalize } from '~/models/stringWrapper';
import Button from '~/components/Buttons/Button';

export default {
    name: 'Alert',
    components: {
        Button,
    },
    props: {
        alert: {
            type: Object,
            required: true,
            validator: value => ['success', 'info', 'warning', 'error'].indexOf(value.type) !== -1,
        },
    },
    computed: {
        typeClass() {
            return `alert--${this.alert.type}`;
        },
        capitalizedAlertType() {
            return toCapitalize(this.alert.type);
        },
    },
};
</script>

<style lang="scss" scoped>
    .alert {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        padding: 10px 18px;
        margin: 2px 0;
        background-color: #fff;

        &__title {
            margin-left: 16px;
            flex: 1;
            word-break: break-word;
        }

        &--error {
            border: solid 2px red;
        }

        &--warning {
            border: solid 2px orange;
        }

        &--info {
            border: solid 2px blue;
        }

        &--success {
            border: solid 2px green;
        }
    }
</style>
