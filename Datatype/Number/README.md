<h1>javscript Key Note</h1>

<h3>Number</h3>
<p>
7 basic data type in js:
1. String (1 charachter as 1byte(8 bit))
2. Number (8 byte (64 bit))
3. Bigint (store large INT value, greater than -2<sup>53</sup>-1 to 2<sup>53</sup>-1)
4. Boolean (true or false, commonly 1 byte (8 bit))
5. Undefined 
6. Null
7. Symbol
8. Object
</p>
<br>
<h3>toString(base to convert)</h3><p>base 2 = binnary, 8 = octal, 16 = hex
toString use to convert a number to string.</p>

<h3>toPrecision(precision value)</h3>
<p>toPrecision just convert the number value to string and cut the value from left on precision size.<br>
Example: 123.45 precision = 4; value = 123.4</p>

<h3>toFixed(precision) </h3>
<p>toFixed set the precision after Decimal point. But it also retirn the value as string<br>
Example: 123.452 precision = 2; value = 123.45</p>

<h3>parseInt() </h3><p>convert string number to Integer value</p>
<h3>parseFloat() </h3><p>convert string number to float value</p>
<h3>isNaN(value) </h3> <p>check if the value is not a number. If number it will return false, if not number it will return true.</p><b>Note: if a string contain only number value, still it will return false, because it will assume those value as a number</b></p>