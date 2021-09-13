import { Util } from './util';
export { Util } from './util';
export default (Vue, options) => {
	Vue.helper = Vue.prototype.$helper = new Util();
}