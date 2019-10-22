/*
 * Copyright © Bold Brand Commerce Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Store } from 'vuex-mock-store';
import App from '@/App';

const localVue = createLocalVue();
const store = new Store({
    state: {
        alerts: [],
    },
});
const mocks = {
    $store: store,
};
describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App, {
            localVue,
            mocks,
        });
    });
    it('Component is rendered', () => {
        expect(wrapper.is(App)).toBe(true);
    });

    it('Component is named well', () => {
        expect(typeof App.name).toBe('string');
        expect(App.name).toEqual('App');
    });

    it('Checks text content to Hello ', () => {
        expect(wrapper.text()).toBe('Hello');
    });
});
