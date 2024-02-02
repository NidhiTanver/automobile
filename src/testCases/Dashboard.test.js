import Dashboard from "../pages/Dashboard";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {shallow} from "enzyme"

configure({ adapter: new Adapter() });


describe("Dashboard", () => {
    const wrapper = shallow(<Dashboard/>);
    it("Dasboard class test case", () => {
        expect(wrapper.exist(".dashbaord-cls")).toEqual(true);
    })
})