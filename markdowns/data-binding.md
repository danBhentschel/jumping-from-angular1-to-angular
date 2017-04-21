Let's take a look at how Data-Binding works in Angular. Displaying stuff in your template is still done with the `{{ doubleCurlyBrackets }}` notation, so that's pretty easy, but other than that, passing variables and events to components happens with different notations.

# Variables (input)

You use input binding to pass the value of a variable to a child component. In Angular1 you used to do

```html
<directive child-name="scopeVariable">
```

But now, you will use the `[]` square bracket notation, like so

```html
<directive [childName]="scopeVariable">
```

This binds *value*. It actually binds to an attribute of the child component that has been marked as an input with the `@Input` decorator.

```javascript
@Component({
  ...
})
class Compo {
  @Input()
  public param;
}
```

Let's try it out, shall we?

# Events (output)

Two-ways binding doesn't really exist in Angular anymore, so when you want to send data upward to the parent component, you need to use events. Events are defined with the `()` notation like this:

```html
<directive (theEvent)="theScopeFunction($event)">
```

And guess what, a bunch of events already exist, they are the [existing DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp), the ones you used to prepend `ng-` to. You can now use `ngClick` like this:

```html
<button (click)="clickButton()">
```



## What happened to...

### `ng-class` and angular-specific directives?

`ngClass`, and others such as `ngStyle` are bound like regular variables,

```html
<directive [ngClass]="scopeVariable">
```

### `ng-model`?

`ngModel` is a bit different because it is both downward and upward, both input and output, right? No worries, Angular got you covered:

```html
<input [(ngModel)]="scopeVariable">
```

