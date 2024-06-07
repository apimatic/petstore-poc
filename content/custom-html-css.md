# Customizing Your APIMatic Documentation with HTML and CSS Elements

*APIMatic* allows you to enhance your documentation using custom HTML and CSS elements. Below are some examples of how you can incorporate various elements such as custom cards, iframes, buttons, and collapsible content.

### Custom Cards

You can create custom cards by defining your own CSS. Here's an example:

<div class="cards-group-wrapper">
    <div class="petstore-card">
      <div class="petstore-card-content-wrapper">
        <div class="petstore-card-info">
          Petstore is a sample API that simulates a pet shop management server. Playing around with this API documentation can help you understand how APIMatic docs provide value to you.
        </div>
      </div>
    </div>
</div>

### Iframes

You can use iframes to embed other web elements directly into your documentation. For example, you can embed an animated GIF showcasing the Petstore API:

<iframe src="https://res.cloudinary.com/apimatic/image/upload/v1686294906/642aaef086700d929a215dc5/642aaef086700d929a215dc5--petstore.gif" width="100%" height="180px" frameBorder="0" scrolling="no" style="border: none;"> </iframe>

### Custom Buttons

You can use Buttons to make the documentation more interactive:

<button type="button" class="petstore-custom-btn">Primary Button</button>

### Collapsible content

You can also incorporate collapsible content into the documentation:

<details>
  <summary>Click to expand!</summary>
  
  This is an example of collapsible content. It's hidden by default, but you can expand it by clicking on the "Click to expand!" text above.
</details>
