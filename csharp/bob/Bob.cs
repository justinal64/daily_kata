using System;

// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
//
// Bob answers 'Sure.' if you ask him a question.
//
// He answers 'Whoa, chill out!' if you yell at him.
//
// He says 'Fine. Be that way!' if you address him without actually saying
// anything.
//
// He answers 'Whatever.' to anything else.


public static class Bob
{
    public static string Hey(string statement)
    {
        Console.WriteLine(statement);
        return "Whatever.";
        // throw new NotImplementedException("You need to implement this function.");
    }
}
