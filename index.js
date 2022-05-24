function freezeObj()
{
    "use strict";

    const MATH_CONSTANTS = 
        {
            PI: 3.14
        };

        Object.freeze(MATH_CONSTANTS); //Whenever you have an object, and you don't want any of the items in the object to change, use object.freeze.

        try 
        {
            MATH_CONSTANTS.PI = 99;
        } 
        
        catch( ex )
        {
            console.log(ex);
        }

        return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);