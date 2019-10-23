import { mount, createLocalVue } from '@vue/test-utils';
import { Store } from 'vuex-mock-store';
import App from '@/App';

const localVue = createLocalVue();
const store = new Store({
    state: {
        alerts: [],
    },
    dispatch: jest.fn(),
});
const mocks = {
    $store: store,
};

afterEach(() => store.reset());

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(App, {
            localVue,
            mocks,
        });
    });
    it('Component is rendered', () => {
        expect(wrapper.is(App)).toBe(true);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Component is named well', () => {
        expect(typeof App.name).toBe('string');
        expect(App.name).toEqual('App');
    });

    it('Checks store action click event', () => {
        const btn = wrapper.find('.btn');

        expect(btn.exists()).toBe(true);
        btn.trigger('click');
        expect(store.dispatch).toHaveBeenCalledWith('alerts/addAlert', { message: 'Elo !', type: 'success' });
        expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('alerts/addAlert', { message: 'Elo !', type: 'success' });
    });
});
