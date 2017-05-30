You're used to create `component` or directives in Angular1 to make reusable web components. They still exist in Angular, and they're awesome.

Most of the things you will do in Angular will be components.

* Where you used AngularJS directives, you will use components
* Where you used AngularJS modules, you will almost always use components
* Where you used AngularJS components, you will use components

# Syntax

In Angular1, declaring a component used to be like this:

```javascript
theModule.component('componentName', {
  templateUrl: 'path/to/template.html',
  controller: function() {
    ...
  }
});
```

But hey, how does it work? How do I use this component in a template? Will it be `<componentName>` or `<component-name>`? What if I want to specify a custom tag name that is different from the name of the component?

Let's look at how Angular does it. You need a class and a `@Component` decorator:

```javascript
@Component({
  selector: 'compo',
  templateUrl: './compo.html',
  styleUrls: ['./compo.css'],
})
class Compo {
  awesome: string = 'yes';
}
```

* `selector` is the tag name
* `templateUrl` is the same as in Angular1, you can also use inline `template`
* `styleUrls`, that's the cool new feature as you can add a list of stylesheets to include. You can also use inline `styles`

The class serves as a controller for your component.

Cleaner. Leaner. Let's try it out:

@[Component demo]({"stubs": ["components/app/sample.ts"], "command": "echo 'CG> open --static-dir /project/target/components index.html'"})

# Advanced

There are [a bunch](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html) of other properties to the `@Component` decorator, like a list of `providers` it will use. You need to reference these providers if your component uses them.

Refer to [the official Component documentation](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html) for a list of usable properties.

## What happened to...

### The `$onInit`, `$onDestroy`, `$onChanges` hooks?

Angular component have a series of lifecycle hooks you can use. A complete list and guide are [available here](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html).

But if you want to use one, for instance `OnInit`, first thing first you will need to import it from the angular core library:

```javascript
import { OnInit } from '@angular/core';
```

Then, you will need to have your component class implement `OnInit` (and any other hook you need):

```javascript
@Component({
  ...
})
class Compo implements OnInit {
  ...
}
```

And then you can add a `ngOnInit` function to this component class:

```javascript
ngOnInit() {
  this.logIt('On Init');
}
```

### Transclusion?

AngularJS directives used to have a `transclude` property, now by default Angular components support transclusion. Just use the `<ng-content>` tag in your template like so:

```html
<div class="component">
  <ng-content><!-- Transcluded data, if any, will come here --></ng-content>
</div>
```

And call your component with data that is going to be transcluded automatically

```html
<my-component>Data to be transcluded</my-component>
```

### Data Bindings?

Well, that's going to be a separate lesson ;) Let's meet in the next one!
