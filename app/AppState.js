import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Quote } from "./Models/Quote.js"
import { Todo } from "./Models/Todo.js"
import { Weather } from "./Models/Weather.js"
import { Image } from "./Models/Image.js"
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Image').Image[]} */
  images = null

    /** @type {import('./Models/Weather').Weather[]} */
  weather = []
/** @type {import('./Models/Todo').Todo[]} */
  todos = []

/** @type {import('./Models/Quote').Quote[]} */
  quotes = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
