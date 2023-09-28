// Literal character means a whole regular expression
const lit = /hello/
const str = "hi! Hello, whats up duck?"
const ans = lit.test(str);
console.log(ans);

// Meta character
// Its means string must be start(^)
// and end($) as like regular expression.
const met = /^I forget about you, long time ago$/;
const metstr = "I forget about you, long time ago";
const ans1 = met.exec(metstr);
console.log(ans1);

//  dot(.) is a metacharacter that matches any single character in that position 
// except for a newline character (\n).
const dot = /a.b/;
const dotstr = "acb";
const dotans = dot.test(dotstr);
console.log(dotans);

// asterisk(*) is a quantifier that specifies that,
//  the preceding character or group should match zero or more times
const star = /a*b/;
const starstr = "aba";
const starans = star.test(starstr);
console.log(starans);

// question mark(?) is a quantifier that specifies that,
//  the preceding character or group should match zero or one time
const que = /colou?r/;
console.log(que.test("colohr")); // true - 'ou?' matches 1 occurrence of 'o' and 0 occurrences of 'u', followed by 'r'

// This called  escaping. Like if we want to print "\n" the we
// use "\\n". Extra "\" to consider those reserve character also.
const que1 = /colou\?r/;
console.log(que1.test("colou?r")); 