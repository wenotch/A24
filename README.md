# A24 Test

Javascript:

1. **What is your favourite new javascript feature and why?**

   My favorite new feature of the es6 version of javascript is the arrow function. It makes writing functions shorter since my code can be possibly written on a single line.

2. **Explain an interesting way in which you have used this javascript feature.** 

   My favorite places of using the arrow functions are mostly when I need to write onclick functions or even return JSX elements in my react apps. let's say I need a function that logs "hello" to the console when a button is, I simply can write onClick={()=>console.log("hello")} how cool is that?

3. **Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)**

   A coincidence I am asked about my cool arrow function and regular function syntax. 😁 I would personally say there is a difference and one I am certain of is that the "return"        keyword wouldnt be used inside the arrow function. 

4. **What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’ **

   Yeah, I was once dealt with fixing this as a bug in my code many months back. While ++foo and foo++ would increase the value of foo by +1, ++foo returns the new increased            value i.e foo = foo + 1, while foo++ would return the previous value i.e foo = foo
   
5. **In your own words, explain what a javascript ‘class’ is and how it differs from a function.**

   I sincerely do not have a strong grasp of this, but would definitely read extensively on it after this test.


CSS 

6. **In your own words, explain css specificity.**

   CSS specificity is the order of importance in which the browser applies CSS style to a particular element with different CSS styles applied to it. let's say you give the color red to an element using its Id and you give the color green to the same element using its class name. the browser wouldn't render the two colors, rather it uses the rule of specificity and gives it a color in this case red since IDs are more specific than classes. 
   
7. **In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what      you expect?**

   !important means that a specific style "must" be applied and all other of that style ignored. its behavior might not be what I expect if there is another selector applying another style with the !important. the latter takes precedence. 

8. **What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?**

   I mostly prefer working with the flexbox, it makes it easier for me to predict my layout. sometimes I prefer the inline-block, really works for me too.

9. **Are negative margins legal and what do they do (margin: -20px)?**

   I would say they are legal but are quick to behave like criminals (Lol). I tend to avoid it in my codes because they might cause layout issues that may take a while to fix.    But it's a handy thing to do when Implementing complex user interfaces. 

10. **If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the           margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?**

    The empty-styled div collapse on the p tag and they literally act like one until some style is applied on the div to show they are different. I think it was designed to be that way. Cannot really recall what the concept was called.


Unit tests

11-13 I haven't really worked with unit testing. But definitely looking forward to an opportunity to effectively learn with it.

React
14-15 were attempted here is a link https://a24.netlify.app/

16. was not able to attempt it.

