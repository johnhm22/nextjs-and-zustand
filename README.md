## Overview  
A NextJS project using the global state management library Zustrand.  

The app allows the user to create a new task which is then, by default, saved in the Todo column. This task can be dragged and dropped between columns. Once dropped the border colour of the task will change.  
Each task can be deleted by clicking on the bin icon.  
Zustrand has been coded to save the tasks in localstorage.  

![image](https://github.com/johnhm22/nextjs-and-zustand/assets/71333679/69295186-999a-4549-b699-7577dbe1b768)


## Tech Stack  
NextJS using TypeScript and Tailwindcss  
Zustrand as a global state manager  

### Zustrand  
A Zustrand store is created in lib/store.ts. Here types are defined for Status, Tasks, State, and Actions. The useStore hook is named useTaskStore. It stores the tasks array and the draggedTask id and, also, the actions: addTask, dragTask, removeTask, and updateTask.  
When an action, for example, is required in a component, useTaskState is called and the action returned, and saved in a constant.  

Here we retrieve the addTask function from the store and then use it below passing in the title and description as arguments. The addTask function will add a new task to those stored in Zustrand at a global app level.

![image](https://github.com/johnhm22/nextjs-and-zustand/assets/71333679/fbfa8006-a202-470e-a24f-eef9bd422c63)


![image](https://github.com/johnhm22/nextjs-and-zustand/assets/71333679/287479d5-38ba-417b-a4e3-45ea3fc4ab5b)  

Below we retrieve the tasks from the Zustrand store.
![image](https://github.com/johnhm22/nextjs-and-zustand/assets/71333679/457a3bf9-4c07-4c9d-8dcb-1934e6a52c26)


## Tech points of interest  
### Dialog component and others  
The Dialog component from Shadcn/ui has been used to manage the pop-up modal for adding a new task. This, in turn, uses [Radix UI](https://www.radix-ui.com/) which is based on the <dialog> html element.  Other components from Shadcn that have been used are Input, Button, and Textarea. 

### Class Variance Authority  
Otherwise referrred to as cva, it can be downloaded from npm.  This is a small library that allows props to be added to a Button component and so make available a wide range of different display properties.  

### clsx  
Described as a 'tiny (239B) utility' in npm which allows classNames to be constructed conditionally. Thus a className can be defined containing certain tailwind styles which are applied based on whether a stated condition is truthy falsey.  In this app example, the border colour of the task changes according to whether the status is 'Todo', 'In Progress', or 'Done'.  

### Tailwind Merge (twMerge)  
This utility function (699 kB), available from npm, allows the developer to make custom, 'one-off' changes to the pre-defined styles for a component such as a button. When the custom style is merged with the default styles the desired custom style can be ignored. This is due to the operation of CSS cascade which orders styles. twMerge ensures this doesn't happen and what you want is what you see.  
[Read about it here](https://github.com/dcastil/tailwind-merge/blob/v2.3.0/docs/what-is-it-for.md)

## How to use  
Simply clone this directory, run 'npm install', or similar from another package manager, and then 'npm run dev' or the equivalent package manager command.

### Credit  
Coding is basically from https://www.youtube.com/watch?v=BxohoXjbhKc by Hamed Bahram, the publisher of some great material on YouTube.  

