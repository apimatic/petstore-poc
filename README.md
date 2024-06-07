# Pet Store-POC

This repository demonstrates the functionalities of  APIMatic's [Docs as Code Solution](https://docs.apimatic.io/docs-as-code/documentation-as-code-overview/) which allows users to provide all aspects of API Documentation as part of the code.

Visit the [Published Portal](https://apimaticpetstore.pages.dev/).

## How to Generate a Docs As Code Developer Portal:   
  
*The Portal Generation API* is used to create a Docs As Code Developer Portal.It is offered as a standalone solution that is **completely independent** of [APIMatic's web based solution](https://www.apimatic.io/). This is an API first solution and does not come with a GUI.

The Portal Generation API allows the entire Documentation Portal to be managed via a git repository. This includes API Specifications, Markdown Documentation, Cofiguration files as well as static content referenced in the documentation such as images. 

The Portal Generation API expects these files to be provided as a ZIP archive, with the following directory structure:

```
APIMATIC-BUILD.json
spec\
  openapi.json
content\
  guide1.md
  guide2.md
  toc.yml
  custom-section/
    section-overview.md
    toc.yml
static\
  images\
    img1.png
    img2.jpg
  another-static-file.txt
```
In addition to the above directory structure, the following constraints are also applied on the input ZIP archive:
- APIMatic expects a file with name ending with APIMATIC-BUILD.json file in the root directory. For details on the contents of this file, check out our [documentation](https://portal-api-docs.apimatic.io/#/http/generating-api-portal/build-file). 
- The spec folder must contain at least one API specification. This can be in any of the API specification formats supported by APIMatic.
- content and static directories can be skipped if you do not have custom content or static files.

See this [Document]((https://docs.apimatic.io/docs-as-code/generating-api-portal-via-apimatic-docs-as-code/) for further information about the Portal Generation API and how it can be automated.

## Features of APIMatic's Docs as Code Portal:

### Guided Walkthroughs:
With APIMatic's [Guided Walkthroughs](https://docs.apimatic.io/platform-api/#/http/guides/generating-on-prem-api-portal/guided-walkthroughs), your API documentation can now include step by step instructions to solve common use cases for developers. Through code samples and live try-it calls, developers get hands-on experience of chaining a series of API calls to reach a business objective.

### Linking Published Packages:
Integrate popular package repositories like NuGet, Maven, and Npm directly into the portal, allowing users to download the source code seamlessly. See this [Detailed Documentation](https://docs.apimatic.io/platform-api/#/http/guides/generating-on-prem-api-portal/build-file-reference/generateportal-languageconfig-language_name-packagerepository) to enable this functionality in your portal.

### Multiple Request Samples:
The  [Multiple Request Samples Feature](https://docs.apimatic.io/changelog/dev-portal-support-for-multiple-request-examples/) allows API providers to illustrate different use cases with varied request payloads, significantly enhancing the Developer Portal. This feature enables developers to view diverse request body examples directly next to the designated operation, improving understanding and usability.

### Support for oneOf and anyOf Types:
In the Developer Portal, the support for OneOf and AnyOf properties allows users to interact with different schema options as selectable choices, streamlining data modeling and validation within a unified interface.

### Support for Custom HTML and CSS:
The Developer Portal  supports custom CSS and various HTML elements, including collapsible sections, buttons, and iframes. This enhancement allows for personalized styling and the integration of interactive elements, enriching the user experience and providing greater flexibility in content presentation.See the following [documentation](https://docs.apimatic.io/platform-api/#/http/guides/generating-on-prem-api-portal/build-file-reference/generateportal-tailincludes) to add include stylesheet while generating the Developer Portal.

