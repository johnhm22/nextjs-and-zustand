## Overview  
A NextJS project using the global state management library Zustrand.  

## Tech Stack  
NextJS using TypeScript and Tailwindcss  
Zustrand as a global state manager  

## Tech points of interest  
### Dialog component and others  
The Dialog component from Shadcn/ui has been used to manage the pop-up modal for adding a new task. This, in turn, uses [Radix UI](https://www.radix-ui.com/) which is based on the <dialog> html element.  Other components from Shadcn that have been used are Input, Button, and Textarea. 

### Class Variance Authority  
Otherwise referrred to as cva, it can be downloaded from npm.  This is a small library that allows props to be added to a Button component and so make available a wide range of different display properties.  

### clsx  
Described as a 'tiny (239B) utility' in npm which allows classNames to be constructed conditionally. Thus a className can be defined containing certain tailwind styles which are applied based on whether a stated condition is truthy falsey.  In this app example, the border colour of the task changes according to whether the status is 'Todo', 'In Progress', or 'Done'.  





### Credit  
Coding based on https://www.youtube.com/watch?v=BxohoXjbhKc from Hamed Bahram, the publisher of some great material on YouTube.  

