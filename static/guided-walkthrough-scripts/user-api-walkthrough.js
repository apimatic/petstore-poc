async function UserApiWalkthrough(workflowCtx, portal) {
  return {
    "Introduction": {
      name: "Introduction Guide",
      stepCallback: async () => {
        return workflowCtx.showContent(`## Introduction
This is a guided walkthrough that will showcase adding a new user record and then using the user data to login. Once you go through the walkthrough details click on **Next** to Start with Step1. 

## Walkthrough Details
### Step 1
1. In the **Step 1**, you will be creating a new user in the pet store.
2. Fill out all the fields provided.
3. Once the fields have been entered, now click on the **Try it Out** button.

### Step 2
1. The \`username\` and \`password\` from **Step 1** will be copied to **Step 2**. 
2. Now click on **Try it Out** button to send a login request to petstore using the information of the user created in the **Step 1**.

### Step 3
1. Now click on **Try it Out** button to send a logout request to clear your active login session in petstore .`);
      },
    },
    "Step 1": {
      name: "Add New User",
      stepCallback: async (stepState) => {
        await portal.setConfig((defaultConfig) => ({
          ...defaultConfig,
        }));
        return workflowCtx.showEndpoint({
          description: "This endpoint is used to create a new user for the store.",
          endpointPermalink: "$e/user/createUser",
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
      name: "Login to Petstore",
      stepCallback: async (stepState) => {
        const step2State = stepState?.["Step 1"];
        await portal.setConfig((defaultConfig) => {
          return {
            ...defaultConfig,
          };
        });
        return workflowCtx.showEndpoint({
          description:
            "This endpoint will send a login request to the store. If the login is successfull it will return the logged in user session id.",
          endpointPermalink: "$e/user/loginUser",
          args: {
              username: step2State?.data?.username,
              password: step2State?.data?.password
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
      name: "Logout from Petstore",
      stepCallback: async (stepState) => {
        const step3State = stepState?.["Step 2"];
        await portal.setConfig((defaultConfig) => {
          return {
            ...defaultConfig,
          };
        });
        return workflowCtx.showEndpoint({
          description:
            "This endpoint will send a logout request to the store. If there is an active logged in user session id it will be cleared.",
          endpointPermalink: "$e/user/logoutUser",
          args: {
              petId: step3State?.data?.id,
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
