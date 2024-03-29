import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Store } from 'vuex-mock-store';
import FlashMessage from '@/components/Alerts/FlashMessage.vue';

const localVue = createLocalVue();
const store = new Store({
    state: {
        alerts: [
            {
                id: 1,
                type: 'warning',
                message: 'You better watch out!!!',
            },
        ],
    },
});
const mocks = {
    $store: store,
};

afterEach(() => store.reset());
describe('Alerts/FlashMessage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(FlashMessage, {
            localVue,
            mocks,
            stubs: ['transition-group'],
        });
    });

    it('Component is rendered', () => {
        expect(wrapper.is(FlashMessage)).toBe(true);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Component is named well', () => {
        expect(typeof FlashMessage.name).toBe('string');
        expect(FlashMessage.name).toEqual('FlashMessage');
    });
});
