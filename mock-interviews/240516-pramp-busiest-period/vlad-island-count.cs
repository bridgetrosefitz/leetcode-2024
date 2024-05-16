/*
binaryMatrix = [         [0,    0,    0,    0,    0],
                         [0,    0,    0,    0,    0],
                         [0,    0,    0,    0,    0],
                         [0,    0,    0,    0,    0],
                         [1,    0,    0,    0,    1] ]
                         
                        q =      
                        ans 6
                         
                         
*/

using System;
  
class Solution
{
    public static int GetNumberOfIslands(int[][] binaryMatrix)
    {
      int ans = 0;
      for (int row = 0; row < binaryMatrix.Length; row++)
      {
        for (int col = 0; col < binaryMatrix[row].Length; col++)
        {
          if (binaryMatrix[row][col] == 1)
          {
            BFS(binaryMatrix, (row, col));
            ans++;
          }
        }
      }
      return ans;
    }
  
    public void BFS(int[,] binaryMatrix, (int, int) start)
    {
      var q = new Queue<(int, int)>();
      q.Enqueue(start);
      binaryMatrix[start.Item1][start.Item2] = 0;
      
      while (q.Count > 0)
      {
        var node = q.Dequeue();
        
        foreach(var neighbor in GetNeighbors(node))
        {
          if (binaryMatrix[neighbor.Item1][neighbor.Item2] != 0)
          {
            q.Enqueue(neighbor);
            binaryMatrix[neighbor.Item1][neighbor.Item2] = 0;
          }
        }
      }
    }
  
    public List<(int, int)> GetNeighbors((int, int) node)
    {
      var dirs = {(0, 1), (-1, 0), (1, 0), (0, -1)};
      var list = new List<(int, int)>();      
      foreach(var dir in dirs)
      {
        var newRow = dir.Item1 + node.Item1;
        var newCol = dir.Item2 + node.Item2;
        if (newRow >= 0 && newRow < binaryMatrix.Length && newCol >= 0 && newCol < binaryMatrix[newRow].Length)
          list.Add((dir.Item1 + node.Item1, dir.Item2 + node.Item2));
      }
      return list;
    }

    static void Main(string[] args)
    {

    }
}

https://docs.google.com/spreadsheets/d/1uZ6JaaVFHN0v0Q13lLLe0f0wH0GVDbT2d1TGr4aX_QI/edit?usp=sharing