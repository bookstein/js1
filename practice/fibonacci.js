// sum up the events inside fibonacci set up to max number

function fibonacciSeq(max)
{

	fibNums = [1];
	currentNum = 1;

	if (max > 1)
		{
			for (var i = 0; i < max; i++)
			{
				fibNums.push(currentNum);
				currentNum = fibNums[fibNums.length - 2] + fibNums[fibNums.length - 1];
			}

			return fibNums;
		}

	else
		{
			return [1,1];
		}

}

fibonacciSeq(10);

function addEvens(seq)
{
	var total = 0;
	for (var i = 0; i < seq.length; i++)
	{
		if (seq[i] % 2 === 0)
		{
			total += seq[i];
		}
	}

	return total;
}

addEvens(fibNums);


// 1, 1, 3, 5, 8, 13,...