import { applyMiddleware } from 'redux'

export default (rootListeners = [], drivers, withDevTools) => {
  // k-ramel store
  let innerStore

  // k-ramel listners
  let innerListeners = [rootListeners]

  return {
    // this setter is needed since the middleware is pass to redux
    // createStore, and then BEFORE, we have store instanciated
    setStore: (store) => {
      innerStore = store
    },

    // this is to add new listeners
    addListeners: (listeners) => {
      innerListeners = [...innerListeners, listeners]
    },

    // this is to remove listeners
    removeListeners: (listeners) => {
      innerListeners = innerListeners.filter(l => l !== listeners)
    },

    // redux middleware
    enhancer: applyMiddleware(() => next => (action) => {
      const innerAction = withDevTools ? (action.action || action) : action

      // dispatch action
      const res = next(action)

      // trigger listeners
      innerListeners
        .forEach((listeners) => {
          try {
            listeners.forEach((listener) => {
              listener(innerAction, innerStore, innerStore.drivers)
            })
          } catch (exception) {
            innerStore.dispatch({
              type: '@@krml/EXCEPTION',
              payload: {
                from: action,
                exception,
                message: exception.message,
              },
            })
          }
        })

      // return action result
      return res
    }),
  }
}
