async function PetStoreApiWalkthrough(workflowCtx, portal) {
  return {
    "Guide": {
      name: "Introduction Guide",
      stepCallback: async () => {
        return workflowCtx.showContent(`## Introduction
This is a guided walkthrough that will showcase adding a pet record and then using the pet ID to fetch the details of the pet. Once you go through the walkthrough details click on **Next** to Start with Step1.

## Walkthrough Details
### Step 1
1. In the **Step 1**, you will be adding a new pet to the pet store.
2. The \`required\` fields for the \`Add New Pet\` is the \`name\`. If the \`id\` is not entered the system generated ID will be assigned. 
3. It is upto you to add the other fields optional fields. 
4. Once the fileds have been entered, now click on the **Try it Out** button.

### Step 2
1. The \`id\` from **Step 1** will be copied to **Step 2**. 
2. Now click on **Try it Out** button to fetch information on entered in the **Step 1**.

### Step 3
1. The \`id\`, \`name\`, and \`status\` from **Step 2** will be copied to **Step 3**. 
2. change the \`name\` and any other value if you want. 
3. Now click on **Try it Out** button to update the information entered in **Step 1**.`);
      },
    },
    "Step 1": {
      name: "Add New Pet",
      stepCallback: async (stepState) => {
        await portal.setConfig((defaultConfig) => ({
          ...defaultConfig,
        }));
        return workflowCtx.showEndpoint({
          description: "This endpoint is used to add a new pet to the store.",
          endpointPermalink: "$e/pet/addPet",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid repsonse. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
    "Step 2": {
      name: "Get Pet by ID",
      stepCallback: async (stepState) => {
        const step2State = stepState?.["Step 1"];
        await portal.setConfig((defaultConfig) => {
          return {
            ...defaultConfig,
          };
        });
        return workflowCtx.showEndpoint({
          description:
            "This endpoint returns the single-use short-lived web token which can be used for logging in to the web app.",
          endpointPermalink: "$e/pet/getPetById",
          args: {
              petId: step2State?.data?.id,
          },
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid repsonse. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
    "Step 3": {
      name: "Update Existing Pet",
      stepCallback: async (step2State) => {
        const step3State = step2State?.["Step 2"];
        await portal.setConfig((defaultConfig) => {
          return {
            ...defaultConfig,
          };
        });
        return workflowCtx.showEndpoint({
          description:
            "This endpoint is used to update an existing pet on the store.",
          endpointPermalink: "$e/pet/updatePetWithForm",
          args: {
            petId: step3State?.data?.id,
            name: step3State?.data?.name,
            status: step3State?.data?.status
          },
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid repsonse. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
  };
}
