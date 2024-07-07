function minNumberOfCameras(root) {
  let count = 0;

  function hasCamera(node, parentHasCamera) {
    if (!node) return false;
    // if(node === root) // assign a camera to current node
    const leftHasCamera = hasCamera(node.left);
    const rightHasCamera = hasCamera(node.right);

    if (leftHasCamera || rightHasCamera || parentHasCamera) return false;
    count += 1;
    return true;
  }

  hasCamera(root);

  return count;
}
