import { mount, createLocalVue } from '@vue/test-utils';
import Log from '@/components/Other/Log.vue';
import Button from '@/components/Buttons/Button';

const localVue = createLocalVue();

describe('Other/Log', () => {
    let wrapper;
    beforeEach(() => {
        const buttonWrapper = {
            render(h) {
                return h(Button, { props: { title: 'Test' } });
            },
        };
        wrapper = mount(Log, {
            localVue,
            slots: {
                default: buttonWrapper,
            },
        });
    });

    it('Component is rendered', () => {
        expect(wrapper.is(Log)).toBe(true);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Component is named well', () => {
        expect(typeof Log.name).toBe('string');
        expect(Log.name).toEqual('Log');
    });

    it('Button are inserted in a Log component', () => {
        const log = wrapper.find(Log);
        expect(log.find(Button).isVueInstance()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    it('Checks store action click event', () => {
        const btn = wrapper.find('.btn');
        expect(btn.exists()).toBe(true);
        btn.trigger('click');
        expect(wrapper).toMatchSnapshot();
        // expect(+number.text()).toEqual(expect.any(Number));
    });
});
