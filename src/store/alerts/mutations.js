export const types = {
    APPEND_ALERT: 'APPEND_ALERT',
    REMOVE_ALERT: 'REMOVE_ALERT',
};

export default {
    [types.APPEND_ALERT](state, payload) {
        state.alerts.push(payload);
    },
    [types.REMOVE_ALERT](state, index) {
        state.alerts.splice(index, 1);
    },
};
