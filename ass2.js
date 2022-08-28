1. Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

const Calculator = (A, B, C) => 
{
	switch (A)
	{
	  case '+' :{
	    return B+C;
	    break;
	 }
	 
	 case '-' :{
	   return B-C;
	   break;
	 }
	 case '*':{
	   return B*C;
	   break;
	 }
	 case '/':{
	   return B/C;
	   break;
	 }
	 default : {
	   return "wrog operator";
	   break;
	 }
	}
	 
    
};


2.Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

const Check_divisibility = (N) => {
    if(N%6==0 && N%9==0)
    
    return "Divisible by both";
    
    else
    
    return "Not Divisible by both";

    
};

3.You are given an integer A , denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.
const isEligible = (a) => {
    if (a<18)
    return "Not Eligible for Voting";
    else
    return "Eligible for Voting";
};

4.PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.
const findRelation = (x,y) => 
{
    if (x<y)
    {
      return x+" is smaller than "+y;
    }
    else if (x>y)
    {
      return x+" is greater than "+y;
    }
    else if(x==y)
    {
      return x+" is equal to "+y;

    }  
  };

  5.Your school has the following grading system based upon the marks(M) obtained by a student:
  const findGrades = (a) => {
    if (a<=10)
    return "E";
    else if (a>=11 && a<=20)
    return "D";
    else if (a>=21 && a<=30)
    return "C";
    else if(a>=31 && a<=40)
    return "B";
    else if (a>=41 && a<=50)
    return "A";
 };

 6.You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.
 const getValue = (a) => {
    if (a=='p' || a== 'P')
    return "PrepBytes";
    else if (a=='z' || a=='Z')
    return "Zenith";
    else if( a=='e' || a=='E')
    return "Expert Coder";
    else if (a=='d' || a=='D')
    return "Data Structure ";
};

7.Find the maximum out of three numbers.
const Max_out_of_three = (A,B,C) => {
    if (A>B && A>C)
    return A;
    else if (B>A && B>C)
    return B;
    else if (C>A && C>B)
    return C;
    else if (A==B && A==C)
    return '-1';

};

8.Second Smallest
const findSndSmallest = (x,y,z) => {
    
    let small2;
    if ((x<y) && (x>z)|| (x>y) && (x<z))
    return x;
    
    else if ((y<x) && (y>z) || (y>x) && (y<z))
     return y;
     
    else if ((z<x) && (z>y) || (z>x) && (z<y))
     return z;
  };



9.Check whether the triangle is Acute or Obtuse
const Triangle_Check = (A,B,C) => {
    if (A<90 && B<90 && C<90 && A+B+C==180)
     return "acute";
     else 
     return "obtuse";
    
};