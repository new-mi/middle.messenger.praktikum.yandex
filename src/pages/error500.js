import layout from '../layout'
import error from '../components/error'
import link from "../components/link";
import {renderInDOM} from "../utils/render";

const layoutContent = error.render({
  ...error.data[500],
  contentLink: link.render(link.data.errorLink)
})

const template = layout.render({
  ...layout.data.error,
  content: layoutContent
})

renderInDOM(document.querySelector('#app'), template)

