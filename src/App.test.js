import { shallow } from 'enzyme';
import Counter from './Counter';
import App from './App';

describe("Counter Testing", () => {

  let wrapper;
  beforeEach(() => {
    //wrapper = mount(<App />);
    wrapper = shallow(<Counter />);
  });

  test('renders the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter react app");
    // console.log(wrapper.debug());
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrrment button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

});
