using System;

public static class ReverseString
{
  public static string Reverse(string input)
  {
    char[] chars = input.ToCharArray(); // convert to char array
    Array.Reverse(chars); // reverse char array
    return new string(chars); // convert back to string and return 
  }
}