#include <iostream>
#include <string>
#include <vector>
#include <list>
#include <unordered_map>
#include <unordered_set>
using namespace std;
/*
    document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
    
    document -> list of tokens
    visited = set{} // 
    ['practice', 'makes', 'perfect', 'youll', 'only', 'get', 'perfect', 'by', 'practice', 'just', 'practice]
   freq = {
        'practice' : 3,
        'makes' : 1,
        'perfect': 2
        .
        .
    } 
    max_freq = 3
                1                                               2           3
    [[], ['makes, 'youll', 'only', 'get', 'by', 'just'], ['perfect'], ['practice']]
    ans = [['practice', 3], ['perfect', 2], ['makes',1], ['youll', 1], ['only', 1]...]
    return ans
    pos = {
        'practice': 0,
        'makes' : 1,
        'perfect' :2,
        .
        .

    }
    O(N * maxLen of word) 
    O(N * maxLen of word log N * maxLen of word) - > N -> number of words

*/
char lower(char c){
    if(c >= 'A' and c <='Z')
        return c + ('a' - 'A');
    
    return c;
}

list<string> tokenize(const string& doc){
    list<string> tokens;
    string word = "";
    for(int i = 0; i <= doc.length(); i++){
        if(i == doc.length() or doc[i] == ' '){
            if(word != "")
                tokens.push_back(word);
            word = "";
        }
        else{
            char c = lower(doc[i]);
            if(c >= 'a' and c <='z')
                word += c;
        }
    }

    return tokens;
}
vector<vector<string>> wordCountEngine( const string& document ) 
{
  // your code goes here
  list<string> words = tokenize(document);
  unordered_map<string, int> freq;
  int max_freq = 0;
  for(string word: words)
    {
        freq[word]++;
        max_freq = max(max_freq, freq[word]);
    }

  vector<list<string>> buckets(max_freq+1);
  unordered_set<string> visited;

  for(string word: words){
    if(visited.find(word) == visited.end()){
        buckets[freq[word]].push_back(word);
        visited.insert(word);
    }
  }
  vector<vector<string>> ans;
  for(int i = max_freq; i>= 1; i--){
    for(string word: buckets[i])
        ans.push_back({word, to_string(i)});
  }

  return ans;
}

int main() {
  return 0;
}