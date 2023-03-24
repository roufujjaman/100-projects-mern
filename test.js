function gradeCalculator(num){
    
    if (num<0 || num>100)
        return "error"

    if(num<=59)
        return "F"
    if(num<=69)
        return "D"
    if(num<=79)
        return "C"
    if(num<=89)
        return "B"
    if(num<=100)
        return "A"


}

