import { makeAutoObservable } from 'mobx';
import { CameraProperties } from '../types/canvas.types';

const ZOOM_OPTIONS = {
  MIN: 0.5,
  START: 1,
  MAX: 3,
  SENSITIVITY: 0.0005,
};

class CameraStore {
  cameraProperties: CameraProperties = {
    zoom: ZOOM_OPTIONS.START,
  };

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setZoom(delta: number) {
    if (delta > 0) {
      this.cameraProperties.zoom = Math.min(
        ZOOM_OPTIONS.MAX,
        this.cameraProperties.zoom + delta * ZOOM_OPTIONS.SENSITIVITY
      );
    } else {
      this.cameraProperties.zoom = Math.max(
        ZOOM_OPTIONS.MIN,
        this.cameraProperties.zoom + delta * ZOOM_OPTIONS.SENSITIVITY
      );
    }
  }
}

export default new CameraStore();
