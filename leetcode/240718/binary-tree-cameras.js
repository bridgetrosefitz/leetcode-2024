function minCameraCover(root) {
  function dfs(node) {
    if (!node) return [Infinity, 0, 0];

    const [leftWithCamera, leftCoveredByChild, leftCoveredByParent] = dfs(
      node.left
    );
    const [rightWithCamera, rightCoveredByChild, rightCoveredByParent] = dfs(
      node.right
    );

    const withCamera =
      1 +
      Math.min(leftWithCamera, leftCoveredByChild, leftCoveredByParent) +
      Math.min(rightWithCamera, rightCoveredByChild, rightCoveredByParent);

    const coveredByChild = Math.min(
      leftWithCamera + rightWithCamera,
      leftWithCamera + rightCoveredByChild,
      leftCoveredByChild + rightWithCamera
    );

    const coveredByParent = leftCoveredByChild + rightCoveredByChild;

    return [withCamera, coveredByChild, coveredByParent];
  }

  const [withCamera, coveredByChild, _] = dfs(root);

  return Math.min(withCamera, coveredByChild);
}
