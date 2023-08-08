using System;
using System.Threading;
public class First{
	public static void Main(string[] args)
	{
		Thread t=Thread.CurrentThread;
		t.Name="Main Thread";
		Console.WriteLine(t.Name);
	}
}