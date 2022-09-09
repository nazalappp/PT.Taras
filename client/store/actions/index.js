import * as arena from './arena'
import * as article from './article'
import * as auth from './auth'
import * as slider from './slider'
import * as detail from './detail'
import * as testArticle from './testArticle'

const actions = {
  ...arena,
  ...article,
  ...auth,
  ...slider,
  ...detail,
  ...testArticle
}

export default actions
