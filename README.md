<center>
<img src="https://raw.githubusercontent.com/jobayer977/react-native-div-layout/main/docs/logo.png" alt="React Native Div Layout" width="200" />
</center>
React Native Div Layout provides a set of utility props to make designing with custom styles easier in React Native. With this package, you can quickly and easily add custom styles to your components, without having to write a lot of custom CSS or JavaScript.

## Installation

To install the React Native Div Layout package, you can use the following command:

```bash
npm install react-native-div-layout
```

## Usage

Once you have installed the package, you can start using it in your React Native application by importing it like this:

```JavaScript
import { Div } from 'react-native-div-layout';

```

After that, you can use the Div component in your JSX code like any other React Native component. However, unlike other components, the Div component comes with a set of utility props that you can use to customize its appearance.

Here are some examples of the utility props that are available:

```jsx
<Div bg="red">
  <Text>Hello, world!</Text>
</Div>
```

## Components and Props

### Div

The Div component is a wrapper component that can be used to apply styles to child components. The following props can be used with the Div component:

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>borderColor</td>
            <td>string</td>
            <td>Sets the border color of the component.</td>
        </tr>
        <tr>
            <td>borderTopColor</td>
            <td>string</td>
            <td>Sets the top border color of the component.</td>
        </tr>
        <tr>
            <td>borderRightColor</td>
            <td>string</td>
            <td>Sets the right border color of the component.</td>
        </tr>
        <tr>
            <td>borderBottomColor</td>
            <td>string</td>
            <td>Sets the bottom border color of the component.</td>
        </tr>
        <tr>
            <td>borderLeftColor</td>
            <td>string</td>
            <td>Sets the left border color of the component.</td>
        </tr>
        <tr>
            <td>borderWidth</td>
            <td>number</td>
            <td>Sets the border width of the component.</td>
        </tr>
        <tr>
            <td>borderTopWidth</td>
            <td>number</td>
            <td>Sets the top border width of the component.</td>
        </tr>
        <tr>
            <td>borderRightWidth</td>
            <td>number</td>
            <td>Sets the right border width of the component.</td>
        </tr>
        <tr>
            <td>borderBottomWidth</td>
            <td>number</td>
            <td>Sets the bottom border width of the component.</td>
        </tr>
        <tr>
            <td>borderLeftWidth</td>
            <td>number</td>
            <td>Sets the left border width of the component.</td>
        </tr>
        <tr>
            <td>borderStartWidth</td>
            <td>number</td>
            <td>Sets the border start width of the component.</td>
        </tr>
        <tr>
            <td>borderEndWidth</td>
            <td>number</td>
            <td>Sets the border end width of the component.</td>
        </tr>
        <tr>
            <td>borderStyle</td>
            <td>ViewStyle['borderStyle']</td>
            <td>Sets the border style of the component.</td>
        </tr>
        <tr>
            <td>m</td>
            <td>number</td>
            <td>Sets margin for all sides of the component.</td>
        </tr>
        <tr>
            <td>mt</td>
            <td>number</td>
            <td>Sets margin for the top of the component.</td>
        </tr>
        <tr>
            <td>mr</td>
            <td>number</td>
            <td>Sets margin for the right of the component.</td>
        </tr>
        <tr>
            <td>mb</td>
            <td>number</td>
            <td>Sets margin for the bottom of the component.</td>
        </tr>
        <tr>
            <td>ml</td>
            <td>number</td>
            <td>Sets margin for the left of the component.</td>
        </tr>
        <tr>
            <td>mx</td>
            <td>number</td>
            <td>Sets horizontal margin of the component (left and right).</td>
        </tr>
        <tr>
            <td>my</td>
            <td>number</td>
            <td>Sets vertical margin of the component (top and bottom).</td>
        </tr>
        <tr>
            <td>ms</td>
            <td>number</td>
            <td>Sets margin for start of the component (left in LTR mode, right in RTL mode).</td>
        </tr>
        <tr>
            <td>p</td>
            <td>number</td>
            <td>Sets padding for all sides of the component.</td>
        </tr>
        <tr>
            <td>pt</td>
            <td>number</td>
            <td>Sets padding for the top of the component.</td>
        </tr>
        <tr>
            <td>pr</td>
            <td>number</td>
            <td>Sets padding for the right of the component.</td>
        </tr>
        <tr>
            <td>pb</td>
            <td>number</td>
            <td>Sets padding for the bottom of the component.</td>
        </tr>
        <tr>
            <td>pl</td>
            <td>number</td>
            <td>Sets padding for the left of the component.</td>
        </tr>
        <tr>
            <td>px</td>
            <td>number</td>
            <td>Sets horizontal padding of the component (left and right).</td>
        </tr>
        <tr>
            <td>py</td>
            <td>number</td>
            <td>Sets vertical padding of the component (top and bottom).</td>
        </tr>
        <tr>
            <td>ps</td>
            <td>number</td>
            <td>Sets padding for start of the component (left in LTR mode, right in RTL mode).</td>
        </tr>
        <tr>
            <td>rounded</td>
            <td>number</td>
            <td>Sets the border radius of the component.</td>
        </tr>
        <tr>
            <td>roundedTopLeft</td>
            <td>number</td>
            <td>Sets the top-left border radius of the component.</td>
        </tr>
        <tr>
            <td>roundedTopRight</td>
            <td>number</td>
            <td>Sets the top-right border radius of the component.</td>
        </tr>
        <tr>
            <td>roundedBottomLeft</td>
            <td>number</td>
            <td>Sets the bottom-left border radius of the component.</td>
        </tr>
        <tr>
            <td>roundedBottomRight</td>
            <td>number</td>
            <td>Sets the bottom-right border radius of the component.</td>
        </tr>
        <tr>
            <td>roundedTop</td>
            <td>number</td>
            <td>Sets the border radius of the top</td>
        </tr>
    </tbody>
</table>
