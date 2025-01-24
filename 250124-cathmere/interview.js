
/* Tennis has a rather quirky scoring system, and to newcomers it can 
 * be a little difficult to keep track of. The tennis society has 
 * contracted you to build a scoreboard to display the current score 
 * during tennis games.
 *
 * You can read more about Tennis scores on wikipedia which is 
 * summarized below:
 * 
 * + A game is won by the first player to have won at least four points 
 * 	 in total and at least two points more than the opponent.
 * + The running score of each game is described in a manner peculiar to 
 * 	 tennis: scores from zero to three points are described as “Love”, 
 * 	 “Fifteen”, “Thirty”, and “Forty” respectively.
 * + If at least three points have been scored by each player, and the 
 * 	 scores are equal, the score is “Deuce”.
 * + If at least three points have been scored by each side and a player 
 *	 has one more point than his opponent, the score of the game is 
 * 	 “Advantage” for the player in the lead.
 * 
 * You need only report the score for the current game. Sets and 
 * Matches are out of scope.
 
 NOTES
 - write out unit tests I think are important to test this code
 -- how would I know that getScore works without going into it deeply
 
 - do a code review
 -- if this came in as a PR and I was going to provide feedback to other engineers
 -- changes, what would I flag
 
 
 case
 assert
 
 
 
*/


'use strict';

function getScore(m_score1, m_score2) { // integer score
    var score = "";
    var tempScore = 0;
    if (m_score1 === m_score2) {
        switch (m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        var minusResult = m_score1 - m_score2;
        if (minusResult === 1) {score = "Advantage player1";}
        else if (minusResult === -1) {score = "Advantage player2";}
        else if (minusResult >= 2) {score = "Win for player1";}
        else {score = "Win for player2";}
    } else {
        for (var i = 1; i < 3; i++) {
		// EXAMPLE: 0-1
		// score Love-Fifteen
			let tempScore // 0 > 1
            if (i === 1) {
				tempScore = m_score1; 
			} else {
                score += "-"; 
                tempScore = m_score2; 
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
}

module.exports = getScore;

/*


 TEST
 - Happy cases
 -- 0-0
 -- player one higher than player two
 -- player two higher than player one
 -- SAME FOR EVERY POSSIBLE SCORE
 -- deuce, case 1: both players at 3
 -- deuce, case 2: both players at 4
 -- advantage: player one at 4, player two at 3
 -- game, case 1: player one is 4, player two is two
 -- game, case 2 (advantage): player one is at 3, player two is at 5
 - Edge cases
 -- different data types: one string input
 -- empty arguments
 -- large numbers (how do we handle if past a certain limit)
*/

describe("Handle below deuce", () => {
    test('0-0 results in "Love-All"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });

    test('0-1 results in "Love-Fifteen"', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });

    test('0-2 results in "Love-Thirty"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });

    test('0-3 results in "Love-Forty"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });
	
	test('0-4 results in "Win for player2"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });
	
	test('1-0 results in "Love-All"', () => { // REPEAT FOR INVERSE
      expect(fizz_buzz([3])).toBe('fizz');
    });

    test('2-0 results in "XXX"', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });

    test('3-0 results in "XXX"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });

    test('4-0 results in "XXX"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });
	
	
	/////////////////////////////////////
	describe("Handle deuce and advantage", () => {
    test('[3] should result in "fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });

    test('[5] should result in "buzz"', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });

    test('[15] should result in "fizzbuzz"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });

    test('[1,2,3] should result in "1, 2, fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });
	
	/////////////////////////////////////
	describe("Handle edge cases", () => {
    test('[3] should result in "fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });

    test('[5] should result in "buzz"', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });

    test('[15] should result in "fizzbuzz"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });

    test('[1,2,3] should result in "1, 2, fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });