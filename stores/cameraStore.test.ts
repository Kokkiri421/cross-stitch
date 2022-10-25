import cameraStore, { ZOOM_OPTIONS } from './cameraStore';

describe('camera store testing', () => {
  it('max zoom test with large number', () => {
    cameraStore.setZoom(10000);
    expect(cameraStore.cameraProperties.zoom).toBe(ZOOM_OPTIONS.MAX);
  });
});
