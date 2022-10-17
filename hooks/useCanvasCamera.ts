import React, { useEffect, useCallback } from 'react';
import cameraStore from '../stores/cameraStore';

const useCanvasCamera = (ref: React.RefObject<HTMLDivElement>) => {
  const updateZoom = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (!Number.isInteger(e.deltaY)) {
      cameraStore.setZoom(e.deltaY);
    }
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', updateZoom);
    }
    return () => currentRef?.removeEventListener('wheel', updateZoom);
  }, [ref, updateZoom]);
};

export default useCanvasCamera;
