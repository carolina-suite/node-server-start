
# Sitewide React Components #

## Tailwinds #

Components that assume you have a tailwinds CSS.

### Alerts #

**Left Accent Alert**

An alert with an accent on the left side.

`import { LeftAccentAlert } from site/src/react/components/tailwinds/Alerts`;

*Properties*

* `alert`: The bold text of the alert.
* `color`: The color name. Must be defined in the CSS with `color-lightest` and so forth.
* `message`: The full message of the alert.

*Usage*

`<LeftAccentAlert alert="Oh No!" color="red" message="There was an error." />`

**Solid Alert**

An alert made of a solid color with an icon.

`import { SolidAlert } from site/src/react/components/tailwinds/Alerts`;

*Properties*

* `alert`: The bold text of the alert.
* `color`: The color name. Must be defined in the CSS with `color-lightest` and so forth.
* `faIcon`: A font awesome icon name to display (optional).
* `message`: The full message of the alert.

*Usage*

`<SolidAlert alert="Oh No!" color="red" faIcon="play" message="There was an error." />`

**Titled Alert**

An alert like a Bootstrap 3 Panel.

`import { TitledAlert } from site/src/react/components/tailwinds/Alerts`;

*Properties*

* `alert`: The bold text of the alert.
* `color`: The color name. Must be defined in the CSS with `color-lightest` and so forth.
* `message`: The full message of the alert.

*Usage*

`<TitledAlert alert="Oh No!" color="red" message="There was an error." />`

**Top Accent Alert**

An alert with an accent at the top and an icon.

`import { TopAccentAlert } from site/src/react/components/tailwinds/Alerts`;

*Properties*

* `alert`: The bold text of the alert.
* `color`: The color name. Must be defined in the CSS with `color-lightest` and so forth.
* `faIcon`: A font awesome icon name to display (optional).
* `message`: The full message of the alert.

*Usage*

`<TopAccentAlert alert="Oh No!" color="red" faIcon="play" message="There was an error." />`

**Traditional Alert**

A bootstrap-like alert.

`import { TraditionalAlert } from 'site/src/react/components/tailwinds/Alerts'`;

*Properties*

* `alert`: The bold text of the alert.
* `color`: The color name. Must be defined in the CSS with `color-lightest` and so forth.
* `message`: The full message of the alert.

*Usage*

`<TraditionalAlert alert="Oh No!" color="red" message="There was an error." />`

### Buttons #

`import { Button } from 'site/src/react/components/tailwinds/Buttons'`

The Button components have all the following properties:

* `color`: The color name for the button. Must be defined in the CSS with `color-lightest` and so forth.
* `text`: The text of the button.
* `textColor`: The color name for the text of the button (defaults to white).
* `onClick`: A handler for click events (optional).

*Usage*

`<Button color="red" text="Click Here!" textColor="white" onClick={this.handleClick} />`

*Types*

* `BorderedButton`: A button with dark borders.
* `Button`
* `IconButton`: Icon included with the optional `faIcon` prop.
* `OutlineButton`: A transparent button with an outline.
* `PillButton`: Fully rounded corners.
* `ThreeDimensionalButton`: Button with a 3D look.
