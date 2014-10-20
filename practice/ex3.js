// returns duplicates from a list

function findDuplicates(list1)
{
    myObj = {};
	duplicates = []

	for (var i = 0; i < list1.length; i++)
	{
		if (list1[i] in myObj) // this was the key line!!
						// NOT myObj[list[i]] or list1[i] in Object.keys(myObj)
		{
			myObj[list1[i]] = 1;
		}

		else
		{
			myObj[list1[i]] = 0;
		}
	}

    for (property in myObj)
    {
        if (myObj[property] > 0 )
        {
            duplicates.push(property);
        }
    }

    return duplicates;
}

findDuplicates(hackbrightStudents);
findDuplicates(classroomIds);

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3",
    "33", "999", "9"]