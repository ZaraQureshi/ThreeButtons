This project was built to understand how data can be passed among different components. To avoid the complexity of prop drilling, Redux toolkit was used to manage the state and share the data among several components.
The below image was the idea to be implemented
<img src="[idea.jpeg](https://github.com/ZaraQureshi/ThreeButtons/edit/master/public/idea.jpeg)"/>

The three different colored boxes are three different components (brown, purple, pink)
The first component has a scorecard progress bar
The second component has three different colored progress bars for individual progress (red, green, blue)
The third component has three button which are corresponding to the same colored progress bar  

When the count buttons are clicked, the state is to be updated across all the components. 
