## longest-palindromic-substring

### Brute force solution
* iterate through each letter (i)
    * nested iteration through each combination of letters per each letter[i]
    * check each combination to see if it is a palindrome 

### Brute force big O
* n^3
    * first loop --> nested loop --> iterate each combo to determine palindromic status