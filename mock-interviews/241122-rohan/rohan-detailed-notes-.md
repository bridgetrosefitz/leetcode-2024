5:05 start reading prompt
5:07 finish reading, begin clarifying
5:09 TC clarifies all returned pages are valid
5:10: Does that mean I use that function to return not just the loest 100, but ALL valid page IDs
5:12: I clarify that we're returning them all

5:13: TC's grokked it, and begins ideating

TC's idea:

- call this function many times until we've got no more articles that can be returned.
- we don't want to repeatedly get the same 100
- in what context might we be using this piece of work?
  - slight tangent. Nudged to "just write a function"
- keep track of latest IDs
- can I assume they're returned in sorted order?]
  - yes (to simplify and speed up)
- start with >currentLargestId
  - store them somewhere
- do this until I get no more IDs back
  5:17
- if there were no pages that matched, would it return an empty array? - yes
  5:18
- would it return a list of <100 if we reached the end
- I think I can just run a while loop until the end
- I ask: what would be your stopping condition?
  - store most recent returned list
  - if that length is < 100 we stop

5:19:

- I feel good about it. Tell TC to go for it.
- TC ensures there's nothing extra in the setup they're missing
  5:20:
- TC starts coding
  5:22:
- TC is trying to scaffold a solution. Slow but probably down to nerves
  5:23:
- TC has a scaffolding that works, just without the filters appplied
  5:24:
- TC assumes latestStartingId can be 1 (nit)
- TC fixed 1 to 0 (more minor nit)
  5:26:
- TC has forgotten to handle the case when the while-loop never fires...
- TC is checking...
  5:28:
- TC is doing a line-by-line stepthrough 💪 - I failed to tell TC that there's a followup 🤦‍♂️
  5:29:
- TC found their bug. Trying to fix
  5:30:
- somewhat inelligant fix, but works.
  5:32:
- Done!
  I ask: if there are N valid pages, how many calls to your getPageIDs would you make?
  TC: N/100, sound reasoning
  5:33:
- Begin explaining followup
  5:35:
- followup explanation done
  TC's first idea: just explicityly ask for NOT the ones that we've already seen
  5:40:
- if we have consecutive numbers, there's nothing missing
- find where there are not consecutive numbers and create a filter for those.
  5:47:
- hint TC towards probing the gaps
