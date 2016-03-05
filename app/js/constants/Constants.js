var keyMirror = require('keyMirror');



module.exports = {
  ActionTypes:keyMirror({
    DELETE_TODO: null,
    DELETE_TASK: null,
    ADD_TASK: null,
    ADD_TODO: null
  }),
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
}
