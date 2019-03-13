import {IoCore} from "../../../io/build/io-core.js";
import * as THREE from "../../../three.js/build/three.module.js";

// TODO: consider IoLite

export class Shot extends IoCore {
  static get properties() {
    return {
      camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      time: {
        value: 0,
        config: {step: 0.01}
      }
    };
  }
  constructor() {
    super();
    this.init();
  }
  init() {
  }
  dispose() {
  }
  onPropertychanged() {

  }
  play() {

  }
  pause() {

  }
  stop() {

  }
  changed() {

  }
  preRender() {

  }
  postRender() {

  }
  path(path, importurl) {
    return new URL(path, importurl).pathname;
  }
}

Shot.Register();
