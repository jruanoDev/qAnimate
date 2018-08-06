# qAnimate
qAnimate is a Work In Progress jQuery Plugin that contains useful animations to use on all kinds of web proyects, containing sliders, text effects, etc. All made with CSS & JS

## Functions

### makeSlider({options})

Make a slider with the parameters introduced into the function, you should add the CSS class you want to apply to the
elements when focused class comes in, focused class applies to list element that is in the focus of the slider.

Options: 

	- focusedClass:String :: [<li> tag] Applies to the current focused element, it changes to the next/previous element when the controls are triggered.
	- disabledClass:String :: [<li> tag] Apllies to the non-focused element, by default is set to all elements except the first child of parent.
	- leftCtrl:String :: [<any>] Applies to the move-right control, that makes the slider go forwards.
	- rightCtrl:String :: [<any>] Applies to the move-left control, that makes the slider go backwards.
	- controlsInside:Boolean :: Specify if the left/right controls are inside the container of the list, if not the plugin will search for it on the entire page.

### makeMenu({options})

Make a side menu with the options specified, as makeSlider does, the CSS classes that applies to the elements in the menú must be set by the user, as well as transitions, animations, etc.

Options:

	- animClass:String :: [<li/any> tag] Applies the animations to the list elements in the menu.
	- menuSelector:String :: [<any>] Container of the menu element, it must be the parent of the entire menu. Example: [<div (menuSelector)> <ul> <li> ... </ul> </div>]
	- closeSelector:String :: [<any>] Specifies the element that user must click on to close the menu.

### fadeInWithAnim(delay, selectedClass)

Trigger a CSS animation (specified by the user) iterating by all the selected elements with a specific delay.

Parameters:
	
	- delay:Integer :: Specifies the delay between animations on the elements.
	- selectedClass:String :: Specifies the class to trigger the effects on element.

### fadeOutWithAnim(delay, selectedClass, callback)

Trigger a CSS animation iterating between elements with a delay, when all proccess is completed a callback is called.

Parameters:

	- delay:Integer :: Specifies the delay between animations on the elements.
	- selectedClass:String :: Specifies the class to trigger the effects when element go out.
	- callback:Function :: Function called when all elements are out.
