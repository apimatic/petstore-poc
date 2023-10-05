async function PetOrderApiWalkthrough(workflowCtx, portal) {
    return {
      "Guide": {
        name: "Introduction Guide",
        stepCallback: async () => {
          return workflowCtx.showContent(`## Introduction
  This is a guided walkthrough that will showcase placing an order on petstore and using the order ID to get the order details. Once you go through the walkthrough details click on **Next** to Start with Step1.
  
  ## Walkthrough Details
  ### Step 1
  1. In the **Step 1**, you will check the pet details for the id provided from the pet store.
  2. now click on the **Try it Out** button to get the details of the id provided.
  
  ### Step 2
  1. The \`id\` from **Step 1** will be copied to **Step 2** as \`petId\`. 
  2. Enter all the other details for the order in the provided fields. 
  2. Now click on **Try it Out** button to place the order.
  
  ### Step 3
  1. The \`id\` of the order from **Step 2** will be copied to **Step 3**. 
  2. Now click on **Try it Out** button to get the details of the order placed in **Step 2**.`);
        },
      },
      "Step 1": {
        name: "Get Pet by ID",
        stepCallback: async (stepState) => {
          await portal.setConfig((defaultConfig) => ({
            ...defaultConfig,
          }));
          return workflowCtx.showEndpoint({
            description: "This endpoint is used to get pet details from the store.",
            endpointPermalink: "$e/pet/getPetById",
            args: {
                petId: 10,
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
      "Step 2": {
        name: "Place Order",
        stepCallback: async (stepState) => {
          const step2State = stepState?.["Step 1"];
          await portal.setConfig((defaultConfig) => {
            return {
              ...defaultConfig,
            };
          });
          return workflowCtx.showEndpoint({
            description:
              "This endpoint is used to place an order on the petstore.",
            endpointPermalink: "$e/store/placeOrder",
            args: {
                petId: step2State?.data?.id,
                id: 10,
                quantity: 7,
                shipDate: '2023-05-31',
                complete: true,
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
        name: "Get Order By Id",
        stepCallback: async (step2State) => {
          const step3State = step2State?.["Step 2"];
          await portal.setConfig((defaultConfig) => {
            return {
              ...defaultConfig,
            };
          });
          return workflowCtx.showEndpoint({
            description:
              "This endpoint is used to get the order details from the store.",
            endpointPermalink: "$e/store/getOrderById",
            args: {
              orderId: step3State?.data?.id,
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
  