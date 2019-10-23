import { mount, createLocalVue } from '@vue/test-utils';
import RandomNumbers from '@/components/Other/RandomNumbers.vue';

const localVue = createLocalVue();

describe('Other/RandomNumbers', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(RandomNumbers, {
            localVue,
            propsData: {
                min: 1,
                max: 10,
            },
        });
    });

    it('Component is rendered', () => {
        expect(wrapper.is(RandomNumbers)).toBe(true);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Component is named well', () => {
        expect(typeof RandomNumbers.name).toBe('string');
        expect(RandomNumbers.name).toEqual('RandomNumbers');
    });

    it('Checks store action click event', () => {
        const btn = wrapper.find('.set-random');
        const number = wrapper.find('.number');

        wrapper.setProps({
            min: 10,
            max: 100,
        });
        expect(btn.exists()).toBe(true);
        btn.trigger('click');
        expect(+number.text()).toEqual(expect.any(Number));
    });
});
