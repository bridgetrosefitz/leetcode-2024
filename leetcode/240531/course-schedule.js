var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;

  const adj = {
    0: [1],
    3: [0],
    1: [3],
  };

  // turn the prereqs into an adjacency list
  // use dfs to go through full chain of pre-reqs for each key in prereqs map
  // pass in key that we need to look out for through the whole chain

  function dfs(currClass, originalClass) {
    // return false if I hit originalClass
    if (currClass === originalClass) return false;

    for (const neighbor of adj[currClass]) {
      dfs(neighbor, originalClass);

      // dfs comes back with a value
      // it's up to me to process the value and do something with it
      // if true, I just keep going
      // if false, I know there's a problem. So now ALSO AT THIS LEVEL, I also know it's not possible,
      // so it is this level's duty to send it back up

      // without passing up the result, it does nothing to the whole stack
      // I need to send the info all the way back up. The only way to communicate wha tthe guy below it said to him
      // a parent call + child process
      // the parent only knows what the child got after the child returns a value to it. Then it passes back up
      // when you return at a given call, it's not like everything over, you have to keep returning up to the top level

      // if it's true, no problem has been found so far
      // that doesn't mean there can't be a prob in future
      // detect when it fails, not find sth when it's true
      // if we find a false, we return out of function, otherwise keep going

      // when I return the function call is over
    }

    return true; // because I'm done with the checking

    // I can return true here because every neighbor and all its neighbors have been checked and we're fine
  }

  dfs(0);
};
