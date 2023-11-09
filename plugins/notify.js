import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

// Create an instance of Notyf
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
})


export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('notyf', notyf)
}
