import { h } from 'preact';
import { shallow } from '@pepsryuu-dev/preact-render-spy';
import './cases/*';

window.expect = global.require('chai').expect;
window.shallow = shallow;
window.h = h;